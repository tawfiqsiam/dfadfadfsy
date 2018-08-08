const database = require("../database.js");

module.exports = {
  task(client, message, suffix) {

      
database.Bloqueio.findOne({"_id": message.author.id}, function (erro, documento) {
                if(documento) {
         if (!['244489368717230090'].includes(message.author.id))
                
 if ([documento.block].includes(message.author.id)) return message.reply("<:FalseSysop3:462306755150479372> Você foi bloqueado de usar comandos do **SysopCorp**, se você acha que isso é um engano nos contate! `! Till#8514 | Natsu#7777`");
        
}

if (!message.member.hasPermission('ADMINISTRATOR', 'MANAGE_MESSAGES')) 
return message.reply('<:xguardian:476061993368027148> Opa! Para utilizar este comando é necessário que você tenha permissões de Administrador ou Gerenciamento de mensagens');
      
let args = suffix.split(' '); 
let mensagem = suffix;
let user = message.mentions.users.first() ? message.mentions.users.first() : message.author;
 if(args[0] == "help"){
      message.channel.send(`Hey ${user.username}, **Mensagem de saída, como usar?**\n\nUse \`\`sy!bye\`\` \`\`<mensagem>\`\` ` + '\n\nParâmetros:\n\`\`${MENTION}\`\` - Para mencionar o usuário\n\`\`${SERVER}\`\` - Para dizer o nome do server\n\`\`${USER}\`\` - Dizer o nome do usuário e defina.\n\`${USER_ICONURL}\` - Dá o url da imagem de perfil do usuário que entrou\n\`${USER_ID}\` - Dá o ID o usuário que entrou\n\nExemplo: ${USER} saiu. Sentiremos falta :(');
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
    if (!documento.bye)
   return message.channel.send('<:sysalerta:469789950938841088> Este servidor não possui mensagens de saída ainda. Use `sy!bye help`');
   else 
   return message.channel.send('A mensagem de saída atual é\n\`\`\`Markdown\n# ' + documento.bye+'\`\`\`\n\nUse: sy!welcome help para setar');

    } else {
        if (mensagem !== 'disable') {
            documento.bye = mensagem;
            documento.byeChannel = message.channel.id;
            documento.save();
            return message.channel.send(`GG ${message.author}! Você definiu a mensagem de saída. <:LikeSysop3:476062023629799424>`);
        } else {
            documento.byeChannel = '';
            documento.bye = '',
            documento.save();
            return message.channel.send('<:trust:447056422346424320> Mensagem de saída desabilitada.');
        }
    
        
    }
            
        }
});
  });
}};
