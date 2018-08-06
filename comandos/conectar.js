   module.exports = {
    task(client, message, suffix) {

       let database = require("../database.js");  
database.Bloqueio.findOne({
                "_id": message.author.id
            }, function (erro, documento) {
                if(documento) {
         if (!['244489368717230090','282504900552949760'].includes(message.author.id))
                
 if ([documento.block].includes(message.author.id)) return message.reply("<:FalseSysop3:462306755150479372> Você foi bloqueado de usar comandos do **SysopCorp**, se você acha que isso é um engano nos contate! `! Till#8514 | Natsu#7777`");
        
}
   const voiceChannel = message.member.voiceChannel;
   const permissions = voiceChannel.permissionsFor(client.user);
    if (!permissions.has('CONNECT')) {
      return message.channel.send('<:FalseSysop3:462306755150479372> Não consigo me conectar ao seu canal de voz, verifique se tenho as permissões adequadas!');
    } 
    if (!permissions.has('SPEAK')) {
      return message.channel.send('<:FalseSysop3:462306755150479372> Eu não posso falar neste canal de voz, verifique se eu tenho as permissões adequadas!');
    }
   
    let Canalvoz = message.member.voiceChannel;
    if (!Canalvoz || Canalvoz.type !== 'voice') {
    message.channel.send('Você precisa estar em um canal de voz primeiro.').catch(error => message.channel.send(error));
    } else if (message.guild.voiceConnection) {
    message.channel.send('Já estou conectado a um canal de voz.');
    } else {
     message.channel.send('Conectando...').then(m => {
          Canalvoz.join().then(() => {
               m.edit(':white_check_mark: | Conectado com sucesso.').catch(error => message.channel.send(error));
         }).catch(error => message.channel.send(error));
     }).catch(error => message.channel.send(error));
    }
   })
}};
