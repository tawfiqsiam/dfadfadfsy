    

module.exports = {
    description: 'Adicione um cargo a um usuário',
    categoria: 'Moderação',
    task(client, message, suffix) {
        
let database = require("../database.js");  
database.Bloqueio.findOne({
                "_id": message.author.id
            }, function (erro, documento) {
                if(documento) {
         if (!['244489368717230090'].includes(message.author.id))
                
 if ([documento.block].includes(message.author.id)) return message.channel.send(`<:xguardian:476061993368027148> | ${message.author}! Você foi bloqueado de usar comandos do **Sysop**, se você acha que isso é um engano nos contate! `);
        
}
        
    let membro = message.mentions.members.first();
    let nomerole = '@'+suffix.split(' ').slice(1).join(' ');
        
       const adriano = message.guild.member(membro)
    if (adriano.highestRole.position >= message.member.highestRole.position) return message.reply("Você não pode adicionar cargo a este usuário, seu cargo é menor ou igual a o do usuário a ser promovido!")

    if (!message.member.hasPermission('ADMINISTRATOR'))
    return message.channel.send(":x: Você não tem permissão para utilizar este comando!");
    let role = message.mentions.roles.first();
     
    if(message.mentions.users.size < 1) return message.reply('Você deve mencionar a um usuário.').catch(console.error);
    if (!nomerole) return message.channel.send('Escreva desta forma, `sy!addrole @username @role`');
    if(!role) return message.channel.send('Cargo não encontrado neste servidor.');
    
    membro.addRole(role).catch(console.error);
    message.channel.send(`O cargo **${role}** foi adicionado ao **${membro.user}**.`);
})
  
  }};
