const db = require("../database.js");
var dayCol = new Set()

module.exports = { task(client, message, suffix) {

db.Bloqueio.findOne({
                "_id": message.author.id
            }, function (erro, documento) {
                if(documento) {
         if (!['244489368717230090','282504900552949760'].includes(message.author.id))
                
 if ([documento.block].includes(message.author.id)) return message.reply("<:xguardian:476061993368027148> Você foi bloqueado de usar comandos do **SysopCorp**, se você acha que isso é um engano nos contate! `! Till#8514 | Natsu#7777`");
        
}


 if (!message.member.hasPermission("ADMINISTRATOR")) 
 return message.channel.send(`<:xguardian:476061993368027148> ${message.author} | Opa! Parece que você não tem permissão de utilizar este comando. Tente adicionar a permissão de Administrador a você.`);
 
 if (!message.guild.member(client.user).hasPermission('ADMINISTRATOR')) 
 return message.channel.send(`<:xguardian:476061993368027148> Opa ${message.author}! Desculpe, não posso fazer isso. É necessario que eu tenha permissão de Administrador também.`)


let role = message.mentions.roles.first().id
if (!role) return message.reply(`mencione a role a ser adicionada a todos do servidor.`)

message.channel.send(`<:sysalerta:469789950938841088> | ${message.author} está função é perigosa e requer confirmação. Responda "adicionar" para continuar e "cancelar" para cancelar o pedido.`).then(() => {
message.channel.awaitMessages(res => 
(res.content == "adicionar" && res.author.id == message.author.id) || (res.content == 'cancelar' && res.author.id == message.author.id), { 
max: 1, time: 60000, errors: ['time'] }).then(col => {
if (col.first().content == 'adicionar') {
    
  if (!message.member.hasPermission("ADMINISTRATOR")) 
 return message.channel.send(`<:xguardian:476061993368027148> ${message.author} | Opa! Parece que você não tem permissão de utilizar este comando. Tente adicionar a permissão de Administrador a você.`);
 
 if (!message.guild.member(client.user).hasPermission('ADMINISTRATOR')) 
 return message.channel.send(`<:xguardian:476061993368027148> Opa ${message.author}! Desculpe, não posso fazer isso. É necessario que eu tenha permissão de Administrador também.`)
    
    message.guild.members.forEach(m => m.addRole(role));
    message.channel.send(`Ok! ${message.author}, adicionando o cargo <@&${role}> a todos. Isso pode demorar um pouco.`)
    }
    if (col.first().content == 'cancelar') {
        message.channel.send(`${message.author} cancelou a adição da tag <@&${role}> para todos.`);
    }
}).catch(() => message.channel.send(`:shrug::skin-tone-2: **|** Tempo de **1** minuto expirado. Solicitação cancelada!`));
      
});
});
}};
