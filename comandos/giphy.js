const Discord = require('discord.js');

module.exports = {
     description: 'Pesquise GIF online de qualquer coisa.',
    categoria: 'Entretenimento',
    task(client, message,suffix) {

let database = require("../database.js");  
database.Bloqueio.findOne({
                "_id": message.author.id
            }, function (erro, documento) {
                if(documento) {
         if (!['244489368717230090','282504900552949760'].includes(message.author.id))
                
 if ([documento.block].includes(message.author.id)) return message.reply("<:FalseSysop3:462306755150479372> Você foi bloqueado de usar comandos do **SysopCorp**, se você acha que isso é um engano nos contate! `! Till#8514 | Natsu#7777`");
        
}
         
var giphy = require('giphy-api')();

if(!suffix) return  message.channel.send('<:sysalerta:469789950938841088> Defina algo para buscar');

message.channel.send(':arrows_counterclockwise: Pesquisando')
.then(m => {
       giphy.random(suffix, function(err, res){
       if(err){
         return console.log(err);
       }
       if(!res.data.url){
         return message.channel.send('<:FalseSysop3:462306755150479372> Nenhum resultado encontrado.');
       }

       let key = res.data.url.substr(res.data.url.lastIndexOf('-') + 1);
       let url = `https://media.giphy.com/media/${key}/giphy.gif`;

       const embed = new Discord.RichEmbed()
       .setImage(url)
       .setDescription(`Pesquisa pelo site **GIPHY**`)
       .setColor('#36393E')
       m.edit({embed});
      });
});
     })
}};
