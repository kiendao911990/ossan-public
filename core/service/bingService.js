const { BingChat } = require('discord.js');
const answerLevel = new Map();
//import { BingChat } from 'bing-chat'
async function getAnwser(key, authorId) {
    try{
        if(!answerLevel.has(authorId)){
            answerLevel.set(authorId, {});
            setTimeout(() => {
                try{
                    answerLevel.delete(authorId);
                }catch(err){
                    console.log(err);
                }
            }, 3 * 60 * 1000);
        }

        //get angry level
        let prevQuestion = answerLevel.get(authorId);
        const api = new BingChat({ cookie: process.env.BING_COOKIE })
        let res = {};
        if(angry){
            res = await oraPromise(api.sendMessage(key, prevQuestion), {
                text: key
            });
            console.log('\n' + res.text + '\n')
        }else{
            res = await api.sendMessage(key, {
                onProgress: (partialResponse) => {
                    console.log(partialResponse.text)
                }
            });
            console.log('\n' + res.text + '\n')
        }
        
        return res.text
    }catch(err){
        console.log(err);
        return "";
    }
}

module.exports = {
    getAnwser,
};