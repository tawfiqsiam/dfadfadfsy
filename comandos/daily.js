      let ms = require("parse-ms");  
        let database = require("../database.js")
        var dayCol = []
        const Discord = require("discord.js");
        const db = require('quick.db');
 
 module.exports = {
    categoria: 'Economia',
    description: 'Receba seu bônus diário!',
    task(client, message, suffix) {
            
database.Bloqueio.findOne({
                "_id": message.author.id
            }, function (erro, documento) {
                if(documento) {
         if (!['244489368717230090','282504900552949760'].includes(message.author.id))
                
 if ([documento.block].includes(message.author.id)) return message.reply("<:FalseSysop3:462306755150479372> Você foi bloqueado de usar comandos do **SysopCorp**, se você acha que isso é um engano nos contate! `! Till#8514 | Natsu#7777`");
        
}
   
  /*if (!['244489368717230090'].includes(message.author.id)) return message.channel.send('Comando em manutenção!');*/
        
       if(!dayCol.includes(message.author.id)) {
            
            var prc = Math.round(Math.random() * 80);

        database.Users.findOne({
            "_id": message.author.id
        }, function (erro, documento) {
            if(documento) {
                 
              
                var premio;
                var quantidade;
                
                if (prc <= 20) {
                    premio = `containers <:container:430855297200947230>`;
                    quantidade = 5;
                    var dayRDM = Math.round(Math.random() * parseInt(quantidade) + 1)
                    documento.containers += dayRDM
                    documento.save()
                } else  if (prc <= 40) {
                    premio = `rubys <:rubys:430493599633899532>`;
                    quantidade = 500 + 2000;
                    var dayRDM = Math.round(Math.random() * parseInt(quantidade) + 1)
                    documento.rubys += dayRDM
                    documento.save()
                } else if (prc <= 80) {
                    premio = `coins <:Sycoins:469789351358889984>`;
                    quantidade = 500 + 3000;
                    var dayRDM = Math.round(Math.random() * parseInt(quantidade) + 1)
                    documento.coins += dayRDM
                    documento.save()
            } else if (prc <= 40) {
                    premio = `goldboxs <:New_goldenbox_10:458877483182194698>;
                    quantidade = 5 + 15;
                    var dayRDM = Math.round(Math.random() * parseInt(quantidade) + 1)
                    documento.goldbox += dayRDM
                    documento.save()
            } else if (prc <= 40) {
                    premio = `XP's <:New_goldenbox_10:458877483182194698>`;
                    quantidade = 5 + 2000;
                    var dayRDM = Math.round(Math.random() * parseInt(quantidade) + 1)
                    documento.xp += dayRDM
                    documento.save()
            } else if (prc <= 60) {
                    premio = `lootbox <:ContainerEmoji:436348542576230411>`;
                    quantidade = 1 + 3;
                    var dayRDM = Math.round(Math.random() * parseInt(quantidade) + 1)
                    documento.lootbox += dayRDM
                    documento.save()
                } else if (prc <= 20) {
                    premio = `esmeraldas <a:esmeral:442718169585680387>`;
                    quantidade = 10;
                    var dayRDM = Math.round(Math.random() * parseInt(quantidade) + 1)
                    documento.emerald += dayRDM
                    documento.save()
                }
                
                message.channel.send(`<a:Coin:435849790610472960> Calculando prêmio...`).then(function(value) {
  
  
                       setTimeout(function() {
                       const embed = new Discord.RichEmbed()
                       embed.setThumbnail('https://cdn.discordapp.com/attachments/442346665052209153/469407730797641738/SysopLogoLight.png')
                       embed.setAuthor(message.author.username, message.author.avatarURL)
                       embed.addField(`**Bônus Diário!**`,` <a:festa:461509706763206657> Você ganhou: **${dayRDM} ${premio}** .`, false)
                       .setColor('#36393E');
   
    value.edit(embed)}, 3000)
  
 
})


              dayCol.push(message.author.id)
              setTimeout(function () {
                    for(var i = 0; i < dayCol.length; i++) {
                        if(dayCol[i] === message.author.id) {
                            dayCol.splice(i, 1);
                        }
                    }
                }, 5 * 1000 * 60 * 60);

            } else {

                let pessoa = new database.Users({
                    _id: message.author.id,
                    level: 0,
                    xp: 0,
                    coins: 0,
                    rubys: 0,
                    containers: 0,
                    nextDay: 0,
                    })

                pessoa.save()

            }

            
        }).catch(e => console.log(e));
        
   } else {
       message.channel.send(`<:sysalerta:471836304938631168> Woww ${message.author}, você já coletou seu bônus diário! Volte novamente em 5 horas. `);
    }
})
        }
        
};
