const database = require("../database.js");
const Discord = require("discord.js");

module.exports = {
    task(client, message, suffix) {
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
     return message.reply("<:FalseSysop3:462306755150479372> Você precisar de função Administrador ou Gerenciamento de cargos para usar este comando.");
    
    if (message.mentions.roles.size <1) return message.reply("Por favor, mencione o cargo a definir.");

    database.Guilds.findOne({"_id":message.guild.id},function(erro,docu){

    if (docu) {
 
        docu.staffanuncio = message.mentions.roles.first().id
        message.reply("Cargo definido com sucesso.");
        docu.save();
    } else {
        var server = new database.Guilds({
            _id: message.guild.id,
             staffanuncio: '',
          
        })
        server.save()
        message.reply("💥 Use o comando novamente")
    }
    })
         
});
}};
