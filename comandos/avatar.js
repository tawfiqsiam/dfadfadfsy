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
         if (!['244489368717230090','282504900552949760'].includes(message.author.id))
                
 if ([documento.block].includes(message.author.id)) return message.reply("<:FalseSysop3:462306755150479372> Você foi bloqueado de usar comandos do **SysopCorp**, se você acha que isso é um engano nos contate! `! Till#8514 | Natsu#7777`");
        
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
