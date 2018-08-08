const Discord = require("discord.js");
const db = require("../database.js");
module.exports = { task(client, message, suffix) {

  if (!message.member.hasPermission("MANAGE_GUILD")) 
 return message.channel.send("Opa! Parece que você não tem permissão de utilizar este comando. Tente adicionar a permissão de Gerencisamento de Servidor a você.");
 
 if (!message.guild.member(client.user).hasPermission('MANAGE_MESSAGES')) 
 return message.reply('Desculpe, não posso fazer isso. É necessario que eu tenha permissão de Gerencisamento de mensagens.')

  
if (!suffix) 
return message.channel.send(`Olá ${message.author}, você quer promovar alguém? Use:\n\n\`sy!promover\` 5 @menção para adicionar 5 pontos a um usuário.\n\`sy!promover\` 10 @menção para adicionar 10 pontos a um usuário.`);

db.Users.findOne({ "_id": message.author.id }, function(erro, sysop) {
db.Users.findOne({ "_id": message.mentions.users.first().id}, function(err2, sysopa) {    
if (sysop) {    
if (sysopa) {  

let hm = message.mentions.users.first() || message.author;

switch (suffix.split(' ')[0]){
case '5': {

if (!hm) return message.reply(`Defina os valores e mencione um usuário!`);


sysopa.rpup += 5;
sysopa.save();
return message.reply(`Você aumentou a patente de **${message.mentions.users.first().username}** com +5 pontos.`);
}

////////////////////////////////////////////////////////////////////////////////////////////////////

case '10': {

if (!hm) return message.reply(`Defina os valores e mencione um usuário!`);
 
sysopa.rpup += 10;
sysopa.save();
return message.reply(`Você aumentou a patente de **${message.mentions.users.first().username}** com +10 pontos.`); 
}
    case '-5': {


sysopa.rpup -= 5;
sysopa.save();
return message.reply(`Você diminuiu a patente de **${message.mentions.users.first().username}** com -5 pontos.`);
}

////////////////////////////////////////////////////////////////////////////////////////////////////

case '-10': {

sysopa.rpup -= 10;
sysopa.save();
return message.reply(`Você diminuiu a patente de **${message.mentions.users.first().username}** com -10 pontos.`); 
}
}} else {
var pessoa = new db.Users({
                        _id: message.author.id,
                        rpup: '',
                        rpbio: '',
                        adv: 0,
                    }); 
                    pessoa.save();
                    message.reply(` ! Histórico criado. Use este comando novamente.`);
}

}
}); 
});  
}};    
