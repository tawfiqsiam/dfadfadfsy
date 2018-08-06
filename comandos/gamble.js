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
                  
                  if(message.content.startsWith("sy!gamble branca")) {
                      
                      if(documento.rubys >= 10000) {
                          documento.rubys -= 10000
                          documento.fbranca += 1
                          documento.save();
                          message.reply("**Uma ficha branca foi comprada.**");
                      } else {
                          message.reply("**Rubys insuficientes.** <:rubys:430493599633899532>");
                      }
                      
                  }
                  
                  if(message.content.startsWith("sy!gamble laranja")) {
                      
                      if(documento.coins >= 40000) {
                          documento.coins -= 40000
                          documento.flaranja += 1
                          documento.save();
                          message.reply("**Uma ficha laranja foi comprada.**");
                      } else {
                          message.reply("**Coins insuficientes.** <:coins:430242868813103105>");
                      }
                      
                  }
                  
                  if(message.content.startsWith("sy!gamble vermelha")) {
                      
                      if(documento.rubys >= 100000) {
                          documento.rubys -= 100000
                          documento.fvermelha += 1
                          documento.save();
                          message.reply("**Uma ficha vermelha foi comprada.**");
                      } else {
                          message.reply("**Rubys insuficientes.** <:rubys:430493599633899532>");
                      }
                      
                  }     
                  
                  if(message.content.startsWith("sy!gamble preta")) {
                      
                      if(documento.emerald >= 15000) {
                          documento.emerald -= 15000
                          documento.fpreta += 1
                          documento.save();
                          message.reply("**Uma ficha preta foi comprada.**");
                      } else {
                          message.reply("**Esmeraldas insuficientes.** <:esmeralda:436313141446443029>");
                      }
                      
                  }     

              } else {
                 const embed = new Discord.RichEmbed()
                       embed.setThumbnail('https://st2.depositphotos.com/1206312/11335/v/950/depositphotos_113350916-stock-illustration-casino-logo-on-a-white.jpg')
                       embed.setAuthor('SysopCorp Casino Shopping Client: ' + message.author.username, message.author.avatarURL)
                       embed.addField(`Fichas Brancas`, ` Fichas brancas tem como menor e maior número de prêmios: 5/100 containers.\n**Preço:** \`\`10.000\`\` rubys <:rubys:430493599633899532>`, true)
                       embed.addField(`Fichas Laranjas`, ` Fichas laranhas tem como menor e maior número de prêmios: 5/100 goldboxs.\n**Preço:** \`\`40.000\`\` coins <:coins:430242868813103105>`, true)
                       embed.addField(`Fichas Vermelhas`, ` Fichas vermelhas tem como menor e maior número de ganho 5 á 15 mil coins.\n**Preço** \`\`100.000\`\` rubys <:rubys:430493599633899532>`, true)
                       embed.addField('Fichas Pretas', 'Fichas pretas tem menor e maior número de ganho 15 á 25 mil rubys.\n**Preço:** \`\`15.000\`\` esmeraldas <:esmeralda:436313141446443029>', true)
                       embed.setFooter('Rubys Disponíveis  ' + Number(documento.rubys).toLocaleString() + ' ------- ' + '  Coins Disponíveis  ' + Number(documento.coins).toLocaleString())
                       .setColor(0x07121b);
   
    message.channel.send({embed});
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
