const Discord = require("discord.js");
const db = require("../database.js")

module.exports = {
    description: 'Crie um cargo através de um comando.',
    categoria: 'Moderação',
    task(client, message, suffix) {
        
         db.Bloqueio.findOne({
                "_id": message.author.id
            }, function (erro, documento) {
                if(documento) {
         if (!['244489368717230090'].includes(message.author.id))
                
 if ([documento.block].includes(message.author.id)) 
 return message.reply(`<:xguardian:476061993368027148> Você foi bloqueado de usar comandos do **Sysop**, se você acha que isso é um engano nos contate!`);
        
}

if (!message.member.hasPermission('ADMINISTRATOR'))
return message.channel.send(":x: Você não tem permissão para utilizar este comando!");

  var rpts = ['https://cdn.dribbble.com/users/473527/screenshots/3443226/success.gif'];
  var link = rpts[Math.floor(Math.random() * rpts.length)];

if(!suffix) return message.channel.send('Nomeie o cargo a ser criado.');


message.guild.createRole({name: suffix, permissions: 104139840, color: '#03edff'});

  const embed = new Discord.RichEmbed() 

          .setTitle(`Cargo criado no servidor.`)
          .setThumbnail(link)
          .setDescription(`:pencil: Cargo ${suffix} criado com sucesso!`)
          .setColor('#03edff');

          message.channel.send({embed});
  
});
}};
