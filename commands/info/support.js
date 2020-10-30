const Discord = require("discord.js");
//packges or const here!
module.exports = {
    name: "support",//aka the folder name without js
    aliases: ["support", "help"],
    category: "info",//this is what ever ever dir you are in (dev, info, moderation, music)
    description: "Support command; Configure in config.json",
    usage: "support",
    dev: false,//if it is for the dev the true;
    run: async (client, message, args) => {
//your code goes here!

let embed = new Discord.MessageEmbed();
embed.setTitle(client.user.username + " Support");
embed.setDescription(`Need support? Join the owner's Discord server right below:\n\n[https://discord.gg/${client.config.supportCode}](https://discord.gg/${client.config.supportCode})`);
embed.setURL("https://discord.gg/" + client.config.supportCode);

message.channel.send(embed);
      
//end code
  }
}