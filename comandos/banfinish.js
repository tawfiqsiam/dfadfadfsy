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
                
 if ([documento.block].includes(message.author.id)) return message.reply("<:FalseSysop3:462306755150479372> Você foi bloqueado de usar comandos do **SysopCorp**, se você acha que isso é um engano nos contate! `! Till#8514 | Natsu#7777`");
        
}
      
            let args = suffix.split(' '); 
            let igor =  args.slice(1).join(' ') 
            ? args.slice(1).join(' ')
            :  "Foi banido sem colocar o motivo.";



if (!message.member.hasPermission('BAN_MEMBERS')) return message.reply(':no_entry_sign: Desculpe, você não tem permissão de banir usuário neste servidor!');
let id = message.mentions.users.first()

    ? message.mentions.users.first().id 

    : args
    ? args[0]
    : null;
if (!id) return message.reply('Mencione alguém ou especifique um ID.');

let banPerms = message.guild.member(client.user).hasPermission('BAN_MEMBERS')
if (!banPerms)  return message.reply("Eu não tenho permissão para banir usuários nesse servidor.");

let user = client.users.has(id) ? client.users.get(id) : null;

if (!user) return message.reply("Não encontrei nenhum usuário.")
let bannable = message.guild.member(id)
if (bannable) {  
    if (bannable.highestRole.position >= message.member.highestRole.position) return message.reply(" :x: Você não pode banir este usuário pois seu cargo é menor ou igual a o do usuário a ser banido!")
    
    if (!message.guild.member(user).bannable) return message.reply('Eu não posso banir esse usuário.');
    
} else {

    message.guild.ban(user, igor);
    
    const embed1 = new Discord.RichEmbed()
    .setTitle(`🚫 Member Banned`)
    .addField(`**Usuário banido:**`, user)
    .addField(`**Motivo:**`, igor)
    
    .setThumbnail('https://i.imgur.com/etOfjIY.png')
    .setColor(0x26dfd6)
    message.channel.send({embed1});
}
if (user) {

   
    message.guild.ban(user, igor);
    
    const embed = new Discord.RichEmbed()
    .setTitle(`🚫 Member Banned`)
    .addField(`**Usuário banido:**`, user)
    .addField(`**Motivo:**`, igor)
    
    .setThumbnail('https://i.imgur.com/etOfjIY.png')
    .setColor(0x26dfd6)
    message.channel.send({embed});

} else {
    message.reply('Não encontrei nenhum usuário');

}
    })
}
};
