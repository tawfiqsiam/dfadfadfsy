const Discord = require('discord.js');
let database = require("../database.js");

module.exports = {
    task(client, message, args) {
        
database.Bloqueio.findOne({
                "_id": message.author.id
            }, function (erro, documento) {
                if(documento) {
         if (!['244489368717230090'].includes(message.author.id))
                
 if ([documento.block].includes(message.author.id)) return message.channel.send(`<:xguardian:476061993368027148> | ${message.author}! Você foi bloqueado de usar comandos do **Sysop**, se você acha que isso é um engano nos contate! `);
        
}
        
    let meuovo = args[0];  

    if(!meuovo) return message.reply("Forneça números do 1 ao 5 para selfrole")

    database.Guilds.findOne({"_id": message.guild.id }, function(erro, documento) { if (documento) {   
    if (!documento) return;  

            if (message.content.startsWith("sy!join-role info")) {
                const embed = new Discord.RichEmbed()
                .addField("Cargo 1:",`<@&${documento.rol1}>`)
                .addField("Cargo 2:",`<@&${documento.rol2}>`)
                .addField("Cargo 3:",`<@&${documento.rol3}>`)
                .addField("Cargo 4:",`<@&${documento.rol4}>`)
                .addField("Cargo 5:",`<@&${documento.rol5}>`)
                .setColor(0x4959e9)
                .setTimestamp()  
                .setFooter(`${message.guild.name} - ` , message.guild.iconURL )
    
              message.channel.send(embed);
        }else if (message.content.startsWith("sy!join-role 1")) {

            var oi1 = message.guild.roles.find("id", documento.rol1)        // variaveis
            if (oi1 == null) return message.channel.send("selfrole 1 não foi definida")
         message.guild.members.get(message.author.id).addRole(message.member.guild.roles.find("id", documento.rol1))
         message.reply(`Cargo <@&${documento.rol1}> foi adicionado para você.`);
         
        }else if (message.content.startsWith("sy!join-role 2")) {

            var oi2 = message.guild.roles.find("id", documento.rol2)        // variaveis
            if (oi2 == null) return message.channel.send("selfrole 2 não foi definida")
         message.guild.members.get(message.author.id).addRole(message.member.guild.roles.find("id", documento.rol2))
         message.reply(`Cargo <@&${documento.rol2}> foi adicionado para você.`);
         
        }else if(message.content.startsWith("sy!join-role 3")) {

            var oi3 = message.guild.roles.find("id", documento.rol3)        // variaveis
            if (oi3 == null) return message.channel.send("selfrole 3 não foi definida")
         message.guild.members.get(message.author.id).addRole(message.member.guild.roles.find("id", documento.rol3))
         message.reply(`Cargo <@&${documento.rol3}> foi adicionado para você.`);
         
        }else if (message.content.startsWith("sy!join-role 4")) {

            var oi4 = message.guild.roles.find("id", documento.rol4)        // variaveis
            if (oi4 == null) return message.channel.send("selfrole 4 não foi definida")
         message.guild.members.get(message.author.id).addRole(message.member.guild.roles.find("id", documento.rol4))
         message.reply(`Cargo <@&${documento.rol4}> foi adicionado para você.`);
         
        }else if (message.content.startsWith("sy!join-role 5")) {

            var oi5 = message.guild.roles.find("id", documento.rol1)        // variaveis
            if (oi5 == null) return message.channel.send("selfrole 5 não foi definida")
         message.guild.members.get(message.author.id).addRole(message.member.guild.roles.find("id", documento.rol5))
         message.reply(`Cargo <@&${documento.rol5}> foi adicionado para você.`);
         
        }

    }
})  
    })
}}
