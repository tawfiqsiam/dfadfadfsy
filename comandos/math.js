const mathjs = require('mathjs');

 module.exports = { 
  task(client, message, suffix) {
 
let database = require("../database.js");  
database.Bloqueio.findOne({
                "_id": message.author.id
            }, function (erro, documento) {
                if(documento) {
         if (!['244489368717230090','282504900552949760'].includes(message.author.id))
                
 if ([documento.block].includes(message.author.id)) return message.reply("<:FalseSysop3:462306755150479372> Você foi bloqueado de usar comandos do **SysopCorp**, se você acha que isso é um engano nos contate! `! Till#8514 | Natsu#7777`");
        
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
