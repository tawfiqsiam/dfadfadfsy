const Discord = require('discord.js');
let database = require("../database.js");

module.exports = {
    categoria: 'Economia',
    description: 'Loja Global do Bot, onde você compra alguns comandos premiums e divertidos!',
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
                
                if (razaou === 'setbackground') {
                    if(Number(documento.rubys) >= 35650) {
                        documento.rubys = Number(documento.rubys) - 35650
                        documento.background_shoped = "yes"
                        message.channel.send('<a:anirainbowblob:434952813177470986> Compra realizada com sucesso!')
                        documento.save()
                    } else {
                        message.channel.send('Você precisa de 20.000 rubys...')
                    }
                } else if(razaou === 'bio') {
                    if(Number(documento.emerald) >= 200) {
                        documento.emerald = Number(documento.emerald) - 200
                        documento.bio_shoped = "yes"
                        message.channel.send('<a:anirainbowblob:434952813177470986> Compra realizada com sucesso!')
                        documento.save()
                    } else {
                        message.channel.send('Você precisa de 200 esmeraldas <a:esmeral:442718169585680387>')
                    }
                    
                } else if(razaou === 'goldbox') {
                    if(Number(documento.rubys) >= 20900) {
                        documento.rubys = Number(documento.rubys) - 20900
                        documento.goldbox_shoped = "yes"
                        message.channel.send('<a:anirainbowblob:434952813177470986> Compra realizada com sucesso!')
                        documento.save()
                    } else {
                        message.channel.send('Você precisa de 20.900 rubys...')
                    }
                } else if(razaou === 'setborder') {
                    if(Number(documento.rubys) >= 10000) {
                        documento.rubys = Number(documento.rubys) - 10000
                        documento.border_shoped = "yes"
                        message.channel.send('<a:anirainbowblob:434952813177470986> Compra realizada com sucesso!')
                        documento.save()
                        
                    } else {
                        message.channel.send('Você precisa de 10.000 rubys...')
                    }
                } else if(razaou === 'Nv1') {
                    if(Number(documento.emerald) >= 100) {
                        documento.emerald = Number(documento.emerald) - 100
                        documento.coins = Number(documento.coins) + 50000
                        message.channel.send('<a:anirainbowblob:434952813177470986> Compra realizada com sucesso!')
                        documento.save()
                        
                    } else {
                        message.channel.send('Você precisa de 100 esmeraldas')
                    }
                } else if(razaou === 'Nv2') {
                    if(Number(documento.emerald) >= 1000) {
                        documento.emerald = Number(documento.emerald) - 1000
                        documento.coins = Number(documento.coins) + 15000
                        message.channel.send('<a:anirainbowblob:434952813177470986> Compra realizada com sucesso!')
                        documento.save()
                        
                    } else {
                        message.channel.send('Você precisa de 1.000 esmeraldas...')
                    }
                } else if(razaou === 'Nv3') {
                    if(Number(documento.rubys) >= 1000) {
                        documento.rubys = Number(documento.rubys) - 1000
                        documento.coins = Number(documento.coins) + 5000
                        message.channel.send('<a:anirainbowblob:434952813177470986> Compra realizada com sucesso!')
                        documento.save()
                        
                    } else {
                        message.channel.send('Você precisa de 1.000 Sy Crystal...')
                    }
                } else if(razaou === 'Nv4') {
                    if(Number(documento.rubys) >= 10000) {
                        documento.rubys = Number(documento.rubys) - 10000
                        documento.coins = Number(documento.coins) + 40000
                        message.channel.send('<a:anirainbowblob:434952813177470986> Compra realizada com sucesso!')
                        documento.save()
                        
                    } else {
                        message.channel.send('Você precisa de 10.000 Sy Crystal...')
                    }
                } else if(razaou === 'Nv5') {
                    if(Number(documento.coins) >= 100000) {
                        documento.rubys = Number(documento.coins) - 100000
                        documento.emerald = Number(documento.emerald) + 500
                        message.channel.send('<a:anirainbowblob:434952813177470986> Compra realizada com sucesso!')
                        documento.save()
                        
                    } else {
                        message.channel.send('Você precisa de 100.000 Sycoins...')
                    }
                } else if(razaou === 'Nv6') {
                    if(Number(documento.containers) >= 5) {
                        documento.containers = Number(documento.containers) - 5
                        documento.goldbox = Number(documento.goldbox) + 35
                        message.channel.send('<a:anirainbowblob:434952813177470986> Compra realizada com sucesso!')
                        documento.save()
                        
                    } else {
                        message.channel.send('Você precisa de 5 containers...')
                    }
                } else if(razaou === 'Nv7') {
                    if(Number(documento.goldbox) >= 100) {
                        documento.goldbox = Number(documento.goldbox) - 100
                        documento.containers = Number(documento.containers) + 20
                        message.channel.send('<a:anirainbowblob:434952813177470986> Compra realizada com sucesso!')
                        documento.save()
                        
                    } else {
                        message.channel.send('Você precisa de 100 Goldbox...')
                    }
               
               
                } else {
  message.channel.send(`<:sysalerta:469789950938841088>${message.author} especifique algo para comprar! **Use** \`sy!shop\``)
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
        })
    }
}
