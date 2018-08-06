const Discord = require("discord.js");

module.exports = {
    description: 'Crie um cargo através de um comando.',
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
        
if (!message.member.hasPermission('ADMINISTRATOR'))
return message.channel.send(":x: Você não tem permissão para utilizar este comando!");

  var rpts = ['https://cdn.dribbble.com/users/473527/screenshots/3443226/success.gif'];
  var link = rpts[Math.floor(Math.random() * rpts.length)];

  var color = ["0x763ebb", "0xdd9220", "0x18e437","0x0b62f2", "0xfd0006","0xfb02cf","0xf06d0d"];
  var dime = color[Math.floor(Math.random() * color.length)];

if(!suffix) return message.channel.send('Nomeie o cargo a ser criado.');

message.guild.createRole({
      name: suffix,
      color: dime
}).then(role=>{

  const embed = new Discord.RichEmbed() 

          .setTitle(":gear: Novo Cargo criado!")
          .setThumbnail(link)
          .setDescription(`:pencil: Cargo ${role} criado com sucesso!`)
          .setColor(0x4959e9);

          message.channel.send({embed});
  
}); 
})
}};
