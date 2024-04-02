const { Collection } = require('discord.js');
const { removeVI } =  require('jsrmvi');
const answerComponent = require('../core/component/anwser');
const answerCollection = require('../core/component/collection');
const wiki = require('wikipedia'); //https://www.npmjs.com/package/wikipedia

const answer = new Collection();
answer.set(1, 'ạ đi, mị cho nè');
answer.set(2, 'ngoo nè');
answer.set(3, 'hihi ngốc nghếch');
answer.set(4, 'đây');
answer.set(5, '');
const optionReplace = ['có ai biết', 'có ai biết', 'cho hỏi','/đố [\s\S]+ biết/g', 'mọi người', 'hỏi','đố mày', 'đố mài', 'đố', 'ơi'];

async function wikiSearch (lang, key) {
    wiki.setLang(lang);
    let summary = await wiki.summary(key);
    if(summary){
        let title = summary.title
        if(!title || title === 'Not found.') return null;

        var response = answer.random();
        return answerCollection.generateEmbed(response,summary.thumbnail?summary.thumbnail.source:'',
            summary.extract,'powered by wikipedia');
    }
    return null;
}

module.exports = {
    name : 'search',
    description: 'search wiki data',
    cooldown: 20,
    async execute(client, message, args, originalContent){
        if(!args || args.length === 0) return;
        const key = args[0];
        let content = args[1];
        if(!key || !content) return;

        optionReplace.forEach(item =>{
            content = content.replace(item, '');
        })
        let optionString = '';
        if(content.indexOf(key) > 0){
            optionString = content.substring(content.indexOf(key));
            optionString = optionString.slice(key.length).replace();
        }
        if(!optionString)
            optionString = content.replace(key,'');

        try {
            let collecion = await wikiSearch('vi', optionString);
            if(!collecion){
                optionString = removeVI(optionString, { ignoreCase: false, replaceSpecialCharacters: false });
                collecion = await wikiSearch('vi', optionString);
            }
            if(!collecion){
                collecion = await wikiSearch('en', optionString);
            }
            if(collecion)
                answerComponent(message, collecion);

            else if(originalContent.indexOf(process.env.BOT_NAME) >= 0 || originalContent.indexOf(process.env.BOT_NAME2) >= 0
            || originalContent.indexOf(process.env.BOT_ID) >= 0 || originalContent.indexOf(process.env.BOT_NAME3) >= 0){
                const anwserCommand = require('../commands/answer');
                anwserCommand.execute(client,message,args,originalContent);
            }
        } catch (error) {
            console.log(error);
        }
    }
}