const Discord = require("discord.js");
const database = require("../database.js");

module.exports = {
    task(client, message, suffix) {
	   
database.Bloqueio.findOne({
                "_id": message.author.id
            }, function (erro, documento) {
                if(documento) {
         if (!['244489368717230090'].includes(message.author.id))
                
 if ([documento.block].includes(message.author.id)) return message.channel.send(`<:xguardian:476061993368027148> | ${message.author}! Você foi bloqueado de usar comandos do **Sysop**, se você acha que isso é um engano nos contate! `);
        
}
   
if (!message.member.hasPermission('MANAGE_ROLES')) 
return message.reply(':x: Desculpe, este comando está disponível apenas para cargos de Gerenciamento de cargos no servidor.');   
	    
    let algo = suffix.split(' '); 
    if(algo[0] == "help"){
    message.reply('**Use:** `sy!selfrole` +  `<role1/role2/role3/role4/role5>` + @role\n Use: sy!selfrole info para mais informações.');
    return;
    }  
    
    if (!suffix)
    return message.reply('Especifique a selfrole, modo de uso: sy!selfrole help');
    
	    
 database.Guilds.findOne({"_id": message.guild.id }, function(erro, documento) { if (!documento) return;  

let rol1;
let rol2;
let rol3;
let rol4;
let rol5;

 if (!documento.rol1) rol1 = '`⛔` Role 1 não definida';
 else rol1 = `✅ <@&${documento.rol1}>`
 if (!documento.rol2) rol2 = '`⛔` Role 2 não definida';
 else rol2 = `✅ <@&${documento.rol2}>`
 if (!documento.rol3) rol3 = '`⛔` Role 3 não definida';
 else rol3 = `✅ <@&${documento.rol3}>`
 if (!documento.rol4) rol4 = '`⛔` Role 4 não definida';
 else rol4 = `✅ <@&${documento.rol4}>`
 if (!documento.rol5) rol5 = '`⛔` Role 5 não definida';
 else rol5 = `✅ <@&${documento.rol5}>`

    switch (suffix.split(' ')[0]) {
	case 'role1' : {
        
     if (!message.mentions.roles.first()) {
     if (documento && documento.rol1)   
     return message.channel.send(' Selfrole 1 definida para:  <@&' + documento.rol1 + '>');
     else
     return message.channel.send('Defina um cargo para selfrole (role1)!');
     } else { 
     if (!documento) documento = {};   
     documento.rol1 = message.mentions.roles.first().id;
     documento.save();
     return message.channel.send('Selfrole 1 definida');

}}


case 'role2' : {
        
     if (!message.mentions.roles.first()) {
     if (documento && documento.rol2)   
     return message.channel.send(' Selfrole 2 definida para:  <@&' + documento.rol2 + '>');
     else
     return message.channel.send('Defina um cargo para selfrole (role2)!');
     } else { 
     if (!documento) documento = {};   
     documento.rol2 = message.mentions.roles.first().id;
     documento.save();
     return message.channel.send('Selfrole 2 definida');

}}

case 'role3' : {
        
     if (!message.mentions.roles.first()) {
     if (documento && documento.rol3)   
     return message.channel.send(' Selfrole 3 definida para:  <@&' + documento.rol3 + '>');
     else
     return message.channel.send('Defina um cargo para selfrole (role3)!');
     } else { 
     if (!documento) documento = {};   
     documento.rol3 = message.mentions.roles.first().id;
     documento.save();
     return message.channel.send('Selfrole 3 definida');

}}

case 'role4' : {
        
     if (!message.mentions.roles.first()) {
     if (documento && documento.rol4)   
     return message.channel.send(' Selfrole 4 definida para:  <@&' + documento.rol4 + '>');
     else
     return message.channel.send('Defina um cargo para selfrole (role4)!');
     } else { 
     if (!documento) documento = {};   
     documento.rol4 = message.mentions.roles.first().id;
     documento.save();
     return message.channel.send('Selfrole 4 definida');

}}

case 'role5' : {
        
     if (!message.mentions.roles.first()) {
     if (documento && documento.rol5)   
     return message.channel.send(' Selfrole 5 definida para:  <@&' + documento.rol5 + '>');
     else
     return message.channel.send('Defina um cargo para selfrole (role5)!');
     } else { 
     if (!documento) documento = {};   
     documento.rol5 = message.mentions.roles.first().id;
     documento.save();
     return message.channel.send('Selfrole 5 definida');

}}
}

let razao = suffix.split(' ');
if(razao[0] == "info"){ 
   var selfrole = new Discord.RichEmbed();
   selfrole.setThumbnail(message.guild.iconURL);
   selfrole.setDescription('Use: sy!join-role 1 á 5 para pegar uma role disponível\n\n**SELFSROLES DISPONÍVEIS:**');
   selfrole.addField('Selfrole 1', `${rol1}`, false);
   selfrole.addField('Selfrole 2', `${rol2}`, false);
   selfrole.addField('Selfrole 3', `${rol3}`, false);
   selfrole.addField('Selfrole 4', `${rol4}`, false);
   selfrole.addField('Selfrole 5', `&${rol5}`, false);
   selfrole.setFooter('sy!selfrole help');
   selfrole.setColor(0x4959e9);
   message.channel.send({embed: selfrole});
 }
     
 }); }) }};
