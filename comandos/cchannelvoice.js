module.exports = {
	description: `Crie um canal de voz via comando, comando funciona apenas para membros que tenham função **MANAGE_CHANNELS**`,
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
	    
         if (!message.member.hasPermission('MANAGE_CHANNELS'))
    return message.channel.send(":x: Você não tem permissão para utilizar este comando!");
    
 	message.channel.guild.createChannel(suffix,"voice").then(function(channel) {
			message.channel.send("Criando canal de voz" + channel.id);
			console.log(" Criado canal de voz " + channel);
		}).catch(function(error){
			message.channel.send("erro ao criar um canal de voz " + error);
		});
	})
	}
};
