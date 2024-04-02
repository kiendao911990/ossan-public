require('dotenv').config();//initialize dotenv
const { Collection } = require('discord.js');
const cooldowns = new Map();
const keymap = require('../../core/constants/keymap');
module.exports = (client, message) => {
    const prefix = process.env.PREFIX;
    if(message.author.bot) return;

    let cmd = '';
    let args = [];
    const originalContent = message.content;
    try{ 
        let content = "";
        if(message != null && message.content && message.content != "")
            content = message.content.toLowerCase();

        if(!content.startsWith(prefix)) {
            let pointCall = 0;

            if(message.channel.id === process.env.CHANNEL_NEW_ID){
                let id = content;
                if(content.indexOf('/chapter/') >= 0){
                    content = content.substring(content.indexOf('/chapter/'));
                    id = content.slice('/chapter/'.length).split('/')[0];
                }
                if(!isNaN(id)) {
                    cmd = 'new';
                    args = [id]
                    pointCall = 1;
                }
            }

            //awnser call
            if(pointCall === 0){
                if(content.indexOf(process.env.BOT_NAME) >= 0 || content.indexOf(process.env.BOT_NAME2) >= 0
                || content.indexOf(process.env.BOT_ID) >= 0 || content.indexOf(process.env.BOT_NAME3) >= 0)
                    cmd = 'answer';
                else if (message.mentions.users.has(process.env.BOT_ID))
                    cmd = 'answer';

                if(cmd){
                    content = content.replace(/<@[\s\S]+>|[?]|(os-san)|(os-chan)|(os san)/g,'');  //remove mention
                    args = [content];
                }
            }

            //remove mention
            content = content.replace(/<@[\s\S]+>|[?]|(os-san)|(os-chan)|(os san)/g,'');
            if(pointCall === 0){
                keymap.forEach(keyData => {
                    if(pointCall > 0) return;
                    if(!keyData.keys || keyData.keys.length === 0) return;
    
                    let key = keyData.keys.filter(x => content.indexOf(x) >= 0);
                    if(key && key.length > 0){
                        pointCall++;
                        key = key[0];
                        if(keyData.extraKeys && keyData.extraKeys.length > 0){
                            pointCall = 0;
                            key = keyData.extraKeys.filter(x => content.indexOf(x) >= 0);
                            if(key && key.length > 0){
                                pointCall++;
                                key = key[0];
                            }
                        }
                    }
                    if(pointCall > 0){
                        cmd = keyData.cmd;
                        if(keyData.content)
                            args = [keyData.content, `${keyData.content} ${content}`];
                        else
                            args = [key, content];
                    }
                });
            }
        } else {
            args = content.slice(prefix.length).split(/ +/);
            cmd = args.shift().toLowerCase();
        }

        if(!cmd) return;
        let command = client.commands.get(cmd);
        if(!command) return;

        let isPermiss = false;
        //check permission
        if(command.permissions && command.permissions.length > 0 && message.member.permissions.has(command.permissions))
            isPermiss = true;
        
        if(!isPermiss){
            if(command.roles && command.roles.length > 0){
                for(const role of command.roles){
                    if(message.member.roles.cache.some(r => r.name === role))
                        isPermiss = true;
                }
            } else if (!command.roles)
                isPermiss = true;
        }
        if(!isPermiss)
            return  message.channel.send(`éo có quyền nhé, ngồi ngó đê!!`);

        //cooldowns for commands
        if(command.cooldown){
            if(!cooldowns.has(command.name)){
                cooldowns.set(command.name, new Collection());
            }
            const current_time = Date.now();
            const time_stamps = cooldowns.get(command.name);
            const cooldown_amount = (command.cooldown)  * 1000;
        
            if(time_stamps.get(message.author.id)){
                const expiration_time = time_stamps.get(message.author.id) + cooldown_amount;
                if(current_time < expiration_time){
                    if(command.notShowCooldown)
                        return;
                    return message.reply('Bình tĩnh lại má ơi!!');
                }
            }
            
            time_stamps.set(message.author.id, current_time);
            //timing to remove cooldown
            setTimeout(() => {
                time_stamps.delete(message.author.id);
            }, cooldown_amount);
        }
  
        if(command) command.execute(client, message, args, originalContent);
    }catch(err){
        message.reply('có lỗi rồi má ơi, chờ boss xử lý đê');
        console.log(err);
    }
}