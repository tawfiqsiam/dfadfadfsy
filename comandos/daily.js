 let ms = require("parse-ms");  
        let database = require("../database.js")
        var dayCol = []
        const Discord = require("discord.js");
        const db = require('quick.db');
 
 module.exports = { task(client, message, suffix) {
            
database.Bloqueio.findOne({
                "_id": message.author.id
            }, function (erro, documento) {
                if(documento) {
         if (!['244489368717230090','282504900552949760'].includes(message.author.id))
                
 if ([documento.block].includes(message.author.id)) return message.reply("<:FalseSysop3:462306755150479372> Você foi bloqueado de usar comandos do **Sysop**, se você acha que isso é um engano nos contate!");
        
}
   
  if (!['244489368717230090'].includes(message.author.id)) return message.reply('desculpe o transtorno, este comando encontra-se em manutenção, tente novamente mais tarde.');
        
 database.Users.findOne({
            "_id": message.author.id
        }, function(erro, documento) {
            
            if (!documento) {
                var pessoa = new database.Users({
                        _id: message.author.id,
                        name: message.author.username, 
                        discrim: "#" + message.author.discriminator,
                        bio: "Sobre você",
                        marry: "None",
                        nexDay: 0,
                        temprep: 0,                       
                      
                    })
                    pessoa.save()
                     message.reply("Registro realizado com sucesso! Utilize o comando novamente!")
                
            } else {
 

       if(!dayCol.includes(message.author.id)) {
            
            var prc = Math.round(Math.random() * 80);

        database.Users.findOne({
            "_id": message.author.id
        }, function (erro, documento) {
            if(documento) {
                
const moment = require('moment');
require("moment-duration-format");
moment.locale('pt-BR');             
                 
 var tempo = moment.duration.format([moment.duration((parseInt(documento.nexDay) + 86400000) - Date.now())], "hh:mm:ss");
                 
       if ((parseInt(documento.nexDay) + 86400000) <= (Date.now())) {       
                var premio;
                var quantidade;
                
                if (prc <= 20) {
                    premio = `containers <:container:430855297200947230>`;
                    quantidade = 5;
                    var dayRDM = Math.round(Math.random() * parseInt(quantidade) + 1)
                    documento.containers += dayRDM
                    documento.nexDay = Date.now();
                    documento.save()
                } else  if (prc <= 40) {
                    premio = `rubys <:rubys:430493599633899532>`;
                    quantidade = 500 + 2000;
                    var dayRDM = Math.round(Math.random() * parseInt(quantidade) + 1)
                    documento.rubys += dayRDM
                    documento.nexDay = Date.now();
                    documento.save()
                } else if (prc <= 80) {
                    premio = `Sycoins <:Sycoins:469789351358889984>`;
                    quantidade = 500 + 3000;
                    var dayRDM = Math.round(Math.random() * parseInt(quantidade) + 1)
                    documento.coins += dayRDM
                    documento.nexDay = Date.now();
                    documento.save()
            } else if (prc <= 40) {
                    premio = `goldboxs <:New_goldenbox_10:458877483182194698>`;
                    quantidade = 5 + 15;
                    var dayRDM = Math.round(Math.random() * parseInt(quantidade) + 1)
                    documento.goldbox += dayRDM
                    documento.nexDay = Date.now();
                    documento.save()
            } else if (prc <= 40) {
                    premio = `XP's <:New_goldenbox_10:458877483182194698>`;
                    var dayRDM = Math.round(Math.random() * parseInt(quantidade) + 1)
                    documento.xp += dayRDM
                    documento.nexDay = Date.now();
                    documento.save()
            } else if (prc <= 60) {
                    premio = `lootbox <:ContainerEmoji:436348542576230411>`;
                    quantidade = 1 + 3;
                    var dayRDM = Math.round(Math.random() * parseInt(quantidade) + 1)
                    documento.lootbox += dayRDM
                    documento.nexDay = Date.now();
                    documento.save()
            } else if (prc <= 40) {
                    premio = `esmeraldas <a:esmeral:442718169585680387>`;
                    quantidade = 30;
                    var dayRDM = Math.round(Math.random() * parseInt(quantidade) + 1)
                    documento.emerald += dayRDM
                    documento.nexDay = Date.now();
                    documento.save()
                }
                
                message.channel.send(`<a:Coin:435849790610472960> Calculando prêmio...`).then(function(value) {
  
  
                       setTimeout(function() {
                       const embed = new Discord.RichEmbed()
                       embed.setThumbnail('https://cdn.discordapp.com/attachments/442346665052209153/469407730797641738/SysopLogoLight.png')
                       embed.setAuthor(message.author.username, message.author.avatarURL)
                       embed.addField(`**Bônus Diário!**`,` <a:festa:461509706763206657> Você ganhou: **${dayRDM} ${premio}** .`, false)
                       .setColor(0x0df7eb);
   
    value.edit(embed)}, 3000)
  
 
}) } else {

message.channel.send(`<a:pblob:442467218282774548> Opa ${message.author}! Colete seu bônus diário novamente em \`${tempo}\``)
}

            } else {

                let pessoa = new database.Users({
                    _id: message.author.id,
                    level: 0,
                    xp: 0,
                    coins: 0,
                    rubys: 0,
                    containers: 0,
                    nextDay: 0,
                    temprep: 0,
                    })

                pessoa.save()

            }

            
        }).catch(e => console.log(e));
   
                }
            }
   
})
})
        }
        
};

