const { MessageEmbed } = require("discord.js");
module.exports = (message, collecion, key) => {
    if(collecion.length === 0) return;
    let chance = Math.floor(Math.random() * collecion.length);
    let answerResponse = {};
    if(chance > 0 && chance <= collecion.length)
        answerResponse = collecion[chance];
    else
        answerResponse = collecion[0];

    let answer = {};
    if(answerResponse.content){
        answer.content = answerResponse.content;
        if(key)
            answer.content = answer.content.replace('[data]',key);
    }
    if(answerResponse.embed){
        let embed = new MessageEmbed();
        if(answerResponse.embed.image)
            embed = embed.setImage(answerResponse.embed.image);
        if(answerResponse.embed.footer)
            embed = embed.setFooter({ text: answerResponse.embed.footer })
        if(answerResponse.embed.description)
            embed = embed.setDescription(answerResponse.embed.description)
        answer.embeds = [embed];
    }
    if(answerResponse.react){
        message.react(answerResponse.react);
    }

    if(!answer.content && !answer.embeds) return;
    try{
        message.channel.send(answer);
    }catch(err){
        console.log(err);
    }
}