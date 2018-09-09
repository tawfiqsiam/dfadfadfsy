const Discord = require ("discord.js");
const randomPuppy = require('random-puppy');
const config = require('../config.json');

module.exports = {
    task(client, message, args) {
        
let database = require("../database.js");  
database.Bloqueio.findOne({
                "_id": message.author.id
            }, function (erro, documento) {
                if(documento) {
         if (!['244489368717230090','282504900552949760'].includes(message.author.id))
                
 if ([documento.block].includes(message.author.id)) return message.channel.send(`<:xguardian:476061993368027148> | ${message.author}! Você foi bloqueado de usar comandos do **Sysop**, se você acha que isso é um engano nos contate! `);
        
}
        
        
    if (!message.channel.nsfw) return message.reply(" :x: É preciso que você esteja em um canal `NSFW`!");

    var subreddits = [
        'NSFW_Wallpapers',
        'SexyWallpapers',
        'HighResNSFW',
        'nsfw_hd',
        'UHDnsfw'
    ]
    var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];

    randomPuppy(sub)
        .then(url => {
            const embed = new Discord.RichEmbed()
                .setAuthor("4k", client.user.avatarURL)
                .setImage(url)
                .setColor(0x26dfd6);
            message.channel.send({
                embed
            });
        })
})

}};
