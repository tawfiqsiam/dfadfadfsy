 module.exports = { 
   categoria: 'Entretenimento',
   description: 'Divirta-se com os amigos com este comando. Faça o bot escolher uma opção de três ou mais, mais infos use `sy!decidir help`',
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
      message.reply('**Use:** `sy!decidir` +  `<opção1/opção2/opção3>`');
      return;
    }
        
   
  if (suffix.length < 1 || !/^(.+( ?\/ ?.+[^/])+)$/i.test(suffix = suffix.join(' '))) {
  }

  suffix = suffix.split('/');
  message.channel.send(`Em minha opinião, prefiro: ${suffix[Math.floor(Math.random() * suffix.lenght)]}`).catch(e => {
    console.log.error(e);
  });
 })
}};
