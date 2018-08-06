const Discord = require("discord.js");

module.exports = {
    categoria: 'Social',
    description: 'Respondo pong!.',
     cooldown: 15,
    task(client, message, suffix) {

let database = require("../database.js");  
database.Bloqueio.findOne({
                "_id": message.author.id
            }, function (erro, documento) {
                if(documento) {
         if (!['244489368717230090','282504900552949760'].includes(message.author.id))
                
 if ([documento.block].includes(message.author.id)) return message.reply("<:FalseSysop3:462306755150479372> Você foi bloqueado de usar comandos do **SysopCorp**, se você acha que isso é um engano nos contate! `! Till#8514 | Natsu#7777`");
        
}
let ping = Math.round(message.client.ping); 
var meee = new Discord.RichEmbed()
    .setDescription(`Calculando...`)
    .setColor(0x0df7eb);
    message.channel.send({embed: meee}).then((msg) => {

if (ping > 150) {
    var embed = new Discord.RichEmbed()
    .setDescription(`:satellite: Pong!\n\n► API Latência **${ping} ms.**`)
    .setColor(0x0df7eb);
    message.channel.send(embed);
    var embed1 = new Discord.RichEmbed()
    .setDescription(`► Latência ${msg.createdTimestamp - message.createdTimestamp} ms`)
    .setColor(0x0df7eb);
    msg.edit(embed1);
    

} else if (ping > 100) {
    var embed2 = new Discord.RichEmbed()
    .setDescription(`:satellite: Pong!\n\n► API Latência **${ping} ms.**`)
    .setColor(0x0df7eb);
    message.channel.send(embed2);
    var embed3 = new Discord.RichEmbed()
    .setDescription(`► Latência ${msg.createdTimestamp - message.createdTimestamp} ms`)
    .setColor(0x0df7eb);
    msg.edit(embed3);
    

} else {
    var embed4 = new Discord.RichEmbed()
    .setDescription(`:satellite: Pong!\n\n► API Latência **${ping} ms.**`)
    .setColor(0x0df7eb);
    message.channel.send(embed4);
    var embed5 = new Discord.RichEmbed()
    .setDescription(`► Latência ${msg.createdTimestamp - message.createdTimestamp} ms`)
    .setColor(0x0df7eb);
    msg.edit(embed5);


}
})
})
    }}


