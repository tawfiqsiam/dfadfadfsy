const db = require('../database.js');

module.exports = { task(client, message, suffix) { message.delete(1000); 

db.Bloqueio.findOne({
                "_id": message.author.id
            }, function (erro, documento) {
                if(documento) {
         if (!['244489368717230090'].includes(message.author.id))
                
 if ([documento.block].includes(message.author.id)) return message.channel.send(`<:xguardian:476061993368027148> | ${message.author}! Você foi bloqueado de usar comandos do **Sysop**, se você acha que isso é um engano nos contate! `);
        
}						  
						  
 if (!message.member.hasPermission("MANAGE_GUILD")) 
 return message.channel.send("<:xguardian:476061993368027148> Opa! Parece que você não tem permissão de utilizar este comando. Tente adicionar a permissão de Gerencisamento de Servidor a você.");
 
 if (!message.guild.member(client.user).hasPermission('MANAGE_CHANNELS')) 
 return message.reply('<:sysalerta:469789950938841088> Desculpe, não posso fazer isso. É necessario que eu tenha permissão `Gerenciar Canais` .')

	
	
if (!suffix) 
return message.reply(`Contador, como usar:\nUse \`sy!contador on <#channel>\` para definir o canal onde o contador será ativado.\nUse \`sy!contador off\` para desativar o canal do contador.`);


db.Guilds.findOne({"_id": message.guild.id}, function(erra, sysop) {
    if (!sysop) {
        
        var server = new db.Guilds({
            _id: message.guild.id,
             numero: '',
	     animado: '',
             texto: 'Texto do contador não definido.' ,
        });
        server.save();
        message.reply("💥 Use o comando novamente");
    } else {
        
switch (suffix.split(' ')[0]){
	
case 'on': {
    if (!message.member.hasPermission('ADMINISTRATOR', 'MANAGE_MESSAGES')) 
return message.reply(':no_entry_sign: Desculpe, este comando está disponível apenas para cargos administrativos do servidor.');
  if (!message.mentions.channels.first()) {
   if (sysop && sysop.numero)                 
                return message.channel.send('GG! O contador foi ativado em: <#' + sysop.numero + '>');
            else
            return message.channel.send('Mencione um canal onde o contador deve ser ativado.');
        } else { 
            if (!sysop) 
                sysop = {};
            sysop.numero = message.mentions.channels.first().id;
            sysop.save();
            return message.channel.send('Ok! Canal do contador definido!');
        }}

        case 'off': {
if (!message.member.hasPermission('ADMINISTRATOR', 'MANAGE_MESSAGES')) 
return message.reply(':no_entry_sign: Desculpe, este comando está disponível apenas para cargos administrativos do servidor.');
    
sysop.numero = '';
sysop.save();
message.channel.send('Contador desativado.');
        
 }}
}});
});
}};
