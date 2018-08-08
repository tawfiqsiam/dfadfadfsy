let db = require("../database.js");
const Discord = require("discord.js");

module.exports = { task(client, message, suffix) {

db.Bloqueio.findOne({
                "_id": message.author.id
            }, function (erro, documento) {
                if(documento) {
         if (!['244489368717230090','282504900552949760'].includes(message.author.id))
                
 if ([documento.block].includes(message.author.id)) return message.reply("<:xguardian:476061993368027148> Você foi bloqueado de usar comandos do **SysopCorp**, se você acha que isso é um engano nos contate.");
        
}

 if (!message.member.hasPermission("MANAGE_GUILD")) 
 return message.channel.send("<:xguardian:476061993368027148> Opa! Parece que você não tem permissão de utilizar este comando. Tente adicionar a permissão de Gerencisamento de Servidor a você.");
 
 if (!message.guild.member(client.user).hasPermission('MANAGE_MESSAGES')) 
 return message.reply('<:xguardian:476061993368027148> Desculpe, não posso fazer isso. É necessario que eu tenha permissão de Gerencisamento de mensagens.');
     
    

let cargo = message.guild.roles.find('name', '@everyone')
   message.guild.channels.forEach(channel => {
          channel.overwritePermissions(cargo, {
              SEND_MESSAGES: false,
              ADD_REACTIONS: false,
              SPEAK: false
              
              
          });
   });
    

    message.channel.send(`<:sysalerta:469789950938841088> Chat Stopped!`);
});
     
}};
