const database = require("../database.js");
const Discord = require("discord.js");

exports.run= (client, message, args) => {
         message.delete(1000); 
      
database.Bloqueio.findOne({
                "_id": message.author.id
            }, function (erro, documento) {
                if(documento) {
         if (!['244489368717230090','282504900552949760'].includes(message.author.id))
                
 if ([documento.block].includes(message.author.id)) return message.reply("<:FalseSysop3:462306755150479372> Você foi bloqueado de usar comandos do **SysopCorp**, se você acha que isso é um engano nos contate! `! Capitão Marvel#5425 | Natsu#7777`");
        
}
	
    const ownerID = "244489368717230090"
    if(message.author.id !== ownerID)
    if (!message.member.hasPermission(["ADMINISTRATOR", "MANAGE_ROLE"])) 
     return message.reply("<:FalseSysop3:462306755150479372> Você precisar ter função Administrador ou de Gerenciamento de cargos para usar este comando.");
    
    database.Guilds.findOne({"_id":message.guild.id},function(erro,docu){

    if (docu) {
 
        docu.autorole = '',
        message.channel.send('Autorole desabilitada');        
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
