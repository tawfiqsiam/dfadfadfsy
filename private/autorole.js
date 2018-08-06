const database = require("../database.js");
const Discord = require("discord.js");

exports.run= (client, message, args) => {
         message.delete(1000); 
      
database.Bloqueio.findOne({
                "_id": message.author.id
            }, function (erro, documento) {
                if(documento) {
         if (!['244489368717230090','282504900552949760'].includes(message.author.id))
                
 if ([documento.block].includes(message.author.id)) return message.reply("<:FalseSysop3:462306755150479372> Você foi bloqueado de usar comandos do **SysopCorp**, se você acha que isso é um engano nos contate! `! Till#8514 | Natsu#7777`");
        
}
	
    const ownerID = "244489368717230090"
    if(message.author.id !== ownerID)
    if (!message.member.hasPermission(["ADMINISTRATOR", "MANAGE_ROLE"])) 
     return message.reply("<:FalseSysop3:462306755150479372> Você precisar ter função Administrador ou de Gerenciamento de cargos para usar este comando.");
    
    if (message.mentions.roles.size <1) 
    return message.channel.send({
			embed: {
				color: 0x0df7eb,
				description:`[**Mencione o cargo a definir**](https://discordapp.com)\nVocê deve especificar o cargo para a autorole. Use \`sy!autorole\` @rolemention. Use sy!config para verificar se o cargo foi definido corretamente.`,
			}
		});

    database.Guilds.findOne({"_id":message.guild.id},function(erro,docu){

    if (docu) {
 
        docu.autorole = message.mentions.roles.first().id
        message.channel.send({embed: { color: 0x4959e9, description: `Cargo <@&${docu.autorole}> definido como autorole neste servidor.`,}});
        docu.save();
    } else {
        var server = new database.Guilds({
            _id: message.guild.id,
             autorole: '',
          
        })
        server.save()
        message.reply(":file_cabinet: Por favor, use o comando novamente.")
    }
    })
})
};
