const Discord = require("discord.js");
//packges or const here!
module.exports = {
    name: "invite",//aka the folder name without js
    aliases: ["invite", "inv"],
    category: "info",//this is what ever ever dir you are in (dev, info, moderation, music)
    description: "Invite command",
    usage: "invite",
    dev: false,//if it is for the dev the true;
    run: async (client, message, args) => {
//your code goes here!

let embed = new Discord.MessageEmbed();
embed.setTitle(client.user.username + " Invite");
embed.setDescription(`Invite me below!\n\n[Invite Link](https://discord.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=0)`);
embed.setURL(`https://discord.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=0`);

message.channel.send(embed);
      
//end code
  }
}