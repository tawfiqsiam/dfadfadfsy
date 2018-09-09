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
  
if (!message.member.hasPermission('ADMINISTRATOR', 'MANAGE_MESSAGES')) 
return message.reply('<:xguardian:476061993368027148> Opa! Para utilizar este comando é necessário que você tenha permissões de Administrador ou Gerenciamento de mensagens');
      
      
let args = suffix.split(' '); 
let mensagem = suffix;
let user = message.mentions.users.first() ? message.mentions.users.first() : message.author;
 if(args[0] == "help"){
      message.channel.send(`Hey ${user.username}, **Welcome DM, como usar?**\n\nUse \`\`sy!dm\`\` \`\`<mensagem>\`\` ` + '\n\nParâmetros:\n\`\`${MENTION}\`\` - Para mencionar o usuário\n\`\`${SERVER}\`\` - Para dizer o nome do server\n\`\`${USER}\`\` - Dizer o nome do usuário e defina.\n\`${USER_ICONURL}\` - Dá o url da imagem de perfil do usuário que entrou\n\`${USER_ID}\` - Dá o ID o usuário que entrou\n\nExemplo: Olá ${MENTION}, seja bem-vindo (a) ao meu servidor ${SERVER}!\n${USER_ICONURL}');
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
    if (!documento.dm)
   return message.channel.send('<:sysalerta:469789950938841088> Este servidor não possui mensagens de boas-vindas no privado. Use `sy!dm help`');
   else 
   return message.channel.send('A mensagem de boas-vindas no privado atual é\n\`\`\`Markdown\n# ' + documento.welcome+'\`\`\`\n\nUse: sy!dm help para setar');

    } else {
        if (mensagem !== 'disable') {
            documento.dm = mensagem;
            documento.save();
            return message.channel.send(`GG ${message.author}! Você definiu a mensagem de boas-vindas no privado. <:LikeSysop3:476062023629799424>`);
        } else {
            documento.dm = '',
            documento.save();
            return message.channel.send('<:trust:447056422346424320> Mensagem de boas vindas no privado desabilitada.');
        }
    
        
    }
            
        }
});
  });
}};
