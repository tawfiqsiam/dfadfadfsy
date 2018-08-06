const Discord = require("discord.js");

exports.run = (client, message, args) => {
        
        let id = message.mentions.users.first()
        
            ? message.mentions.users.first().id 
     
            : args.match(/\d{16,18}/)
            ? args.match(/\d{16,18}/)[0]
            : null;

            
if (!message.member.hasPermission('BAN_MEMBERS')) return message.reply(':no_entry_sign: Desculpe, você não tem permissão de banir usuário neste servidor!');
 
if (!id) return message.reply('Mencione alguém ou especifique um ID!');
let user = client.users.has(id) ? client.users.get(id) : null;
if (user) {

    message.guild.ban(user, 2);
    
    const embed = new Discord.RichEmbed()
    .setTitle(`**Banned**`)
    .addField(`${user.tag}`, `**ID: ${user.id}**` )
    .addField(`Usuário banido`,` ${user.username} foi banido com sucesso!`)
    .setThumbnail(user.displayAvatarURL)
    .setColor(0x4959e9)
    message.channel.send({embed});

} else {
    message.reply('Não encontrei nenhum usuário');
}
};
