const { Permissions } = require('discord.js');

module.exports = {
    name : 'sayd',
    description: 'say and delete owner',
    permissions: [Permissions.FLAGS.ADMINISTRATOR, Permissions.FLAGS.MANAGE_ROLES],
    roles: ['Admin','SuperAdmin'],
    cooldown: 10,
    async execute(client, message, args, originalContent){
        let messageArgs = args.join(' ');
        message.channel.send(messageArgs);
        message.delete();
    }
}