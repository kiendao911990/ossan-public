const optionSelect = ['hay', 'or', 'hoặc', 'vs'];
const optionExtraSelect = ['là'];
const optionDelete = ['hơn'];
const optionreplace = ['ai bây giờ','/ai [\s\S]+ hơn/g','/gì [\s\S]+ giờ/g',
    '/cái [\s\S]+ đây/g','đi nào','nhé','đi','nào', '/liệu [\s\S]+ này/g', 'liệu nó'];
const { Collection } = require("discord.js");

const answer = new Collection();
answer.set(1, 'mị chọn [data]');
answer.set(2, '[data] đê');
answer.set(3, '[data] chứ sao nữa');
answer.set(4, '[data] iz de bezt');
answer.set(5, 'tất nhiên là [data]');

const answerTarget = new Collection();
answerTarget.set(1, '[target] thì hẳn là [data]');
answerTarget.set(2, '[target] tất nhiên là [data]');
answerTarget.set(3, '[target] là [data] éo sai được');
answerTarget.set(4, '[target] là [data] là chắc rồi');
answerTarget.set(5, 'tất nhiên [target] là [data]');

module.exports = {
    name : 'select',
    description: 'select option!',
    notShowCooldown: true,
    cooldown: 10,
    async execute(client, message, args, originalContent){
        if(!args || args.length === 0) return;
        const key = args[0];
        let content = args[1];
        let targetContent = '';

        if(!key || !content) return;
        optionreplace.forEach(item => {
            content = content.replace(item,'');
        });
        let optionKey = '';
        optionSelect.forEach(q => {
            if(content.indexOf(q) >= 0){
                optionKey = q;
            }
        });
        if(!optionKey) return;
        
        try{
            const optionKeyIndex = content.indexOf(optionKey);
            //remove unused words
            optionDelete.forEach(item => {
                const itemIndex = content.indexOf(item);
                if(itemIndex >= 0 && itemIndex < optionKeyIndex){
                    content = content.substring(itemIndex);
                    content = content.slice(item.length).replace();
                }
            });
            
            //remove key
            const keyIndex = content.indexOf(key);
            let optionString = '';
            if(keyIndex >= 0){
                if(optionKeyIndex > keyIndex){
                    optionString = content.substring(content.indexOf(key));
                    optionString = optionString.slice(key.length).replace();
                }else
                    optionString = content.substring(0, keyIndex);
            }else
                optionString = content;


            //split target and options
            let extraKey ='';
            optionExtraSelect.forEach(q => {
                if(optionString.indexOf(q) >= 0){
                    extraKey = q;
                }
            });
            if(extraKey){
                let contentParts = optionString.split(extraKey);
                if(contentParts.length > 1){
                    targetContent = contentParts[0].trim();
                    optionString = contentParts[1].trim();
                }
            }

            //get options
            let options = [];
            let optionsParts = optionString.split(optionKey);
            //split , for more options
            optionsParts.forEach(item => {
                if(item.indexOf(',') >= 0){
                    let parts = item.split(',');
                    parts.forEach(p => {
                        if(p.trim())
                            options.push(p.trim()); 
                    })
                }else{
                    if(item.trim())   
                        options.push(item.trim());
                }
            });

            let chance = Math.floor(Math.random() * options.length);
            if(chance <= options.length){
                let answerOption = options[chance];
                let answerData = '';
                if(targetContent)
                    answerData = answerTarget.random();
                else
                    answerData = answer.random();

                if(answerData){
                    answerData = answerData.replace('tui','bạn').replace('chính mình','mị')
                        .replace('[data]', answerOption.trim()).replace('[target]', targetContent);
                    message.channel.send(answerData).catch(err => {
                        console.log(err);
                    });
                }
            }
        }catch(err){
            console.log(err);
        }
    }
}