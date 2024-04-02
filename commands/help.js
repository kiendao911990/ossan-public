module.exports = {
    name : 'help',
    description: 'call the help!',
    async execute(client, message, args, originalContent){
        message.channel.send("no help here 😘");
    }
}