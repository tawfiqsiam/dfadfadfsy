const Discord = require("discord.js");
const superagent = require("superagent");
const send = require("quick.hook");

module.exports.run = async (bot, message, args) => {

    let {body} = await superagent
    .get(`https://nekos.life/api/lewd/neko`);
    if (!message.channel.nsfw) return message.reply(":x: Você deve estar em um canal `NSFW` para usar este comando.");
  
    let hentaiEmbed = new Discord.RichEmbed()
    .setColor(0x4959e9)
    .setTitle("Por que alguém coloca um comando como esse?")
    .setImage(body.neko)

    message.channel.send(hentaiEmbed);

}
