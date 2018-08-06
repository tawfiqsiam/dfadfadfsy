    const Discord = require('discord.js');
    const fetch = require('snekfetch');
    const hexcols = [0xFFB6C1, 0x4C84C0, 0xAD1A2C, 0x20B046, 0xF2E807, 0xF207D1, 0xEE8419];
    
    module.exports = {
        task(client, message, suffix) {
    
    if (!suffix) {
        return message.reply('adicione uma pesquisa urbana, u pleb!');
    }
    fetch.get('http://api.urbandictionary.com/v0/define?term=' + suffix).then(res => {
        if (res.body.list[0] === undefined) {
            return message.reply('Não consegui encontrar essa palavra');
        }
        const definition = res.body.list[0].definition;
        const word = res.body.list[0].word;
        const Author = res.body.list[0].author;
        const exam = res.body.list[0].example;
        const thumup = res.body.list[0].thumbs_up;
        const thumdown = res.body.list[0].thumbs_down;
        const embed = new Discord.RichEmbed()
    .setColor(hexcols[~~(Math.random() * hexcols.length)])
    .setTitle(`This is the info for the word: **${word}**`)
    .addField('definition:', `${definition}`)
    .addField('Author:', `${Author}`)
    .addField('Example:', `${exam}`)
    .addField('Rating', `:thumbsup: ${thumup} :thumbsdown: ${thumdown}`, true)
    .setThumbnail('https://pbs.twimg.com/profile_images/3518201800/3ddffc081e6999872a2e5e05fa59cd3a_400x400.jpeg');
        message.channel.send({embed}).catch(e => console.log(e));
    });
}};