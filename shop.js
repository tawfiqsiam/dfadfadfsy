const Discord = require('discord.js');
let database = require("../database.js");

module.exports = {
    categoria: 'Economia',
    description: 'Loja Global do Bot, onde você compra alguns comandos premiums e divertidos!',
    task(client, message, suffix) {
     
        suffix = suffix.split(' '); 
        let razaou = suffix[0];
        
        database.Users.findOne({
            "_id": message.author.id
        }, function (erro, documento) {
            if(documento) {
                
                if (razaou === 'setbackground') {
                    if(Number(documento.rubys) >= 10000) {
                        documento.coins = Number(documento.rubys) - 10000
                        documento.background_shoped = "yes"
                        message.channel.send('<a:anirainbowblob:434952813177470986> Compra realizada com sucesso!')
                        documento.save()
                    } else {
                        message.channel.send('Você precisa de 10.000 rubys...')
                    }
                } else if(razaou === 'bio') {
                    if(Number(documento.coins) >= 2000) {
                        documento.coins = Number(documento.coins) - 2000
                        documento.bio_shoped = "yes"
                        message.channel.send('<a:anirainbowblob:434952813177470986> Compra realizada com sucesso!')
                        documento.save()
                    } else {
                        message.channel.send('Você precisa de 2.000 moedas...')
                    }
                    
                } else if(razaou === 'goldbox') {
                    if(Number(documento.rubys) >= 5900) {
                        documento.rubys = Number(documento.rubys) - 5900
                        documento.goldbox_shoped = "yes"
                        message.channel.send('<a:anirainbowblob:434952813177470986> Compra realizada com sucesso!')
                        documento.save()
                    } else {
                        message.channel.send('Você precisa de 5.900 rubys...')
                    }
                } else if(razaou === 'setborder') {
                    if(Number(documento.rubys) >= 15000) {
                        documento.rubys = Number(documento.rubys) - 15000
                        documento.border_shoped = "yes"
                        message.channel.send('<a:anirainbowblob:434952813177470986> Compra realizada com sucesso!')
                        documento.save()
                        
                    } else {
                        message.channel.send('Você precisa de 15.000 rubys...')
                    }
               
                } else {
  message.channel.send(`<a:loading:434048962190770198> Preparando a loja...`).then(function(value) {
  
  
                       setTimeout(function() {
                       const embed = new Discord.RichEmbed()
                       embed.setThumbnail('https://png.icons8.com/cotton/1600/online-shop.png')
                       embed.setAuthor('SysopCorp Shopping Cliente:' + message.author.username, message.author.avatarURL)
                       embed.addField(`Comando setbackground`, ` Com este comando é possível modificar seu background do perfil.\n**Preço:** \`\`10.000\`\` coins <:coins:430242868813103105>`, true)
                       embed.addField(`Comando bio`, ` Com este comando é possível alterar sua descrição no perfil.\n**Preço:** \`\`2.000\`\` coins <:coins:430242868813103105>`, true)
                       embed.addField(`Comando goldbox`, ` Este comando permite você soltar caixas douradas aleatoriamente dentro do seu servidor vindo como premio para qualquer um que pegar até 1000 coins.\n**Preço** \`\`5.900\`\` rubys <:rubys:430493599633899532>`, true)
                       embed.addField('Comando setborder', 'Este comando permitirá que você mude o quadro do seu perfil.\n**Preço:** ``15.000`` rubys <:rubys:430493599633899532>', true)
                       embed.setFooter('Rubys Disponíveis  ' + Number(documento.rubys).toLocaleString() + ' ------- ' + '  Coins Disponíveis  ' + Number(documento.coins).toLocaleString())
                       .setColor(0xff2227);
   
    value.edit(embed)}, 10002)
})
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
                })

                pessoa.save()
            }
            
        })
        
    }
}
