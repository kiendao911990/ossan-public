const { MessageEmbed, Permissions } = require('discord.js');

module.exports = {
    name : 'rr',
    description: 'create react role',
    permissions: [Permissions.FLAGS.ADMINISTRATOR],
    alias: ['rr', 'rrole'], 
    async execute(client, message, args, originalContent){
        const acceptRoleEmoji = '🔯';
        const denyRoleEmoji = '📵';

        let embed = new MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Click emoji bên dưới để nhận role mention khi có truyện ra')
            .setDescription(`${acceptRoleEmoji} để nhận\n ${denyRoleEmoji} để hủy`);
        
        let messageEmbed = await message.channel.send({embeds:[embed]}).catch(err => {
            console.log(err);
        });
        if(messageEmbed){
            messageEmbed.react('🔯');
            messageEmbed.react('📵');
        }
    }
}