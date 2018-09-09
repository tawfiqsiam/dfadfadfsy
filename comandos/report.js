
 const Discord = require("discord.js");
 const errors = require("../utils/errors.js");
module.exports = {
    categoria: "Moderação",
    description: "Reporte um usuário para algum Administrador! É necessário ter um canal chamado `reports`. Mais infos em **sy!report help**",
      task(client, message, suffix) {       
 message.delete();
 
let database = require("../database.js");  
database.Bloqueio.findOne({
                "_id": message.author.id
            }, function (erro, documento) {
                if(documento) {
         if (!['244489368717230090'].includes(message.author.id))
                
 if ([documento.block].includes(message.author.id)) return message.channel.send(`<:xguardian:476061993368027148> | ${message.author}! Você foi bloqueado de usar comandos do **Sysop**, se você acha que isso é um engano nos contate! `);
        
}
       
 suffix = suffix.split(' '); 
 if(suffix[0] == "help"){
      message.reply('**Use:** `sy!report` +  `<user>` +  `<reason>`');
      return;
    }

    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(suffix[1]));
    if(!rUser) return message.channel.send("Não foi possível encontrar o usuário!");
    

    
    let rreason = suffix.join(" ").slice(22);
    if(!rreason) return errors.noReason(message.channel);
    
    let reportEmbed = new Discord.RichEmbed()
    .setDescription("Reports")
    .setColor("0x4959e9")
    .addField("Usuário Reportado:", `${rUser} com ID: ${rUser.id}`)
    .addField("Reportado Por:", `${message.author} com ID: ${message.author.id}`)
    .addField("Canal", message.channel)
    .addField("Tempo", message.createdAt)
    .addField("Razão", rreason);
    let reportschannel = message.guild.channels.find(`name`, "reports");
    if(!reportschannel) return message.channel.send("Não foi possível encontrar o canal de REPORT's.");


    message.delete().catch(O_o=>{});
    message.channel.send(`${rUser} foi reportado!`);
    reportschannel.send(reportEmbed);
      })
}

      
    };
