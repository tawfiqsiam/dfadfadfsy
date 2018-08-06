const database = require("../database.js");

module.exports = {
    task(client, message, suffix) {
         message.delete(1000); 
        

database.Bloqueio.findOne({
                "_id": message.author.id
            }, function (erro, documento) {
                if(documento) {
         if (!['244489368717230090','282504900552949760'].includes(message.author.id))
                
 if ([documento.block].includes(message.author.id)) return message.reply("<:FalseSysop3:462306755150479372> Você foi bloqueado de usar comandos do **SysopCorp**, se você acha que isso é um engano nos contate! `! Till#8514 | Natsu#7777`");
        
}

database.Guilds.findOne({
    "_id": message.guild.id
}, function(erro, documento) {

if (!message.member.hasPermission('ADMINISTRATOR'))
return message.reply(':no_entry_sign: Desculpe, este comando está disponível apenas para cargos administrativos do servidor.');
   
if (!message.mentions.channels.first()) {
if (documento && documento.logging)                 
return message.channel.send(' Canal mod-logs  definido em:  <#' + documento.logging + '>')
  else
            return message.channel.send('Defina um canal para mod-logs do servidor!');
        } else { 
            if (!documento) 
                documento = {};
documento.logging = message.mentions.channels.first().id;
            documento.save();
            return message.channel.send('Canal mod-logs definido. ');
             
        }
 if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply(':no_entry_sign: Desculpe, este comando está disponível apenas para cargos administrativos do servidor.');
    documento.logging = "";
    documento.save();
    message.channel.send('Logs do servidor desativado.');

})
    })
    }
};
