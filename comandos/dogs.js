const Discord = require("discord.js");
module.exports = {
    description: 'Obtenha imagens de cachorrinhos super fofos.',
    categoria: 'Entretenimento',
    task(client, message, suffix) {

let database = require("../database.js");  
database.Bloqueio.findOne({
                "_id": message.author.id
            }, function (erro, documento) {
                if(documento) {
         if (!['244489368717230090'].includes(message.author.id))
                
 if ([documento.block].includes(message.author.id)) return message.channel.send(`<:xguardian:476061993368027148> | ${message.author}! Você foi bloqueado de usar comandos do **Sysop**, se você acha que isso é um engano nos contate! `);
        
}
        
 const randomPuppy = require('random-puppy');

randomPuppy().then(url =>{

      message.channel.send(url);
      

}).catch(err => message.channel.send(":warning: Ocorreu um erro, tente novamente!"));
    })
}}
