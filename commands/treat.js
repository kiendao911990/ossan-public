const { Permissions } = require('discord.js');
module.exports = {
    name : 'treat',
    description: 'treat member',
    permissions: [Permissions.FLAGS.ADMINISTRATOR],
    roles: ['Admin','SuperAdmin'],
    cooldown: 10,
    async execute(client, message, args, originalContent){
        message.channel.send("<:test:982292427857592340>");
        message.react('<:test:982292427857592340>');
    }
}