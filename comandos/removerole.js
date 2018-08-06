  module.exports = {
    description: 'Remove um cargo de usuário',
    categoria: 'Moderação',
    task(client, message, suffix) {
   
      let database = require("../database.js");  
database.Bloqueio.findOne({
                "_id": message.author.id
            }, function (erro, documento) {
                if(documento) {
         if (!['244489368717230090','282504900552949760'].includes(message.author.id))
                
 if ([documento.block].includes(message.author.id)) return message.reply("<:FalseSysop3:462306755150479372> Você foi bloqueado de usar comandos do **SysopCorp**, se você acha que isso é um engano nos contate! `! Till#8514 | Natsu#7777`");
        
}
      
      
      let miembro = message.mentions.members.first();
    let nombrerol = suffix.split(' ').slice(1).join(' ');
    
  if (!message.member.hasPermission('MANAGE_ROLES_OR_PERMISSIONS'))
  return message.chanel.send(":x: Você não tem permissão para utilizar este comando!");

   const adriano = message.guild.member(membro)
   if (adriano.highestRole.position >= message.member.highestRole.position) return message.reply("Você não pode remover cargo deste usuário, seu cargo é menor ou igual a do mesmo!")
      
    let role = message.mentions.roles.first();
     
    if(message.mentions.users.size < 1) return message.reply('Mencione um usuário.').catch(console.error);
    if(!nombrerol) return message.channel.send('Escreva da forma certa, `sy!removerole @mmembro @role`');
    if(!role) return message.channel.send('Cargo não encontrado neste servidor.');
    
    miembro.removeRole(role).catch(console.error);
    message.channel.send(`O cargo **${role}** foi removido de **${miembro.user}** neste servidor.`);
})
  }}
