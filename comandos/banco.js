const Discord = require("discord.js");
const db = require("../database.js");

module.exports = { task(client, message, suffix) {
    
let server = message.guild;
  
db.Users.findOne({"_id": message.author.id}, function(erra, sysop) {
      if (sysop) {
    
const embed = new Discord.RichEmbed()
.setAuthor(server.name, server.avatarURL)
.setDescription(`:bank: **Banco Sysop**`)
.addField('<:Sycoins:469789351358889984>  Sycoins', `${Number(sysop.sycoins).toLocaleString()}`, true)
.addField('<a:rubine:442715023878651905>  Rubys', `${Number(sysop.syrubys).toLocaleString()}`, true)
.addField('<a:esmeral:442718169585680387> Esmeraldas', `${Number(sysop.syesmeralda).toLocaleString()}`, true)
.setColor(0x0df7eb);
message.channel.send({embed});
}});
}};
