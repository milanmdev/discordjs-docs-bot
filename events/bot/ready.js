const superagent = require('superagent');
const chalk = require('chalk');
const util = require("util");

module.exports = async (client) => {

    client.user.setActivity(client.config.prefix + 'help', { type: 'WATCHING' });
    
     console.log(chalk.blue(`Running as ${client.user.tag}`));

}
