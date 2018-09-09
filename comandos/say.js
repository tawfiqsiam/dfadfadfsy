module.exports = {
    description: 'Repito qualquer palavra ou frase.',
    categoria: 'Entretenimento',
     cooldown: 5,
    task(client, message, suffix) {
         message.delete(); 
  let database = require("../database.js");  
database.Bloqueio.findOne({
                "_id": message.author.id
            }, function (erro, documento) {
                if(documento) {
         if (!['244489368717230090'].includes(message.author.id))
                
 if ([documento.block].includes(message.author.id)) return message.channel.send(`<:xguardian:476061993368027148> | ${message.author}! Você foi bloqueado de usar comandos do **Sysop**, se você acha que isso é um engano nos contate! `);
        
}
        if (!suffix) return message.reply('Defina algo para eu repetir.');
         message.reply(`${suffix}`);
        })
    }
};
