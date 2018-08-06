
const db = require("../database.js");

module.exports = { task(client, message, suffix) {



if (!message.member.hasPermission('ADMINISTRATOR', 'MANAGE_MESSAGES')) 
return message.reply(':no_entry_sign: Desculpe, o comando **filter** está disponível apenas para usuários administrativos e gerenciadores de mensagens  do server.');
db.Guilds.findOne({"_id": message.guild.id }, function(erra, docu) {
if (docu) {

if (!suffix) return message.reply(`Você deve especificar um filtro. Filtros disponíveis: \`convites\``);
	
switch (suffix.split(' ')[0]){
	
case 'convites': {

if (!message.member.hasPermission('MANAGE_MESSAGES'))
return message.reply('Você precisa ter no minimo permissões de Gerenciamento de Mensagens para utilizar esse filtro.');

if (!message.member.hasPermission('ADMINISTRATOR'))
 return message.reply(':no_entry_sign: Desculpe, este comando está disponível apenas para cargos administrativos do servidor.');
    		
    		    if (!docu) 
    			docu = {};
    			if (!!docu.convites)
    			docu.convites = !docu.convites;
    			else 
    			docu.convites = true;
    			
    			docu.save();
    			message.channel.send('Filtro de convites definido para ' + docu.convites);
    			
} 
}} else { 
	var server = new db.Guilds({
            _id: message.guild.id,
             convites: false,
        });
        server.save();
        message.reply("💥 Use o comando novamente");
    
}
});
}};
