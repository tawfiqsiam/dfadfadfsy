const Discord = require("discord.js");
module.exports = { task(client, message, suffix) {



let server = message.guild;
let user = message.mentions.users.size > 0 ? message.mentions.users.first() : message.author;
    
const embed = new Discord.RichEmbed()
.setThumbnail(user.avatarURL)
.setAuthor(server.name)
.setTitle(`Olá **${user.username}** aqui está o seu HELP.`)
.setDescription(`>> \`sy!patente\` - Para ver sua patente no servidor.\n>> \`sy!promover\` - Promover algum usuário aumentando ou diminuindo pontos.\n>> \`sy!bio\` - Para atualizar sua biografia\n>> \`sy!advertir\` - Para dar advertência em alguém`)
.setColor('#36393E');
message.channel.send({embed});
    
    
}};
