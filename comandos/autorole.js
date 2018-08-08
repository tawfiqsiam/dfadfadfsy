const database = require("../database.js");

module.exports = {
  task(client, message, suffix) {

      
database.Bloqueio.findOne({"_id": message.author.id}, function (erro, documento) {
                if(documento) {
         if (!['244489368717230090'].includes(message.author.id))
                
 if ([documento.block].includes(message.author.id)) return message.reply("<:xguardian:476061993368027148> Você foi bloqueado de usar comandos do **Sysop**! Se você acha que é um engano nos contate.");
        
}
  
if (!message.member.hasPermission('ADMINISTRATOR', 'MANAGE_MESSAGES')) 
return message.reply('<:xguardian:476061993368027148> Opa! É preciso que você tenha permissões de Administrador ou Gerenciador de Mensagens para utilizar este comando.');
    
      
let args = suffix.split(' '); 
let mensagem = suffix;
let user = message.mentions.users.first() ? message.mentions.users.first() : message.author;
 if(args[0] == "help"){
message.channel.send(`${message.author}\nAutorole, como usar?\nUse \`sy!autorole\` <@role> para definir a autorole.\nUse \`sy!autorole off\` para desativar a autorole.\n\nA Autorole é uma auto atribuição de cargo sempre quando um novo usuário entrar. A role/cargo que você definir será o cargo que o usuário receberá ao entrar no servidor.`);
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
        });
        server.save();
        message.reply('<:SysopLogoEMOI:439565791357042700> Um histórico foi criado. Use o comando novamente!');

        } else {
        if (!mensagem) {
    if (!documento.autorole)
   return message.channel.send('<:sysalerta:469789950938841088> Este servidor não possui autorole. Use `sy!autorole help`');
   else 
   return message.channel.send(`A autole deste servidor atualmente é: <@&${documento.autorole}>. Use: sy!autorole help para setar`);

    } else {
        
        
        if (mensagem !== 'off') {
            documento.autorole = message.mentions.roles.first().id
            documento.save();
            return message.channel.send(`${message.author}! Você definiu a autorole do servidor. <:LikeSysop3:476062023629799424>`);
        } else {
            documento.autorole = '';
            documento.save();
            return message.channel.send('<:trust:447056422346424320> OK! Autorole **Desativada!**');
        }
    
        
    }
            
        }
});
});
}};
