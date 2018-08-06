module.exports = { 
  categoria: 'Social',
  description: 'Procure por usuários com o mesmo descriminator(Tag ao lado de seu nome) que o seu ou de outras pessoas. ',
  task(client, message, suffix) {
   
let database = require("../database.js");  
database.Bloqueio.findOne({
                "_id": message.author.id
            }, function (erro, documento) {
                if(documento) {
         if (!['244489368717230090','282504900552949760'].includes(message.author.id))
                
 if ([documento.block].includes(message.author.id)) return message.reply("<:FalseSysop3:462306755150479372> Você foi bloqueado de usar comandos do **SysopCorp**, se você acha que isso é um engano nos contate! `! Till#8514 | Natsu#7777`");
        
}
    
   suffix = suffix.split(' '); 
 if(suffix[0] == "help"){
      message.reply('**Use:** `sy!descrim` +  `<0001>` (Troque por outra tag aleatória)');
      return;
    }
   
   
   if (!/^\d{4}$/.test(suffix[0])) {
  }

  let members = message.guild.members.filter(m => m.user.discriminator === suffix[0]).map(m => m.user);
  let total = members.length;
  members = members.length > 0 ? members.slice(0, 10).join(', ') : 'None';

  message.channel.send({
    embed: {
      color: 0x4959e9,
      title: 'Discriminator search',
      description: `Encontrado **${total}** usuários com discriminator **${suffix[0]}**`,
      fields: [
        {
          name: 'Usuários',
          value: total > 10 ? `${members} and ${total - 10} more.` : members
        }
      ]
    }
  }).catch(e => {
    console.log.error(e);
  });
})
}};
