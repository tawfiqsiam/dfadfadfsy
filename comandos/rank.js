const Jimp = require("jimp"),
  database = require("../database.js"),
  Discord = require('discord.js');

module.exports = {
  categoria: 'Entretenimento',
  description: 'Tenha um perfil personalizado com seu nível, xp, emblemas, moedas e muito mais!',
  task(client, message, suffix) {
    
        
    //if (message.mentions.users.first().bot) return message.reply("**Bots não tem perfil!**");

database.Bloqueio.findOne({
                "_id": message.author.id
            }, function (erro, documento) {
                if(documento) {
         if (!['244489368717230090'].includes(message.author.id))
                
 if ([documento.block].includes(message.author.id)) return message.channel.send(`<:xguardian:476061993368027148> | ${message.author}! Você foi bloqueado de usar comandos do **Sysop**, se você acha que isso é um engano nos contate! `);
        
}
  
   //if (!['244489368717230090'].includes(message.author.id)) return message.channel.send(`<:sysalerta:469789950938841088> Opa ${message.author}, comando em manutenção!`);


    let user = message.mentions.users.first() ? message.mentions.users.first() : message.author;
    database.Users.findOne({
      "_id": user.id
    }, function(erra, documento) {
      if (documento) {
      let pudim = documento.level + 1;
      let imgcolor = {
      "online": "./status/online.png",
      "idle": "./status/ausente.png",
      "dnd": "./status/ocupado.png",
      "offline": "./status/offline.png",
      "stream": "./status/.d.png"
      
};

message.channel.send(`Rank de **__${user.username}__**\n-------------------------------\nLevel: **${documento.lvll}**\nEXP: **${documento.eexp}**\nProesa em: **${parseInt(documento.eexp/(documento.lvll *450 )*100)}%**`)
                       
}});
      });
  }
};
