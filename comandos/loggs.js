const db = require('../database.js');

module.exports = { task(client, message, suffix) { message.delete(1000); 


db.Bloqueio.findOne({
                "_id": message.author.id
            }, function (erro, documento) {
                if(documento) {
         if (!['244489368717230090','282504900552949760'].includes(message.author.id))
                
 if ([documento.block].includes(message.author.id)) return message.reply("<:FalseSysop3:462306755150479372> Você foi bloqueado de usar comandos do **SysopCorp**, se você acha que isso é um engano nos contate! `! Till#8514 | Natsu#7777`");
        
}

if (!message.member.hasPermission('ADMINISTRATOR', 'MANAGE_MESSAGES')) 
return message.reply(':no_entry_sign: Desculpe, este comando está disponível apenas para cargos administrativos do servidor e ou Gerenciamento de mensagens.');
    
if (!suffix) 
return message.channel.send(`Olá **${message.author.username}**,\nCanal de Loggs, como usar?\nUse \`sy!loggs\` on <#channel> para definir um canal de loggs\nUse \`sy!loggs off\` para desativar o canal de loggs.\n\nO canal de loggs é onde o bot vai enviar alguns eventos do servidor. Exemplo: Novos usuários, novas roles, novos emojis e etc...`);


db.Guilds.findOne({"_id": message.guild.id}, function(erra, sysop) {

if (sysop) {
switch (suffix.split(' ')[0]){
	
case 'on': {

if (!message.member.hasPermission('ADMINISTRATOR', 'MANAGE_MESSAGES')) 
return message.reply(':no_entry_sign: Desculpe, este comando está disponível apenas para cargos administrativos do servidor e ou Gerenciamento de mensagens.');
  
  if (!message.mentions.channels.first()) {
   if (sysop && sysop.logger)                 
                return message.channel.send('Canal de loggs definido em: <#' + sysop.logger + '>');
            else
            return message.channel.send('Mencione um canal para definir como loggs do servidor!');
        } else { 
            if (!sysop) 
                sysop = {};
            sysop.logger = message.mentions.channels.first().id;
            sysop.save();
            return message.channel.send('Canal de loggs definido com sucesso!');
        }}

        case 'off': {

if (!message.member.hasPermission('ADMINISTRATOR', 'MANAGE_MESSAGES')) 
return message.reply(':no_entry_sign: Desculpe, este comando está disponível apenas para cargos administrativos do servidor e ou Gerenciamento de mensagens.');
    
sysop.logger = "";
sysop.save();
message.channel.send('Canal de loggs desativado.');
        
 }}} else { 
	var server = new db.Guilds({
            _id: message.guild.id,
             convites: false,
             sugest: '',
             logger: '',
        });
        server.save();
        message.reply("💥 Use o comando novamente");
}});
});
}};
