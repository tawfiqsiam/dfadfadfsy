const database = require("../database.js"),
  Jimp = require('jimp');

module.exports = {
  categoria: 'Social',
  description: 'Altere o background do seu perfil e seja único! XD ',
  task(client, message, suffix) {

database.Bloqueio.findOne({
                "_id": message.author.id
            }, function (erro, documento) {
                if(documento) {
         if (!['244489368717230090'].includes(message.author.id))
                
 if ([documento.block].includes(message.author.id)) return message.channel.send(`<:xguardian:476061993368027148> | ${message.author}! Você foi bloqueado de usar comandos do **Sysop**, se você acha que isso é um engano nos contate! `);
        
}
    
    database.Users.findOne({
      "_id": message.author.id
    }, function(erro, documento) {

      if (documento) {
        if(documento.shopped_background === "no") return message.channel.send('Você não comprou o comando')
        if (message.attachments.first()) {
          Jimp.read(`${message.attachments.first().url}`, function(erra, img) {
            if (erra) return message.channel.send('Escreva um link válido...');
            documento.balance_background = `${message.attachments.first().url}`;
            message.reply('fundo de perfil do seu balance alterado!');
            documento.save();
          });
        } else {
          if (suffix.length < 1) return message.reply('Defina uma nova imagem...');

          Jimp.read(`${suffix}`, function(erra, img) {
            if (erra) return message.channel.send('Escreva um link válido...');
            documento.balance_background = `${suffix}`;
            message.reply('fundo de perfil do seu balance alterado!');
            documento.save();
          });
        }

      } else {
        message.reply("Você não possui um perfil. Para criar um use:  `sy!register` ");
      }

    });
  })
  }
};
