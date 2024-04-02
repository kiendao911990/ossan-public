const simsimi = require('../core/service/simsimiService');
const bingchat = require('../core/service/bingService');
const answerComponent = require('../core/component/anwser');
const keymap = require('../core/constants/answerKeymap');
const angryLevel = new Map();
const angryKeys = [' shit ',' địt ',' cmm ',' cl ',' mẹ ',' đệt ',' đệch ',' ngu ', ' dm ',' đỹ ', ' đũy ', ' chó ',' lm '];
const yesNoKeys = ['không','right','khum','hông','phải hôn', 'có hôn'];
module.exports = {
    name : 'answer',
    description: 'answer call!',
    cooldown: 5,
    notShowCooldown: true,
    async execute(client, message, args, originalContent){
        let answerCollection = null;
        let content = args.join(' ').trim();

        if(!angryLevel.has(message.author.id)){
            angryLevel.set(message.author.id, 0);
            setTimeout(() => {
                try{
                    angryLevel.delete(message.author.id);
                }catch(err){
                    console.log(err);
                }
            }, 20 * 60 * 1000);
        }

        //get angry level
        let angry = angryLevel.get(message.author.id);
        let angryMention = angryKeys.filter(x=> content.indexOf(x) >= 0);
        if(angryMention && angryMention.length > 0){
            angry = angry + angryMention.length;
            angryLevel.set(message.author.id, angry);
        }
       
        //5% silence
        let chance = Math.floor(Math.random() * 100);
        if(chance <= 5){
            chance = Math.floor(Math.random() * 10);
            try{
                switch(chance) {
                    case 9:
                        message.react('<:blob_lenny:560487919215837196>');
                        break;
                    case 8:
                        message.channel.send('<:rem_thinking:369896633745539092>');
                        break;
                    case 7:
                        message.channel.send('<:pepe_chuahe:911940527857991691>');
                        break;
                    case 6:
                        message.channel.send('<:pepe_normal:811450747979825193>');
                        break;
                    case 5:
                        message.react('<:pepe_normal:811450747979825193>');
                        break;
                    case 4:
                        message.react('🆗');
                        break;
                    case 3:
                        message.react('🆒');
                        break;
                    case 2:
                        message.react('👌');
                        break;
                    case 1:
                        message.react('<:rem_oh_yeah:369896635515273216>');
                        break;
                }
                return;
            }catch(err){
                console.log(err);
            }
        }

        if(message.mentions.users.has('366225844034600962')){
            let liahAnswerMap = keymap.filter(x=>x.cmd == 'liahAnswer');
            if(liahAnswerMap && liahAnswerMap.length > 0){
                answerCollection = liahAnswerMap[0].responses;
            }
        }
       
        keymap.forEach(map => {
            if(answerCollection) return;
            if(!map.keys) return;

            let mappingKeys = map.keys.filter(x=> content.indexOf(x) >= 0);
            if(mappingKeys && mappingKeys.length > 0){
                if(map.conditionResponses && map.conditionResponses.length > 0){
                    //find condition first
                    map.conditionResponses.forEach(res => {
                        if(!answerCollection){
                            if(res.condition.contents && res.condition.contents.length > 0){
                                let includedContents = res.condition.contents.filter(r => content.indexOf(r) >= 0);
                                if(includedContents && includedContents.length > 0){
                                    answerCollection = res.messages;
                                }
                            }
                        }
                        if(!answerCollection){
                            if(res.condition.roles && res.condition.roles.length > 0){
                                let role = res.condition.roles.filter(r => message.member.roles.cache.find(rc => rc == r));
                                if(role && role.length > 0){
                                    answerCollection = res.messages;
                                }
                            }
                        }
                        if(!answerCollection){
                            if(res.condition.authorIds && res.condition.authorIds.length > 0){
                                let author = res.condition.authorIds.filter(r => message.author.id == r);
                                if(author && author.length > 0){
                                    answerCollection = res.messages;
                                }
                            }
                        }
                    });
                }
                if(answerCollection) return;
                
                //if have no condition response, return normal response
                answerCollection = map.responses;
            }
        });

        if(!answerCollection && content && (content.indexOf(' or ') > 0 || content.indexOf(' hay ') > 0 || content.indexOf(' hoặc ') > 0)){
            const selectFunction = require("../commands/select");
            selectFunction.execute(client,message,['select',`select ${content}`], originalContent)
            return;
        }

        if(!answerCollection && content){
            try{
                /*let toSay = await bingchat.getAnwser(content, message.author.id);
                if(toSay){
                    message.channel.send(toSay);
                    return;
                }*/
                let toSay = await simsimi.getAnwser(content);
                if(toSay && toSay.indexOf('không biết bạn đang nói gì') < 0){
                    toSay = toSay.replace('/mày/g','mài').replace('/Sim/g','mị').replace('/sim/g','mị').replace('/Ly/g','Liah')
                        .replace('/ hà /g','Phát').replace('/Nkým/g','Zjt').replace('/cô bé/g','anh à').replace('one chan','onee chan').replace('Simsimi','os-chan');
                    if(toSay.indexOf('Anh') >= 0)
                        toSay = toSay.replace('Anh','em').replace('/ em /g','anh').replace('/ anh /g','em');
                    
                    message.channel.send(toSay);
                    return;
                }
            }catch(err){
                console.log(err);
            }
        }

        /*
        if(!answerCollection){
            let yesnoQuestion = yesNoKeys.filter(x=> content.indexOf(x) >= 0);
            if(yesnoQuestion && yesnoQuestion.length > 0){
                let yesnoAnswerMap = keymap.filter(x=>x.cmd == 'yesNoAnswer');
                if(yesnoAnswerMap && yesnoAnswerMap.length > 0){
                    answerCollection = yesnoAnswerMap[0].responses;
                }
            }
        }*/

        if(!answerCollection && content && (content.indexOf('say') >= 0 || content.indexOf('nói') >= 0)) {
            let toSay = '';
            if(content.indexOf('say') >= 0)
            {
                content = content.substring(content.indexOf('say'));
                content = content.slice(3);
                toSay = content;
            }
            if(content.indexOf('nói') >= 0)
            {
                content = content.substring(content.indexOf('nói'));
                content = content.slice(3);
                toSay = content;
            }
            if(toSay) {
                toSay = toSay.replace('đi nào','').replace('nhé','').replace('đi','').replace('nào','').trim();
                message.channel.send({content: toSay});
                return;
            }
        }

        /*if(angry > 3){
            let angryAnswerMap = keymap.filter(x=>x.cmd == 'angryAnswer');
            if(angryAnswerMap && angryAnswerMap.length > 0){
                answerCollection = angryAnswerMap[0].responses;
            }
        }*/

        if(!answerCollection)
        {
            let happyAnswerMap = keymap.filter(x=>x.cmd == 'happyAnswer');
            if(happyAnswerMap && happyAnswerMap.length > 0){
                answerCollection = happyAnswerMap[0].responses;
            }
        }else if(message.type === 'REPLY'){
            chance = Math.floor(Math.random() * 10);
            try{
                switch(chance) {
                    case 9:
                        message.react('<:paimon_shock:773734330911555624>');
                        break;
                    case 8:
                        message.channel.send('<:paimon_shock:773734330911555624>');
                        break;
                    case 7:
                        message.channel.send('<:pepe_chuahe:911940527857991691>');
                        break;
                    case 6:
                        message.channel.send('<:rem_ehehe:596005130432806932>');
                        break;
                    case 5:
                        message.react('<:rem_ehehe:596005130432806932>');
                        break;
                    case 4:
                        message.channel.send('<:rem_oh_yeah:369896635515273216>');
                        break;
                    case 3:
                        message.react('<:rem_oh_yeah:369896635515273216>');
                        break;
                    case 2:
                        message.react('🆗');
                        break;
                }
                return;
            }catch(err){
                console.log(err);
            }
        }

        if(answerCollection){
            answerComponent(message,answerCollection);
        }
    }
}