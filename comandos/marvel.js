const Discord = require("discord.js");
const Jimp = require("jimp");
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
//let user2 = message.mentions.users.first() ? message.mentions.users.first() : message.author;
if (user) {
Jimp.read("https://cdn.discordapp.com/attachments/440338698408689674/440340229606604813/FiltroMarvel.png", function(erre, img) {
Jimp.read("./imagens/FiltroMarvel.png").then(function(filtro) { 
Jimp.read(`${user.avatarURL}`).then(function(avatar) {

  
avatar.resize(512, 512);
filtro.resize(512, 512);


img.composite(avatar, 0, 0);
img.composite(filtro, 0, 0);
  img.getBuffer(Jimp.MIME_PNG, (erri, buffer) => {
                              message.channel.send(``, new Discord.Attachment(buffer, 'FiltroMarvel.png'));
                              });

});
});
});
} else {
    message.reply('Não encontrei nenhum usuário');
}
})
    }
};
