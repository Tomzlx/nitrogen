module.exports = {
    name: 'nitro',
    description: "sends a giftcard!",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setTitle('I sent a nitro gift to your messages!')

        message.channel.send(newEmbed);

        const thisEmbed = new Discord.MessageEmbed()
        .setTitle('Your nitro gift has arrived!')
        .setDescription('Hey, thank you for using our generator!\n\nYour nitro gift is: https://discord.gift/94JEFUEFC8235J\n\nIf you have any problems, contact a server administrator!')
        .setThumbnail('https://media.discordapp.net/attachments/817483898144686133/817790924242681896/c62fdaf57b49b5bbaa4138c2eac49da1_large-removebg-preview.png')

        message.author.send(thisEmbed);
    }
    
}