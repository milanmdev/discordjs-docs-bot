const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');

const util = require('util');

module.exports = {
    name: "eval",
    aliases: ["eval", "e"],
    category: "developer",
    description: "Evaulates code",
    usage: "eval {code to eval}",
    dev: false,
    run: async (client, message, args) => {

      const errorEmbed = new Discord.MessageEmbed()
       .setTitle(`Error!`)
       .setDescription(`Please specify something for me to evaluate!`)
       .setColor("BLUE")
       .setFooter(`Requested by ${message.author.tag} | ${client.user.tag}`, message.author.avatarURL({ dynamic: true }))
    
    try{
      if(client.config.developers.some(ID => ID == message.author.id) == false) return;
      if(args.join(' ').length == 0) return message.channel.send(errorEmbed)
      let str = args.join(' ').replace(/msg/g, 'message').replace(/bot/g, 'client')
      let evaled = util.inspect(eval(str))
      message.channel.send(`\`\`\`js\n${evaled}\`\`\``)

    }catch(e){
      return message.channel.send(`\`\`\`coffee\n${e.message}\`\`\``)
    }
      
    }
  }