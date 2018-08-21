var database = require("../database.js");
const Discord = require("discord.js");
module.exports = {
    task(client, message, args) {

database.Bloqueio.findOne({
                "_id": message.author.id
            }, function (erro, documento) {
                if(documento) {
         if (!['244489368717230090','282504900552949760'].includes(message.author.id))
                
 if ([documento.block].includes(message.author.id)) return message.reply("<:FalseSysop3:462306755150479372> Você foi bloqueado de usar comandos do **SysopCorp**, se você acha que isso é um engano nos contate! `! Till#8514 | Natsu#7777`");
        
}
        
    database.Users.findOne({
        "_id": message.author.id
    }, function(erromano, documano) {
        database.Users.find({}, function(erro, documento) {
            if (documento) {
                var position = documento.map(function(docu) {
                    return {
                        id: docu._id,
                        level: docu.level,
                        xp: docu.xp
                    }
                });
                position = position.sort(function(a, b) {
                    return b.level - a.level
                    return b.xp - a.xp
                });
                position = position.filter(function(a) {
                    return client.users.get(a.id)
                })
                var toplevel = "\n" + position.slice(0,1).map((a, posicao) => "**#" + (posicao) + "**" + ('')).join("\n") +"";
                 const embed = new Discord.RichEmbed()
                       .setAuthor(message.author.username, message.author.avatarURL)
                       /*.addField(`Rank`,toplevel, true)*/
                       .addField(`Level`,documano.level, true)
                       .addField(`XP`,documano.xp + "/" + (400 * documano.level + 1),  true)
                       .setColor(0x4959e9);
   
    message.channel.send(embed);
            }
        });
    });
    })
}};
