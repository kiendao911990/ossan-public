require('dotenv').config(); //initialize dotenv
const { Client, Intents, Collection } = require('discord.js');

const client = new Client({
   intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS],
   partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
  });

client.commands = new Collection();
client.events = new Collection();

["command_handler","event_handler"].forEach(handler => {
   require(`./handlers/${handler}.js`)(client);
});

//make sure this line is the last line
client.login(process.env.CLIENT_TOKEN); //login bot using token