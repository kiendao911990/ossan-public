const bingchat = require('../core/service/bingService');

module.exports = {
    name : 'bingchat',
    description: 'bingchat server!',
    cooldown: 50,
    notShowCooldown: true,
    async execute(client, message, args, originalContent){
        if(!args || args.length === 0) return;
        const key = args[0];
        const content = args[1];
        if(!key || !content) return;

        try{
            let toSay = await bingchat.getAnwser(content, message.author.id);
            if(toSay){
                message.channel.send(toSay);
            }
        }catch(err){
            console.log(err);
        }
    }
}