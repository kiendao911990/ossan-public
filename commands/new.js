const { MessageEmbed, Permissions } = require('discord.js');
const mangaService = require('../core/service/mangaService');
require('dotenv').config(); //initialize dotenv
const mangaCategory = new Map();
mangaCategory.set('1','Manga');
mangaCategory.set('5','Manhwa');
mangaCategory.set('9','Manhua');
mangaCategory.set('19','Manga');
mangaCategory.set('20','Manhua');
mangaCategory.set('21','Manhwa');

module.exports = {
    name : 'new',
    description: 'post news manga chapter',
    permissions: [Permissions.FLAGS.ADMINISTRATOR],
    roles: ['bot','Adventurers\' Guild','Admin','SuperAdmin'],
    cooldown: 10,
    async execute(client, message, args, originalContent){
        const channel = message.guild.channels.cache.find(c => c.name === 'tin-tuc-manga-anime');
        if(!channel) return message.channel.send('tạo channel tin-tuc-manga-anime');
        const errorEmbed = new MessageEmbed()
            .setColor('#0099ff')
            .setDescription(`phải truyền id của truyện lên`)
            .setImage('https://otakusan.net/Content/Img/guild_new.jpg')

        if(!args || args.length === 0){
            await message.channel.send({ 
                embeds: [errorEmbed]
            });
            return;
        }
        let id = args[0]

        if(isNaN(id)) {
            await message.channel.send({ 
                embeds: [errorEmbed]
            });
            return;
        }

        try{
            var mangaChapter = await mangaService.getMangaChapter(id);
            if(mangaChapter){
                let embed = new MessageEmbed()
                .setColor('#0099ff')
                .setTitle(`${mangaChapter.MangaName} - Chapter ${mangaChapter.ChapNumber}`)
                .setURL(`https://otakusan.net/chapter/${mangaChapter.Id}/${mangaChapter.MangaKeyName}-chap-${mangaChapter.ChapNumber}`)
                .setAuthor({ name: mangaChapter.TranslatorName, iconURL: mangaChapter.TranslatorAvatar})
                .addFields(
                    { name: 'Thể Loại', value: mangaCategory.get(`${mangaChapter.Category}`), inline: true },
                    { name: 'Tác Giả', value: mangaChapter.AuthorName, inline: true },
                    { name: 'Rate', value: `${mangaChapter.Rate}/10`, inline: true },
                )
                .setImage(mangaChapter.PictureUrl)
                .setFooter({ text: 'Click vào icon react để lấy role mention' });
                
                if(mangaChapter.InactiveSupporter){
                    embed = embed.setDescription(`Support/Inactive: ${mangaChapter.InactiveSupporter}`);
                }
                if(mangaChapter.IsAdult){
                    embed = embed.setThumbnail('https://otakusan.net/Content/Img/under18.png');
                }
                let messageResult = await channel.send({ 
                    content: `${mangaCategory.get(`${mangaChapter.Category}`)} - ${mangaChapter.MangaName} - Chapter ${mangaChapter.ChapNumber} <@&${process.env.ROLE_MANGA}>`,
                    embeds: [embed]
                }).catch(err => {
                    console.log(err);
                });
                if(messageResult){
                    messageResult.react('🔯');
                    messageResult.react('📵');
                    message.delete();
                }
            }
        }catch(err){
            console.log(err);
        }
    }
}