const database = require("../database.js");

module.exports = {
  task(client, message, suffix) {

      
database.Bloqueio.findOne({"_id": message.author.id}, function (erro, documento) {
                if(documento) {
         if (!['244489368717230090','282504900552949760'].includes(message.author.id))
                
 if ([documento.block].includes(message.author.id)) return message.reply("<:FalseSysop3:462306755150479372> Você foi bloqueado de usar comandos do **SysopCorp**, se você acha que isso é um engano nos contate! `! Till#8514 | Natsu#7777`");
        
}
      
let args = suffix.split(' '); 
let mensagem = suffix;
let user = message.mentions.users.first() ? message.mentions.users.first() : message.author;
 if(args[0] == "help"){
      message.channel.send(`Hey ${user.username}, **Welcome, como usar?**\n\nUse \`\`sy!welcome\`\` \`\`<mensagem>\`\` ` + '\n\nParâmetros:\n\`\`${MENTION}\`\` - Para mencionar o usuário\n\`\`${SERVER}\`\` - Para dizer o nome do server\n\`\`${USER}\`\` - Dizer o nome do usuário e defina.\n\`${USER_ICONURL}\` - Dá o url da imagem de perfil do usuário que entrou\n\`${USER_ID}\` - Dá o ID o usuário que entrou\n\nExemplo: Olá ${MENTION}, seja bem-vindo (a) ao meu servidor ${SERVER}!\n${USER_ICONURL}');
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
    if (!documento.welcome)
   return message.channel.send('<:sysalerta:469789950938841088> Este servidor não possui mensagens de boas-vindas ainda. Use `sy!welcome help`');
   else 
   return message.channel.send('A mensagem de boas-vindas atual é\n\`\`\`Markdown\n# ' + documento.welcome+'\`\`\`\n\nUse: sy!welcome help para setar');

    } else {
        if (mensagem !== 'disable') {
            documento.welcome = mensagem;
            documento.welcomeChannel = message.channel.id;
            documento.save();
            return message.channel.send(`GG ${message.author}! Você definiu a mensagem de boas-vindas. <:LikeSysop3:462306728508260352>`);
        } else {
            documento.welcomeChannel = '';
            documento.welcome = '',
            documento.save();
            return message.channel.send('Mensagem de boas vindas desabilitada.');
        }
    
        
    }
            
        }
});
  });
}};
