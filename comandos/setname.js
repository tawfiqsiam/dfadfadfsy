module.exports = {
    description: 'Alterar apelido de usuários',
    categoria: 'Moderação',
    cooldown: 5,
    task(client, message, suffix) {

  let database = require("../database.js");  
database.Bloqueio.findOne({
                "_id": message.author.id
            }, function (erro, documento) {
                if(documento) {
         if (!['244489368717230090','282504900552949760'].includes(message.author.id))
                
 if ([documento.block].includes(message.author.id)) return message.reply("<:FalseSysop3:462306755150479372> Você foi bloqueado de usar comandos do **SysopCorp**, se você acha que isso é um engano nos contate! `! Till#8514 | Natsu#7777`");
        
}
        
        if (!message.member.hasPermission('MANAGE_NICKNAMES'))
        return message.reply(':no_entry_sign: Este comando está disponível apenas para cargos de Gerenciamento de apelidos.');
        
              
      const content = message.content.split(' ').slice(2);
      const args = content.join(' ');
      let miembro = message.mentions.members.first();
      if(message.mentions.users.size < 1) return message.reply('Você deve mencionar alguém!').catch(console.error);
      if(!args) return message.channel.send("Você deve por um novo nome");

      miembro.setNickname(`${args}`);
      message.channel.send(`${miembro.user} foi nomeado como: **${args}**`);
    })
  }};
