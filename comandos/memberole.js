  module.exports = {
    categoria: 'Social',
    description: 'Verifique quantos membros estão em um determinado cargo.',
    task(client, message, suffix) {
      
let database = require("../database.js");  
database.Bloqueio.findOne({
                "_id": message.author.id
            }, function (erro, documento) {
                if(documento) {
         if (!['244489368717230090','282504900552949760'].includes(message.author.id))
                
 if ([documento.block].includes(message.author.id)) return message.reply("<:FalseSysop3:462306755150479372> Você foi bloqueado de usar comandos do **SysopCorp**, se você acha que isso é um engano nos contate! `! Till#8514 | Natsu#7777`");
        
}
      
         message.delete(1000); 
   if(!suffix) return message.channel.send('Escreva o nome do cargo/role.');
    let rol = message.guild.roles.find("name", suffix);
    if(!rol) return message.channel.send('Cargo não encontrado. Certifique de escrever o nome do cargo e não mencioná-lo.');
    let miembroroles = message.guild.roles.get(rol.id).members;
    message.channel.send(`Total de  **${miembroroles.size}** membro(s) com o cargo de **${suffix}**.`);
    })
  }}
