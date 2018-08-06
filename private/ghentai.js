const Discord = require("discord.js");
const superagent = require("superagent");

exports.run = async(client, message, args) => {
    
    var server = message.guild;
		const embed = new Discord.RichEmbed()
		.setThumbnail(server.iconURL)
        .setAuthor(message.author.username, message.author.avatarURL)
        .addField(`Executor:`, message.author.tag, true)
        .addField(`Comando usado:`, message.content,true)
        .addField(`Dentro do server:`,message.guild.name,true)
        .addField(`Canal onde foi Executado`,message.channel.name,true)
        .setFooter('SysopCorp ---- LOG COMANDOS ' + ' ---- ' + new Date())
        .setColor(0x4959e9);
    
    let {body} = await superagent
    .get(`https://nekos.life/api/v2/img/Random_hentai_gif`);
    if (!message.channel.nsfw) return message.reply(":x: Você deve estar em um canal `NSFW` para usar este comando.");
  
    let hentaiEmbed = new Discord.RichEmbed()
    .setColor(0x4959e9)
    .setTitle("Hentai é arte!")
    .setImage(body.url)
    .setColor(0x4959e9)

    message.channel.send(hentaiEmbed);

};
