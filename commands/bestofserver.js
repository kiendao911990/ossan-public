const { Collection } = require("discord.js");
const answerCollection = require('../core/constants/bestofserverKeymap');
const answerComponent = require('../core/component/anwser');

module.exports = {
    name : 'bestofserver',
    description: 'find best of server!',
    cooldown: 20,
    notShowCooldown: true,
    async execute(client, message, args, originalContent){
        if(!args || args.length === 0) return;
        const key = args[0];
        const content = args[1];
        if(!key || !content) return;

        try{
            let users = new Collection();
            message.channel.messages.fetch({ limit: 100 }).then(messages => {
                messages.forEach(msg => {
                    if (!msg.author.bot) {
                        if(!users.has(msg.author.id)){
                            users.set(msg.author.id,msg.author);
                        }
                    }
                });

                ///print
                let user = users.random();
                answerComponent(message,answerCollection,user.id);
            })
            .catch(console.error);
        }catch(err){
            console.log(err);
        }
    }
}