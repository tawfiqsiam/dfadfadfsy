const Discord = require('discord.js');
let database = require("../database.js");

module.exports = {
    task(client, message, suffix) {
      
database.Bloqueio.findOne({
                "_id": message.author.id
            }, function (erro, documento) {
                if(documento) {
         if (!['244489368717230090','282504900552949760'].includes(message.author.id))
                
 if ([documento.block].includes(message.author.id)) return message.reply("<:FalseSysop3:462306755150479372> Você foi bloqueado de usar comandos do **SysopCorp**, se você acha que isso é um engano nos contate! `! Till#8514 | Natsu#7777`");
        
}
        
        suffix = suffix.split(' '); 
        let razaou = suffix[0];

        database.Users.findOne({
            "_id": message.author.id
        }, function (erro, documento) {
            if(documento) {
              
              if(!razaou.length < 1) {
                  
                  var quantidade;
                  var venper = Math.round(Math.random() * 100);

                if(message.content.startsWith("sy!casino branca")) {
                    if(documento.fbranca > 0){
                        if (venper <= 50) {
                        var prc = Math.round(Math.random() * 95 + 5);
                        quantidade = prc
                        documento.fbranca -= 1
                        documento.containers += quantidade
                        documento.save()
                        message.reply(`**Você usou sua ficha e ganhou ${quantidade} containers.**`);
                        } else {
                            var prc = Math.round(Math.random() * 95 + 5);
                            venper = Math.round(Math.random() * 100);
                            quantidade = prc
                            documento.containers -= quantidade
                            documento.fbranca -= 1
                            documento.save();
                            message.reply(`**Você usou sua ficha e perdeu ${quantidade} containers.**`);
                        }
                    } else {
                        message.reply("**Você não possui fichas brancas.**");
                    }
                }
                
                if(message.content.startsWith("sy!casino laranja")) {
                    if(documento.flaranja > 0){
                        if (venper <= 50) {
                        var prc = Math.round(Math.random() * 95 + 5);
                        quantidade = prc
                        documento.flaranja -= 1
                        documento.goldbox += quantidade
                        documento.save()
                        message.reply(`**Você usou sua ficha e ganhou ${quantidade} goldbox.**`);
                        } else {
                            var prc = Math.round(Math.random() * 95 + 5);
                            venper = Math.round(Math.random() * 100);
                            quantidade = prc
                            documento.goldbox -= quantidade
                            documento.flaranja -= 1
                            documento.save();
                            message.reply(`**Você usou sua ficha e perdeu ${quantidade} goldbox.**`);
                        }
                    } else {
                        message.reply("**Você não possui fichas laranjas**");
                    }
                }
                
                if(message.content.startsWith("sy!casino vermelha")) {
                    if(documento.fvermelha > 0){
                        if (venper <= 50) {
                        var prc = Math.round(Math.random() * 10000 + 5000);
                        quantidade = prc
                        documento.fvermelha -= 1
                        documento.coins += quantidade
                        documento.save()
                        message.reply(`**Você usou sua ficha e ganhou ${quantidade} coins.**`);
                        } else {
                            var prc = Math.round(Math.random() * 10000 + 5000);
                            venper = Math.round(Math.random() * 100);
                            quantidade = prc
                            documento.coins -= quantidade
                            documento.fvermelha -= 1
                            documento.save();
                            message.reply(`**Você usou sua ficha e perdeu ${quantidade} coins.**`);
                        }
                    } else {
                        message.reply("**Você não possui fichas vermelhas.**");
                    }
                }
                
                if(message.content.startsWith("sy!casino preta")) {
                    if(documento.fpreta > 0){
                        if (venper <= 50) {
                        var prc = Math.round(Math.random() * 10000 + 15000);
                        quantidade = prc
                        documento.fpreta -= 1
                        documento.rubys += quantidade
                        documento.save()
                        message.reply(`**Você usou sua ficha e ganhou ${quantidade} rubys.**`);
                        } else {
                            var prc = Math.round(Math.random() * 10000 + 15000);
                            venper = Math.round(Math.random() * 100);
                            quantidade = prc
                            documento.rubys -= quantidade
                            documento.fpreta -= 1
                            documento.save();
                            message.reply(`**Você usou sua ficha e perdeu ${quantidade} rubys.**`);
                        }
                    } else {
                        message.reply("**Você não possui fichas pretas.**");
                    }
                }

              } else {
                  message.reply("**Diga que ficha deseja usar.**");
              }
  
            } else {
                let pessoa = new database.Users({
                    _id: message.author.id,
                    level: 0,
                    xp: 0,
                    coins: 0,
                    rubys: 0,
                    emerald: 0,
                    containers: 0,
                    rarebox: 0,
                    cupcake: 0,
                    goldbox: 0,
                    fbranca: 0,
                    flaranja: 0,
                    fvermelha: 0,
                    fpreta: 0
                })

                pessoa.save()
            
            }
            
        })
  })
    }
};
