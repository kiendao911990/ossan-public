module.exports = {
    name : 'ping',
    description: 'try ping pong!',
    async execute(client, message, args, originalContent){
        message.channel.send("pong~!");
    }
}