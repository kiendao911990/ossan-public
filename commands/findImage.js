var Scraper = require('images-scraper');
const { MessageEmbed, Collection } = require("discord.js");
const google = new Scraper({
    puppeteer:{
        headless: true
    },
    tbs: {  // every possible tbs search option, some examples and more info: http://jwebnet.net/advancedgooglesearch.html
        isz:  'm'
    },
});
const answer = new Collection();
answer.set(1, 'của bạn đây :3');
answer.set(2, 'đây nhé');
answer.set(3, 'nói ạ đi');
answer.set(4, 'ngoo thế, vậy cũng không tìm được');
answer.set(5, 'hihi ngốc nghếch');
answer.set(6, '');

module.exports = {
    name : 'findimage',
    description: 'answer call!',
    cooldown: 20,
    notShowCooldown: true,
    async execute(client, message, args, originalContent){
        if(!args || args.length <= 1) return;
        const key = args[0];
        const content = args[1];
        if(!key || !content) return;

        if(originalContent.indexOf('ảnh liah') >= 0 || originalContent.indexOf('ảnh os') >= 0){
            const anwserCommand = require('../commands/answer');
            anwserCommand.execute(client,message,['ảnh liah'],originalContent);
        }

        let contentSearch = content.substring(content.indexOf(key));
        contentSearch = contentSearch.slice(key.length).trim();

        if(!contentSearch) return;
        try{
            console.log("search image: " + contentSearch);
            const image_results = await google.scrape(encodeURI(contentSearch), 50).catch(err => {
                console.log(err);
            });
            let chance = Math.floor(Math.random() * image_results.length);
    
            if(image_results.length > 0 && chance <= image_results.length){
                let image = image_results[chance];
                if(!image)
                    image = image_results[0];

                let response = {
                    embeds: [new MessageEmbed().setImage(image.url).setFooter({ text: 'powered by google image' })]
                };
                let toSay = '';
                if(content.indexOf('uwu') >= 0) toSay = 'uwu';
                if(content.indexOf('owo') >= 0) toSay = 'owo';
                if(content.indexOf('vwv') >= 0) toSay = 'vwv';
                if(content.indexOf('meow') >= 0) toSay = 'meow';
                if(content.indexOf('mèo méo meo') >= 0) toSay = 'mèo méo meo mèo meo';
                if(content.indexOf('👉👈') >= 0 || content.indexOf('👉 👈') >= 0) toSay = '👉 👈';
                
                if(toSay){
                    response.content = toSay;
                    message.channel.send(response).catch(err => {
                        console.log(err);
                    });
                }
                else{
                    toSay = answer.random();
                    while(toSay.indexOf('fasbx') > 0 || toSay.indexOf('ocumeo') > 0){
                        toSay = answer.random();
                    }
                    if(toSay)
                        response.content = toSay;
                    
                    message.reply(response).catch(err => {
                        console.log(err);
                    });
                }
                
            }
        }catch(err){
            console.log(err);
        }
    }
}