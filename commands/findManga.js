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
    name : 'findmanga',
    description: 'find manga from otakusan',
    cooldown: 30,
    async execute(client, message, args, originalContent){
        if(args.length <= 1)
            return;

        let key = args[0];
        let content = args[1];
        if(content.indexOf(key) >= 0){
            content = content.substring(content.indexOf(key));
            content = content.slice(key.length);
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