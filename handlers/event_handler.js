const fs = require('fs');

module.exports = (client) => {
    const acceptRoleEmoji = '🔯';
    const denyRoleEmoji = '📵';

    const load_dir = (dirs) => {
        const event_files = fs.readdirSync(`./events/${dirs}`).filter(file=>file.endsWith('.js'));

        for(const file of event_files){
            const event = require(`../events/${dirs}/${file}`);
            const event_name = file.split('.')[0];
            client.on(event_name, event.bind(null, client));
        }
    }
    ['client','guild'].forEach(e => load_dir(e));

    client.on('messageReactionAdd', async (reaction, user) => {
        try{
            if(user.bot) return;
            if(reaction.partial) await reaction.fetch();
            if(reaction.message.partial) await reaction.message.fetch();
            if(reaction.message.author && reaction.message.author.id != process.env.BOT_ID) return;
            if(!reaction.message.guild) return;
    
            const mentionRole = reaction.message.guild.roles.cache.find(role => role.name == 'manga-viewer');
            if(mentionRole){
                if(reaction.emoji.name === acceptRoleEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(mentionRole);
                }
                if(reaction.emoji.name === denyRoleEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(mentionRole);
                }
            } else {
                console.log('no role manga-viewer');
            }
        } catch(err) {
            console.log(err);
        }
    });
}