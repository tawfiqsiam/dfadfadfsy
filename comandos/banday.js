const Discord = require("discord.js");

module.exports = {
    description: 'Bano usuários do servidor com motivo.',
    categoria: 'Moderação',
    task(client, message, suffix) {
     message.delete();
 
let database = require("../database.js");  
database.Bloqueio.findOne({
                "_id": message.author.id
            }, function (erro, documento) {
                if(documento) {
         if (!['244489368717230090','282504900552949760'].includes(message.author.id))
                
 if ([documento.block].includes(message.author.id)) return message.reply("<:FalseSysop3:462306755150479372> You are blocked to use Sysop commands, if you think is this wrong contract us! `SHAZAM!#0001 | Natsu#0001`");
        
}

if (!message.member.hasPermission('BAN_MEMBERS')) 
return message.reply('<:xguardian:476061993368027148> Desculpe, você não tem permissão de banir usuário neste servidor!');

      
            let args = suffix.split(' '); 
            let motivo =  args.slice(1).join(' ') 
            ? args.slice(1).join(' ')
            :  "Foi banido! Motivo não especificado.";



let id = message.mentions.users.first()

    ? message.mentions.users.first().id 

    : args
    ? args[0]
    : null;
if (!id) return message.reply("<:sysalerta:469789950938841088> Não encontrei nenhum usuário.");

let banPerms = message.guild.member(client.user).hasPermission('BAN_MEMBERS')
if (!banPerms)  return message.reply("<:xguardian:476061993368027148> Eu não tenho permissão para banir usuários neste servidor.");

let user = client.users.has(id) ? client.users.get(id) : null;

if (!user) return message.reply("<:sysalerta:469789950938841088> Não encontrei nenhum usuário");
let bannable = message.guild.member(id)
if (bannable) {  
    if (bannable.highestRole.position >= message.member.highestRole.position) return message.reply("<:xguardian:476061993368027148> Você não pode banir este usuário pois seu cargo é menor ou igual a o do usuário a ser banido!")
    
    if (!message.guild.member(user).bannable) return message.reply('<:sysalerta:469789950938841088> Eu não posso banir esse usuário.');
    
} else {

    message.guild.ban(user, {reason: motivo, days: 1});
    let server = message.guild;
    const embed1 = new Discord.RichEmbed()
    .setTitle(`🚫 Member Banned`)
    .addField(`**Membro banido:**`, user)
    .addField(`**Banido do servidor:**`, server.name)
    .addField(`**Motivo:**`, motivo)
    .addField(`**Executor:**`, message.author)
    .addField(`**Seu banimento expira em:**`, '**1** dia')
    .setThumbnail(user.avatarURL)
    .setColor(0x26dfd6)
    message.channel.send({embed1});
    user.send({embed1})
}
if (user) {

   
    message.guild.ban(user, {reason: motivo, days: 1});
    let server = message.guild
    const embed1 = new Discord.RichEmbed()
    .setTitle(`🚫 Member Banned`)
    .addField(`**Membro banido:**`, user)
    .addField(`**Banido do servidor:**`, server.name)
    .addField(`**Motivo:**`, motivo)
    .addField(`**Executor:**`, message.author)
    .addField(`**Seu banimento expira em:**`, '**1** dia')
    .setThumbnail(user.avatarURL)
    .setColor(0x26dfd6)
    message.channel.send({embed1});
    user.send({embed1})

} else {
    message.reply('<:xguardian:476061993368027148> Não encontrei nenhum usuário');

}
            });
}
};
