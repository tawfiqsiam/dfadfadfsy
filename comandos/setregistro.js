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
    message.channel.send(`Setregistro é o comando para definir funções do outro comando de Registro. Use os parâmetros necessários para definir.\n\nSetregistro ${message.author}, como usar:\n\`sy!setregistro <parâmetro>\`\n\n\`Parâmetros:\` masculino/feminino/staff/membro\n\n\`Exemplo:\` sy!setregistro masculino @cargo/role\n\n**Informações** digite sy!setregistro info.`);
    return;
    }  
    
 
    
    if (!suffix)
    return message.channel.send(`${message.author} use sy!setregistro help`);
    
	    
 database.Guilds.findOne({"_id": message.guild.id }, function(erro, documento) { 
     
if (!documento) {

            var pessoa = new database.Guilds({
                _id: message.guild.id,
                autorole: '',
                sugestao: '',
                filterInvites: false,
                filterPrintscreen: '',
                filterWords: [],
                welcome: '',
                welcomeChannel: '',
                bye: '',
                byeChannel: '',
                dm: '',
                girl: '',
                man: '',
                staffer: '',
            });
            pessoa.save();
            message.channel.send(`<:xguardian:476061993368027148> ${message.author}, Servidor não registrado, use o comando novamente.`);
} else {

let rol1;
let rol2;
let rol3;
let rol4;


 if (!documento.man) rol1 = '`⛔` Cargo Masculino não definido ainda.';
 else rol1 = `<@&${documento.man}>`
 if (!documento.girl) rol2 = '`⛔` Cargo Feminino não definido ainda.';
 else rol2 = `<@&${documento.girl}>`
 if (!documento.staffer) rol3 = '`⛔` Cargo Staff não definido ainda.';
 else rol3 = `<@&${documento.staffer}>`
 if (!documento.autorole) rol4 = '`⛔` Cargo Membros não definido ainda.';
 else rol4 = `<@&${documento.autorole}>`

    switch (suffix.split(' ')[0]) {
	case 'masculino' : {
        
     if (!message.mentions.roles.first()) {
     if (documento && documento.man)   
     return message.channel.send('Cargo masculino definido para:  <@&' + documento.man + '>');
     else
     return message.channel.send('Defina um cargo para função masculino do seu registro!');
     } else { 
     if (!documento) documento = {};   
     documento.man = message.mentions.roles.first().id;
     documento.save();
     return message.channel.send('Cargo masculino definido!');

}}


case 'feminino' : {
        
     if (!message.mentions.roles.first()) {
     if (documento && documento.girl)   
     return message.channel.send('Cargo feminino definido para:  <@&' + documento.girl + '>');
     else
     return message.channel.send('Deefina um caro para função feminino do seu registro!');
     } else { 
     if (!documento) documento = {};   
     documento.girl = message.mentions.roles.first().id;
     documento.save();
     return message.channel.send('Cargo feminino definido.');

}}

case 'staff' : {
        
     if (!message.mentions.roles.first()) {
     if (documento && documento.staffer)   
     return message.channel.send('Cargo Staff definido para:  <@&' + documento.staffer + '>');
     else
     return message.channel.send('Defina um cargo para função staff do seu registro!');
     } else { 
     if (!documento) documento = {};   
     documento.staffer = message.mentions.roles.first().id;
     documento.save();
     return message.channel.send('Cargo Staff definido.');

}}

case 'membro' : {
        
     if (!message.mentions.roles.first()) {
     if (documento && documento.autorole)   
     return message.channel.send('Cargo membro definido para:  <@&' + documento.autorole + '>');
     else
     return message.channel.send('Defina um cargo para função membro do seu registro!');
     } else { 
     if (!documento) documento = {};   
     documento.autorole = message.mentions.roles.first().id;
     documento.save();
     return message.channel.send('Cargo membro definido. `OBS` A função membro, ativa também a autorole do servidor.');

}}}

let razao = suffix.split(' ');
if(razao[0] == "info"){ 
   var selfrole = new Discord.RichEmbed();
   selfrole.setThumbnail(message.guild.iconURL);
   selfrole.setDescription('Informações de cargos para **Registro**');
   selfrole.addField('Cargo Masculino:', `${rol1}`, false);
   selfrole.addField('Cargo Feminino', `${rol2}`, false);
   selfrole.addField('Cargo Staff', `${rol3}`, false);
   selfrole.addField('Cargo Membro', `${rol4}`, false);
   selfrole.setFooter('sy!setregistro help');
   selfrole.setColor(0x4959e9);
   message.channel.send({embed: selfrole});
 }
}


 }); }) }};
