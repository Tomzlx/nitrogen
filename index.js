const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '-';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'))
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('online');
})

client.on('message', message => {
    
    client.user.setActivity(`Verzu ©`, { type: 'WATCHING' });
    if (message.channel.type == "dm") return;
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'nitro') {
        client.commands.get('nitro').execute(message, args, Discord);
    } 




});


client.login(process.env.token);