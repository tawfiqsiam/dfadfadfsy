const Discord = require('discord.js');

exports.run = (client, message, args) => {

  let database = require('../database.js');
  database.Bloqueio.findOne({
                "_id": message.author.id
            }, function (erro, documento) {
                if(documento) {
         if (!['244489368717230090'].includes(message.author.id))
                
 if ([documento.block].includes(message.author.id)) return message.reply("<:FalseSysop3:462306755150479372> Você foi bloqueado de usar comandos do **SysopCorp**, se você acha que isso é um engano nos contate! `! Till#8514 | Natsu#7777`");
        
}
  
  /*const ID = "412169234492293130";
  let users = client.guilds.get(ID).members.get(message.author.id);
  if (!users) 
  return message.reply("Você não está no servidor oficial do SysopCorp");
  let role = client.guilds.get(ID).members.get(message.author.id).roles.find("id", "467669532916449290")
  if(!role)
  return message.channel.send('Você não é um parceiro! <:DiscordPartner:467546781538975754> Mais infos de como virar parceiro digite: sy!partners.');
   */
    
  let oi = message.mentions.users.first() ? message.mentions.users.first().id : message.author.id ; 
  let img = message.mentions.users.first() ? message.mentions.users.first().username : message.author.username;
  let imagemm = message.mentions.users.first() ? message.mentions.users.first().avatarURL : message.author.avatarURL
  
  message.guild.fetchInvites().then(invs => {
    let member = client.guilds.get(message.guild.id).members.get(oi);
    let personalInvites = invs.filter(i => i.inviter.id === oi);
    let urll = invs.filter(i => i.inviter.id === oi);
    let link = urll.reduce((p , v) => v.url +` , Total de membros recrutados no convite: ${v.uses}.\n`+ p, `\nServidor: ${message.guild.name} \n `);
    
    let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
   
let possibleInvites = [['Total de membros recrutados:']];
possibleInvites.push([inviteCount]);

const embed = new Discord.RichEmbed()
.setAuthor(img)
.addField('🏆 Total de usos de convite',  `Você convidou um total de \`\`${Number(inviteCount)}\`\` membros. `,true)
.setThumbnail(imagemm)
.setColor(0x4959e9);


message.channel.send({ embed });

});
  })
};
