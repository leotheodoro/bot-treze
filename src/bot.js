const Discord = require('discord.js');
const config = require('./config.js');
const command = require('./functions');
const client = new Discord.Client();

const prefix = "+";

client.login(config.BOT_TOKEN);

client.on('ready', () => {
  console.log('Bot running...');

  const sala = client.channels.cache.get(config.ROOM_SALA);
  const uol = client.channels.cache.get(config.ROOM_UOL);

  sala.send('NATHAN O DESGRAÇADO ESTÁ ONLINE');
});

client.on('message', message => {
  // Prevents bot from anwser his own message
  if (message.author.bot) return;

  if (message.content.startsWith(prefix)) {
    command.execute(message);
  }
})