const Discord = require("discord.js");
module.exports = { task(client, message, suffix) { message.delete(1000);

let database = require("../database.js");  
database.Bloqueio.findOne({
                "_id": message.author.id
            }, function (erro, documento) {
                if(documento) {
         if (!['244489368717230090','282504900552949760'].includes(message.author.id))
                
 if ([documento.block].includes(message.author.id)) return message.reply("<:FalseSysop3:462306755150479372> You are blocked to use Sysop commands, if you think is this wrong contract us! `SHAZAM!#0001 | Natsu#0001`");
        
}


let mention = message.mentions.users.first();
if (!mention) return message.reply(`mencione alguém para casar.`);

database.Users.findOne({"_id": message.author.id}, function(erra, documento) {
      if (documento) {

documento.casou = mention.username+'#'+mention.discriminator ;
documento.save();
message.channel.send(`${message.author} casou com ${mention} ❤`);

}});
});
}};
