const database = require("../database.js"),
Jimp = require('jimp');

module.exports = {
  categoria:'Social',
  description: 'Altere a borda do seu avatar dentro de seu perfil no bot',
  task(client, message, suffix) {


ddatabase.Bloqueio.findOne({
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
        suffix = suffix.split(' ')
        if(documento.border_shoped === "no") return message.channel.send('Você não comprou o comando')
        if (suffix[0].length < 1) return message.reply('Defina uma nova cor para sua borda no avatar...');
        if (!['bpcrys','bpcaramelo','bpairis','bblue', 'bgold', 'bpabora', 'bpcapeta', 'bpezz', 'bpink', 'bpurple', 'bpvinho', 'bruby', 'bwhite'].includes(suffix[0])) return message.channel.send('Defina uma nova borda para seu avatar...\n**Cores Disponíveis em nosso site:** \`https://sysopcopy.wixsite.com/sysopcorp/loja\`')
          documento.borderp = `${suffix[0]}`;
          console.log(suffix[0])
          message.reply('Bordar do perfil alterada!');
          documento.save();
      } else {
        message.reply("Você não possui um perfil, escreva no chat `sy!register` para se registrar!");
      }
    });
  })
  }
};
