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
        .setThumbnail('https://images-ext-1.discordapp.net/external/wJx7Ln0o5QQvE3Ii9X5GwOdZJpjPyXNpjCatJN_H-Nc/https/distok.top/stickers/749043879713701898/749052505308266645.gif')

        message.author.send(thisEmbed);
    }
    
}