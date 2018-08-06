

module.exports = {
    description: 'Defina um canal de sugestão com reações do próprio Bot.',
    categoria: 'Moderação',
    task(client, message, suffix) {
         message.delete(1000); 

let database = require("../database.js");  
database.Bloqueio.findOne({
                "_id": message.author.id
            }, function (erro, documento) {
                if(documento) {
         if (!['244489368717230090','282504900552949760'].includes(message.author.id))
                
 if ([documento.block].includes(message.author.id)) return message.reply("<:FalseSysop3:462306755150479372> Você foi bloqueado de usar comandos do **SysopCorp**, se você acha que isso é um engano nos contate! `! Till#8514 | Natsu#7777`");
        
}

if (!message.member.hasPermission('ADMINISTRATOR'))
return message.reply(':no_entry_sign: Desculpe, este comando está disponível apenas para cargos administrativos do servidor.');

 database.Guilds.findOne({"_id":message.guild.id},function(erro,documento){

    if (!message.mentions.channels.first()) {
   if (documento && documento.sugestao)                 
   return message.channel.send(' Canal de Sugestões definido para:  <#' + documento.sugestao + '>');
            else
            return message.channel.send('Defina um canal para sugestão!');
        } else { 
            if (!documento) 
                documento = {};
            documento.sugestao = message.mentions.channels.first().id;
            documento.save();
            return message.channel.send('Canal de sugestões definido. ');
        }
 });
    })
}};
