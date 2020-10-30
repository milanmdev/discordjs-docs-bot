const Discord = require("discord.js");
const fetch = require("node-fetch");
const qs = require("querystring");
const versions = [
  "stable",
  "master",
  "rpc",
  "commando",
  "akairo",
  "akairo-master",
  "11.5-dev"
];
//packges or const here!
module.exports = {
    name: "docs",//aka the folder name without js
    aliases: ["docs", "djs"],
    category: "info",//this is what ever ever dir you are in (dev, info, moderation, music)
    description: "Discord.js Docs command",
    usage: "docs {function}",
    dev: false,//if it is for the dev the true;
    run: async (client, message, args) => {
//your code goes here!

const { channel, author } = message;
        let source = versions.includes(args.slice(-1)[0]) ? args.pop() : "stable";
        // if (source === "11.5-dev")
        //  source = `https://raw.githubusercontent.com/discordjs/discord.js/docs/${source}.json`;
        if(!args[0])return message.channel.send("No query sent to search. Try running " + client.config.prefix + "docs {function}")
        let q = args.join(" ");
        const queryString = qs.stringify({ src: source, q: q });
        const embed = await (await fetch(`https://djsdocs.sorta.moe/v2/embed?${queryString}`)).json();
        if (!embed)return channel.send("Failed to locate that information in the documentation.");
        let m = await channel.send({ embed })
        await m.react("755890618567360653");
      
//end code
  }
}