const Discord = require("discord.js");
module.exports = {
    description: `Mostro o avatar de usários usando menção ou ID.`,
    categoria: 'Social',
    task(client, message, suffix) {
        
let database = require("../database.js");  
database.Bloqueio.findOne({
                "_id": message.author.id
            }, function (erro, documento) {
                if(documento) {
         if (!['244489368717230090'].includes(message.author.id))
                
 if ([documento.block].includes(message.author.id)) return message.channel.send(`<:xguardian:476061993368027148> | ${message.author}! Você foi bloqueado de usar comandos do **Sysop**, se você acha que isso é um engano nos contate! `);
        
}
        
let id = message.mentions.users.first()

    ? message.mentions.users.first().id 
    : suffix.match(/\d{16,18}/)
    ? suffix.match(/\d{16,18}/)[0]
    : null;
if (!id) return message.reply('Marque alguém ou especifique um ID');
let user = client.users.has(id) ? client.users.get(id) : null;
if (user) {
   const embed = new Discord.RichEmbed()
    .setDescription('` TAG `' + '#'+user.discriminator + ` [**Fazer Download!**](${user.displayAvatarURL}) \n \n` + ' :camera_with_flash:  Avatar de ' + user)
    .setImage(user.displayAvatarURL)
    .setColor(0x4959e9)
message.channel.send({embed});

} else {
    message.reply('Não encontrei nenhum usuário');
}
})
    }
};
