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

if (!mention) return message.reply(`mencione alguém para dar aquela voadora! :ok_hand::skin-tone-2:`);

const embed = new Discord.RichEmbed()

.setDescription(`${message.author} deu uma **voadora**  em ${mention}`)
.setImage('https://media.giphy.com/media/QY3iz64uXERiw/source.gif')
.setColor('#36393E');
message.channel.send({embed});

});
}};
