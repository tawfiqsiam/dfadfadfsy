const Discord = require('discord.js');

module.exports = {
    description: 'Mostro o convite para o meu servidor',
    categoria: 'Social',
     cooldown: 30,
    task(client, message, suffix) {
	    
let database = require("../database.js");  
database.Bloqueio.findOne({
                "_id": message.author.id
            }, function (erro, documento) {
                if(documento) {
         if (!['244489368717230090','282504900552949760'].includes(message.author.id))
                
 if ([documento.block].includes(message.author.id)) return message.reply("<:FalseSysop3:462306755150479372> Você foi bloqueado de usar comandos do **SysopCorp**, se você acha que isso é um engano nos contate! `! Till#8514 | Natsu#7777`");
        
}
        
        const embed = new Discord.RichEmbed()
        .addField('Servidor Reth & Sysop', 'https://discord.gg/6HwTNBT')
        .addField('Convidar Sysop pro servidor', '[Convidar](https://discordapp.com/oauth2/authorize?client_id=412593783696261121&permissions=8&scope=bot)')
        .setColor(0x4959e9);
    
		message.channel.send({embed});
        
        
         message.delete(1000); 
	})
    }
};
