const mathjs = require('mathjs');

 module.exports = { 
  task(client, message, suffix) {
 
let database = require("../database.js");  
database.Bloqueio.findOne({
                "_id": message.author.id
            }, function (erro, documento) {
                if(documento) {
         if (!['244489368717230090'].includes(message.author.id))
                
 if ([documento.block].includes(message.author.id)) return message.channel.send(`<:xguardian:476061993368027148> | ${message.author}! Você foi bloqueado de usar comandos do **Sysop**, se você acha que isso é um engano nos contate! `);
        
}
   
  suffix = suffix.split(' ');
  if (suffix.length < 1) {
  }

  try {
    message.channel.send({
      embed: {
        color: 0x4959e9,
        title: 'Resultado:',
        description: parseFloat(mathjs.eval(suffix.join(' ')).toFixed(2))
      }
    });
  }
  catch (error) {
  }
 })
}};
