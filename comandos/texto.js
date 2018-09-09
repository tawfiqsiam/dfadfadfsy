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
  
if (!message.member.hasPermission("MANAGE_GUILD")) 
 return message.channel.send("<:xguardian:476061993368027148> Opa! Parece que você não tem permissão de utilizar este comando. Tente adicionar a permissão de Gerencisamento de Servidor a você.");
 
 if (!message.guild.member(client.user).hasPermission('MANAGE_CHANNELS')) 
 return message.reply('<:sysalerta:469789950938841088> Desculpe, não posso fazer isso. É necessario que eu tenha permissão `Gerenciar Canais` .')

	
      
let args = suffix.split(' '); 
let mensagem = suffix;
let user = message.mentions.users.first() ? message.mentions.users.first() : message.author;
 if(args[0] == "help"){
message.channel.send(`Hey ${user.username},\n**Use:** t!texto <mensagem> para definar o texto do contador.`);
      return;
    }
      
database.Guilds.findOne({ "_id": message.guild.id}, function(erro, documento) {
    if (!documento) {
        var server = new database.Guilds({
            _id: message.guild.id,
             convites: false,
             sugestao: '',
             welcome: '',
             words: [],
             autorole: '',
             welcomeChannel: '',
             byeChannel: '',
             dm: '',
			 contador: '',
             texto: '' ,
			 });
        server.save();
        message.reply('<:SysopLogoEMOI:439565791357042700> Um histórico foi criado. Use o comando novamente!');

        } else {
        if (!mensagem) {
    if (!documento.dm)
   return message.channel.send('<:sysalerta:469789950938841088> Este servidor não possui texto no contador. Use: `t!texto <mensagem>` para setar');
   else 
   return message.channel.send(`Blz! O texto do contador atual é: ${documento.texto}`);

    } else {
        if (mensagem !== 'disable') {
            documento.texto = mensagem;
            documento.save();
            return message.channel.send(`GG ${message.author}! Você definiu o texto do contador.`);
        } else {
            documento.texto = '',
            documento.save();
            return message.channel.send('Ok! Texto do contador desativado.');
        }
    
        
    }
            
        }
});
  });
}};
