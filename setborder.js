const database = require("../database.js"),
Jimp = require('jimp');

module.exports = {
  categoria:'Social',
  description: 'Altere a borda do seu avatar dentro de seu perfil no bot',
  task(client, message, suffix) {

    database.Users.findOne({
      "_id": message.author.id
    }, function(erro, documento) {

      if (documento) {
        suffix = suffix.split(' ')
        if(documento.border_shoped === "no") return message.channel.send('Você não comprou o comando')
        if (suffix[0].length < 1) return message.reply('Defina uma nova cor para sua borda no avatar...');
        if (!['bpcrys','bpcaramelo','bpairis','bblue', 'bgold', 'bpabora', 'bpcapeta', 'bpezz', 'bpink', 'bpurple', 'bpvinho', 'bruby', 'bwhite'].includes(suffix[0])) return message.channel.send('Defina uma nova borda para seu avatar...\nCores Disponíveis em nosso site: https://goo.gl/sUZ1Xh`')
          documento.borderp = `${suffix[0]}`;
          console.log(suffix[0])
          message.reply('Bordar do perfil alterada!');
          documento.save();
      } else {
        message.reply("Você não possui um perfil, escreva no chat `sy!register` para se registrar!");
      }
    });
  }
};