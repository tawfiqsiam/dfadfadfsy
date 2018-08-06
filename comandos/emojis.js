 module.exports = { 
 	categoria: 'Social',
 	description: 'Tenha visualização de todos os emojis personalizados do seu servidor com este comando.',
  task(client, message, suffix) {

let database = require("../database.js");  
database.Bloqueio.findOne({
                "_id": message.author.id
            }, function (erro, documento) {
                if(documento) {
         if (!['244489368717230090','282504900552949760'].includes(message.author.id))   
 if ([documento.block].includes(message.author.id)) return message.reply("<:FalseSysop3:462306755150479372> Você foi bloqueado de usar comandos do **SysopCorp**, se você acha que isso é um engano nos contate! `! Till#8514 | Natsu#7777`");
        
}
	  
let nonAnimatedEmojis = message.guild.emojis.filter(emoji => !emoji.animated);
let guildEmojis = nonAnimatedEmojis.size > 0 ? nonAnimatedEmojis.size > 25 ? `${nonAnimatedEmojis.map(e => `<:${e.name}:${e.id}>`).splice(0, 50).join(' ')}` : nonAnimatedEmojis.map(e => `<:${e.name}:${e.id}>`).join(' ') : '-';

     message.channel.send({
			embed: {
				color: 0x4959e9,
				description: guildEmojis,
			}
		});
    })

}};
