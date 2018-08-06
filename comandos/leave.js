const database = require("../database.js");

module.exports = {
  task(client, message, suffix) {


database.Bloqueio.findOne({
                "_id": message.author.id
            }, function (erro, documento) {
                if(documento) {
         if (!['244489368717230090','282504900552949760'].includes(message.author.id))
                
 if ([documento.block].includes(message.author.id)) return message.reply("<:FalseSysop3:462306755150479372> Você foi bloqueado de usar comandos do **SysopCorp**, se você acha que isso é um engano nos contate! `! Till#8514 | Natsu#7777`");
        
}
let args = suffix.split(' '); 
let user = message.mentions.users.first() ? message.mentions.users.first() : message.author;
 if(args[0] == "help"){
      message.channel.send(`Hey ${user.username}, **Leave, como usar?**\n\nUse \`\`sy!leave\`\` \`\`<mensagem>\`\` ` + '\n\nParâmetros:\n\`\`${MENTION}\`\` - Para mencionar o usuário\n\`\`${SERVER}\`\` - Para dizer o nome do server\n\`\`${USER}\`\` - Dizer o nome do usuário e defina.\n\nExemplo: Olá ${MENTION}, seja bem-vindo (a) ao meu servidor ${SERVER}!');
      return;
    }
      
let createAccount = id => {
         let servidor = new database.Guilds({
                _id: message.guild.id,
                autorole: '',
                sugestao: '',
                filterInvites: '',
                filterPrintscreen: '',
                filterWords: [],
                welcome: '',
                welcomeChannel: '',
                rremove: '',
                rremoveChannel: '',
                
            });
        servidor.save();
        if (!servidor) message.reply('Guilda registrada, use novamente o comando.');
    };


createAccount(message.guild.id);
database.Guilds.findOne({
    "_id": message.guild.id
}, function(erro, documento) {
    let mensagem = suffix;
    if (!mensagem) {
        if (!documento.rremove)
            return message.channel.send(':warning: Mensagem de saída desabilitada. Use `sy!leave help` para configurar.');
        else
            return message.channel.send('A mensagem de saída atual desse servidor é:\n' + documento.welcome);
    } else {
        if (mensagem !== 'disable') {
            documento.rremove= mensagem;
            documento.rremoveChannel = message.channel.id;
            documento.save();
            return message.channel.send('Mensagem de saída definida! Ela será postada nesse canal :eyes:');
        } else {
            documento.rremoveChannel = '';
            documento.save();
            return message.channel.send('Mensagem de saída desabilitada');
        }
    }
});
  })
}};
