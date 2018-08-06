
module.exports = {
    categoria: 'Social',
    description: 'Mostro a thumbnail do servidor.',
    task(client, message, suffix) {
        
let database = require("../database.js");  
database.Bloqueio.findOne({
                "_id": message.author.id
            }, function (erro, documento) {
                if(documento) {
         if (!['244489368717230090','282504900552949760'].includes(message.author.id))
                
 if ([documento.block].includes(message.author.id)) return message.reply("<:FalseSysop3:462306755150479372> Você foi bloqueado de usar comandos do **SysopCorp**, se você acha que isso é um engano nos contate! `! Till#8514 | Natsu#7777`");
        
}
        
  message.delete(); 
    
    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed();
    embed.setImage(message.guild.iconURL+'?size=2048')
    embed.setColor(0x0df7eb);
    
    message.channel.send({embed});
    })
    }
};
