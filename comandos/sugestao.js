const db = require('../database.js');

module.exports = { task(client, message, suffix) { message.delete(1000); 
db.Bloqueio.findOne({
                "_id": message.author.id
            }, function (erro, documento) {
                if(documento) {
         if (!['244489368717230090'].includes(message.author.id))
                
 if ([documento.block].includes(message.author.id)) return message.channel.send(`<:xguardian:476061993368027148> | ${message.author}! Você foi bloqueado de usar comandos do **Sysop**, se você acha que isso é um engano nos contate! `);
        
}


if (!message.member.hasPermission('ADMINISTRATOR', 'MANAGE_MESSAGES')) 
return message.reply(':no_entry_sign: Desculpe, este comando está disponível apenas para cargos administrativos do servidor.');
    
if (!suffix) 
return message.channel.send(`Hey ${message.author.username},\nCanal de sugestão, como usar:\nUse \`sy!sugestao\` on <#channel> para definir um canal de sugestões\nUse \`sy!sugestao off\` para desativar o canal de sugestão.\n\nO canal de sugestões é onde o bot vai reagir com emojis próprios para pessoas votarem em alguma sugestão dada por alguém que tenha acesso ao mesmo.`);


db.Guilds.findOne({"_id": message.guild.id}, function(erra, sysop) {
    if (sysop) {
switch (suffix.split(' ')[0]){
	
case 'on': {
    if (!message.member.hasPermission('ADMINISTRATOR', 'MANAGE_MESSAGES')) 
return message.reply(':no_entry_sign: Desculpe, este comando está disponível apenas para cargos administrativos do servidor.');
  if (!message.mentions.channels.first()) {
   if (sysop && sysop.sugest)                 
                return message.channel.send('Pronto! Agora as mensagens serão reagidas em: <#' + sysop.sugest + '>');
            else
            return message.channel.send('Mencione um canal para definir como sugestão!');
        } else { 
            if (!sysop) 
                sysop = {};
            sysop.sugest = message.mentions.channels.first().id;
            sysop.save();
            return message.channel.send('Canal de sugestões definido com sucesso!');
        }}

        case 'off': {
if (!message.member.hasPermission('ADMINISTRATOR', 'MANAGE_MESSAGES')) 
return message.reply(':no_entry_sign: Desculpe, este comando está disponível apenas para cargos administrativos do servidor.');
    
sysop.sugest = "";
sysop.save();
message.channel.send('Canal de sugestões desativado.');
        
 }}} else { 
	var server = new db.Guilds({
            _id: message.guild.id,
             convites: false,
             sugest: '',
        });
        server.save();
        message.reply("💥 Use o comando novamente");
}});
});
}};
