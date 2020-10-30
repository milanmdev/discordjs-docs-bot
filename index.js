const { Client, Collection } = require("discord.js");
const fs = require('fs');
const client = new Client({ disableEveryone: true });

client.commands = new Collection();
client.aliases = new Collection();

client.categories = fs.readdirSync("./commands/");
client.config = require('./config.json');

// 'client.on('message')' commands are triggered when the
// specified message is read in a text channel that the bot is in.

client.login(process.env.TOKEN).then(async (token) => {

  ["command", "events"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
  })

}).catch((e) => {
  console.log(e)
});