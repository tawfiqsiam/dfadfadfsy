const db = require("../database.js");
var dayCol = new Set()

module.exports = { task(client, message, suffix) {

db.Bloqueio.findOne({
                "_id": message.author.id
            }, function (erro, documento) {
                if(documento) {
         if (!['244489368717230090'].includes(message.author.id))
                
 if ([documento.block].includes(message.author.id)) return message.channel.send(`<:xguardian:476061993368027148> | ${message.author}! Você foi bloqueado de usar comandos do **Sysop**, se você acha que isso é um engano nos contate! `);
        
}



 if (!message.member.hasPermission("ADMINISTRATOR")) 
 return message.channel.send(`<:xguardian:476061993368027148> ${message.author} | Opa! Parece que você não tem permissão de utilizar este comando. Tente adicionar a permissão de Administrador a você.`);
 
 if (!message.guild.member(client.user).hasPermission('ADMINISTRATOR')) 
 return message.channel.send(`<:xguardian:476061993368027148> Opa ${message.author}! Desculpe, não posso fazer isso. É necessario que eu tenha permissão de Administrador também.`)


message.channel.send(`<:sysalerta:469789950938841088> | ${message.author} está função é perigosa e requer confirmação. Responda "deletar" para continuar e "cancelar" para cancelar o pedido de exclusão de cargos.\n\n**Nota:** Apenas cargos a baixo de mim serão deletados.`).then(() => {
message.channel.awaitMessages(res => 
(res.content == "deletar" && res.author.id == message.author.id) || (res.content == 'cancelar' && res.author.id == message.author.id), { 

max: 1, time: 60000, errors: ['time'] }).then(col => {
    
    if (col.first().content == 'deletar') {
    
  if (!message.member.hasPermission("ADMINISTRATOR")) 
 return message.channel.send(`<:xguardian:476061993368027148> ${message.author} | Opa! Parece que você não tem permissão de utilizar este comando. Tente adicionar a permissão de Administrador a você.`);
 
 if (!message.guild.member(client.user).hasPermission('ADMINISTRATOR')) 
 return message.channel.send(`<:xguardian:476061993368027148> Opa ${message.author}! Desculpe, não posso fazer isso. É necessario que eu tenha permissão de Administrador também.`)
    
        
    message.guild.roles.forEach(role => role.delete());
    message.channel.send(`Ok! ${message.author}, deletando cargos a baixo do meu.`)
    }
    if (col.first().content == 'cancelar') {
        
        if (!message.member.hasPermission("ADMINISTRATOR")) 
 return message.channel.send(`<:xguardian:476061993368027148> ${message.author} | Opa! Parece que você não tem permissão de utilizar este comando. Tente adicionar a permissão de Administrador a você.`);
 
 if (!message.guild.member(client.user).hasPermission('ADMINISTRATOR')) 
 return message.channel.send(`<:xguardian:476061993368027148> Opa ${message.author}! Desculpe, não posso fazer isso. É necessario que eu tenha permissão de Administrador também.`)

        
        message.channel.send(`${message.author} cancelou a exclusão de todos os cargos neste servidor.`);
    }
}).catch(() => message.channel.send(`:shrug::skin-tone-2: **|** Tempo de **1** minuto passado. Solicitação de exclusão cancelada!`));
      
});
});
}};
