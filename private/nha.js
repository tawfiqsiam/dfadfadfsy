const Discord = require('discord.js'),
arraySort = require('array-sort');

exports.run = (client, message, args) => {

  let database = require('../database.js');
 /*database.Bloqueio.findOne({
                "_id": message.author.id
            }, function (erro, documento) {
                if(documento) {
         if (!['244489368717230090','282504900552949760'].includes(message.author.id))
                
 if ([documento.block].includes(message.author.id)) return message.reply("<:FalseSysop3:462306755150479372> Você foi bloqueado de usar comandos do **SysopCorp**, se você acha que isso é um engano nos contate! `! Till#8514 | Natsu#7777`");
        
}*/
  
  let oi = message.mentions.users.first() ? message.mentions.users.first().id : message.author.id ; 
  let img = message.mentions.users.first() ? message.mentions.users.first().username : message.author.username;
  let imagemm = message.mentions.users.first() ? message.mentions.users.first().avatarURL : message.author.avatarURL
  
  message.guild.fetchInvites().then(invs => {
    let member = client.guilds.get(message.guild.id).members.get(oi);
    let personalInvites = invs.filter(i => i.inviter.id === oi);
    let urll = invs.filter(i => i.inviter.id === oi);
    let link = urll.reduce((p , v) => v.url +` , Total de membros recrutados no convite: ${v.uses}.\n`+ p, `\nServidor: ${message.guild.name} \n `);
    
    let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
   let exec = personalInvites.reduce((p, v) => v.inviter);
 
 let possibleInvites = [['Total de membros recrutados:']];
possibleInvites.push([inviteCount, exec]);

        let user = message.mentions.users.first() || message.author;
    	let mem = message.guild.member(user);
        let millisJoined = new Date().getTime() - mem.joinedAt.getTime();
        let daysJoined = millisJoined / 1000 / 60 / 60 / 24;

 

const embed = new Discord.RichEmbed()
.setAuthor(img)
.addField('🏆 Invite Infos',  `\n\n► Você convidou um total de \`\`${Number(inviteCount)}\`\` membros.\n\n► Você está á \`${daysJoined.toFixed(0)}\` dia (s) no servidor.\n\n► Você entrou por este convite \`${exec}\``,true)
.setThumbnail(imagemm)
.setColor(0x4959e9);


message.channel.send({ embed });

});

};
