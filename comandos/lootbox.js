const Discord = require('discord.js');
let database = require("../database.js");

module.exports = {
    categoria: 'Economia',
    description: 'Abra containers ganhos do bônus diário e se surpreeda com novidades!',
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

                var prc = Math.round(Math.random() * 70);

                if(!razaou.length < 1) {
                    if(message.content.startsWith("sy!lootbox open")) {
                        if(documento.lootbox > 0) {

                            var premio;
                            var quantidade;
                            
                                if(prc <= 30) {
                                premio = "Goldbox";
                                quantidade = 5 + 100;
                                var prem = Math.round(Math.random() * parseInt(quantidade) + 1);
                                documento.goldbox += prem
                                documento.lootbox -= 1
                                documento.save()
                            } else if(prc <= 40) {
                                premio = "coins <:coins:430242868813103105>";
                                quantidade = 1500 + 5000;
                                var prem = Math.round(Math.random() * parseInt(quantidade) + 1);
                                documento.coins += prem
                                documento.lootbox -= 1
                                documento.save()
                            } else if(prc <= 60) {
                                premio = "rubys <:rubys:430493599633899532>";
                                quantidade = 500 + 1000;
                                var prem = Math.round(Math.random() * parseInt(quantidade) + 1);
                                documento.rubys += prem
                                documento.lootbox -= 1
                                documento.save()
                            
                              } else if(prc <= 60) {
                                premio = "cupcakes <:cupcake:434443062094331924>";
                                quantidade = 10 + 30;
                                var prem = Math.round(Math.random() * parseInt(quantidade) + 1);
                                documento.cupcake+= prem
                                documento.lootbox -= 1
                                documento.save()
                        
                        } else if(prc <= 70) {
                                premio = "esmeraldas <:esmeralda:436313141446443029>";
                                quantidade = 3 + 8;
                                var prem = Math.round(Math.random() * parseInt(quantidade) + 1);
                                documento.emerald += prem
                                documento.lootbox -= 1
                                documento.save()
                            }
                            
  message.channel.send(`<a:loading:434048962190770198> Abrindo container mágico...`).then(function(value) {
  
  
                       setTimeout(function() {
                       const embed = new Discord.RichEmbed()
                       embed.setThumbnail('https://i.imgur.com/rkvXN51.png')
                       embed.setAuthor(message.author.username, message.author.avatarURL)
                       embed.addField(`**Aqui está seu prêmio:**`,` Total de ${prem} ${premio} **abrindo um container raro. Parabéns!**`, false)
                       .setColor(0x9123ba);
   
    value.edit(embed)}, 3000)
  
 
})
                        } else {
        message.reply('Você não possui containers raros!');
                        }
                    } else {
                        message.reply("**Use** `sy!lootbox open` **para abrir um container raro**.");
                    }
                } else {
		message.channel.send(`**Você possui um total de** \`\`${Number(documento.lootbox).toLocaleString()}\`\` **lootbox**`);
           } 
                
            } else {
                let pessoa = new database.Users({
                    _id: message.author.id,
                    level: 0,
                    xp: 0,
                    coins: 0,
                    rubys: 0,
                    containers: 0,
                    rarebox: 0,
                    cupcake: 0,
                    goldbox: 0,
                    emerald: 0,
                    lootbox: 0,
                })

                pessoa.save()
            
            }})
})
    }
};
