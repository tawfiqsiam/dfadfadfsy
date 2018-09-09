const Discord = require("discord.js");
module.exports = { task(client, message, suffix) { message.delete(1000);

let database = require("../database.js");  
database.Bloqueio.findOne({
                "_id": message.author.id
            }, function (erro, documento) {
                if(documento) {
         if (!['244489368717230090'].includes(message.author.id))
                
 if ([documento.block].includes(message.author.id)) return message.channel.send(`<:xguardian:476061993368027148> | ${message.author}! Você foi bloqueado de usar comandos do **Sysop**, se você acha que isso é um engano nos contate! `);
        
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
