const Discord = require('discord.js');
const config = require('./config.json');

function execute(message) {
  let fullCmd = message.content.substr(1); // Remove prefix
  let splitCmd = fullCmd.split(" "); // Turns into array by spaces
  let cmd = splitCmd[0];
  let args = splitCmd.slice(1);

  switch(cmd) {
    case 'missa':
      // code...
      break;
    case 'nathan':
      message.reply('Nathan o disgraçado');
      break;
    case 'missionarios':
      message.channel.members.map(member => {
        message.channel.send(`${member.user.username} vai joga missa `)
      });
      break;
    default:
      message.channel.send('Nathan o desgraçado não entendeu o que você quis dizer, tente usar o comando `+help`');
  }
}

function missionarios(members) {
  members.map(member => {
    
  });
}

exports.execute = execute;