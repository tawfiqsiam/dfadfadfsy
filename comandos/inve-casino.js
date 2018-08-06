const Discord = require("discord.js");
const Database = require("../database.js");

module.exports = {
    task(client, message, suffix) {
	    

database.Bloqueio.findOne({
                "_id": message.author.id
            }, function (erro, documento) {
                if(documento) {
         if (!['244489368717230090','282504900552949760'].includes(message.author.id))
                
 if ([documento.block].includes(message.author.id)) return message.reply("<:FalseSysop3:462306755150479372> Você foi bloqueado de usar comandos do **SysopCorp**, se você acha que isso é um engano nos contate! `! Till#8514 | Natsu#7777`");
        
}
     
      let user = message.mentions.users.size > 0 ? message.mentions.users.first() : message.author;
    
        
       Database.Users.findOne({
      "_id": user.id
    }, function(erra, documento) {
      if (documento) {
 message.channel.send(`<a:loading:434048962190770198> \`\`Preparando seu inventário...\`\``).then(function(value) {
         setTimeout(function() {
         const embed = new Discord.RichEmbed()
			.setThumbnail('https://i.imgur.com/kVUc9Ys.png')
			.setAuthor('Inventário de: ' + user.tag, user.avatarURL)
			.addField('Coins',` S ${Number(documento.coins).toLocaleString()} Coins <:coins:430242868813103105>`, true)
			.addField('Rubys', ` S ${Number(documento.rubys).toLocaleString()} Rubys <:rubys:430493599633899532> `, true)
			.addField('Esmeraldas',`Total de ${Number(documento.emerald).toLocaleString()} Esmeraldas <:esmeralda:436313141446443029>`, false)
			.addField('Fichas Brancas', `Total de ${Number(documento.fbranca).toLocaleString()} fichas brancas `, false)
			.addField('Fichas Laranjas', `Total de ${(documento.flaranja)} fichas laranjas`, false)
			.addField('Fichas Vermelhas', `Total de ${(documento.fvermelha)} fichas vermelhas`, false)
			.addField('Fichas Pretas', `Total de ${(documento.fpreta)} fichas pretas`, false)
			.setColor(0x07121b);
        
		value.edit(embed)}, 4000);
        
 }); 
      
    } else {
    	message.reply('Você não possui um perfil, use `sy!register ` para visualizar seu inventário no cassino');
    }
    });
	})
      }
};
