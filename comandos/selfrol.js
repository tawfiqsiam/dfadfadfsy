const Discord = require("discord.js");
const database = require("../database.js");

module.exports = {
    task(client, message, suffix) {
    
if (!['244489368717230090','282504900552949760'].includes(message.author.id)) 
return message.reply('Comando em fase `BETA` de teste, apenas usuários autorizados podem usar o mesmo.'); 
 
if (!message.member.hasPermission('MANAGE_ROLE')) 
return message.reply(':x: Desculpe, este comando está disponível apenas para cargos de Gerenciamento de cargos no servidor.');
	    
    let algo = suffix.split(' '); 
    if(algo[0] == "help"){
    message.reply('**Use:** `sy!selfrol disable-` +  `<role1/role2/role3/role4/role5>`\nExemplo: sy!selfrol disable-role1');
    return;
    }  
 
    if (!suffix)
    return message.reply('Especifique a selfrole a ser desativada, modo de uso: sy!selfrol help');
 
 database.Guilds.findOne({"_id": message.guild.id }, function(erro, documento) { if (!documento) return;  

    
    switch (suffix.split(' ')[0]) {
	case 'sy!selfrol disable-role1' : {
documento.rol1 = '',
documento.save();
message.channel.send('Selfrole 1 desativada');

}


case 'sy!selfrol disable-role2' : {
documento.rol2 = '',
documento.save();
message.channel.send('Selfrole 2 desativada');

}

case 'sy!selfrol disable-role3' : {
documento.rol3 = '',
documento.save();
message.channel.send('Selfrole 3 desativada');

}

case 'sy!selfrol disable-role4' : {
documento.rol4 = '',
documento.save();
message.channel.send('Selfrole 4 desativada');

}

case 'sy!selfrol disable-role5' : {
documento.rol5 = '',
documento.save();
message.channel.send('Selfrole 5 desativada');

}
}

     
 }); }};
