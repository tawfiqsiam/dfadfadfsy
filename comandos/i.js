const Discord = require('discord.js');
let database = require("../database.js");

module.exports = {
    task(client, message, suffix) {
        
  if (!['244489368717230090','106915215592923136'].includes(message.author.id)) return message.reply('Comando em teste `BETA`, apenas usuários com permissões podem usar');
        
        message.delete();
        let args = suffix.split(' '),
            members = message.guild.members.array().filter(u => !u.bot),
            aleatorio = members[Math.floor(Math.random() * members.length)],
            quantidade = n => Math.round(Math.random() * n),
            createAccount = id => {
                let pessoa = new database.Users({
                    _id: id,
                    level: 0,
                    xp: 0,
                    coins: 0,
                    rubys: 0,
                    containers: 0,
                    goldbox: 0,
                    rarebox: 0,
                    cupcake: 0,
                    lootboxr: 0,
                });

                pessoa.save();
                return pessoa;
            };
        database.Users.findOne({ 
            "_id": message.author.id,
        }, function (erro, documento) {
            if (documento) {
                if (documento.lootboxr > 0) {
                    if (!!args[0]) {
                        if (args[0] == 'drop') {
                            let premio = "Coin (s) <:coins:430242868813103105>",
                                prc = Math.round(Math.random() * 40),
                                wonCoins = 0;
                                
                            if (prc <= 20) {
                                wonCoins += quantidade(500 + 1000);
                            } else if (prc > 30) {
                                wonCoins += quantidade(1000 + 20000);
                            }
                            
                            documento.lootboxr -= 1;
                            documento.save();
                            
                            database.Users.findOne({ 
                                "_id": aleatorio.user.id,
                            }, function (erro, doc) {
                                if (!doc) {
                                    doc = createAccount(aleatorio.user.id);
                                }
                                doc.coins += wonCoins;
                                doc.save();
                            });
                            message.channel.send(` ${message.author} enviou uma caixa rara! 5 segundos até cair.`).then(function(value) {
                                setTimeout(function() {
                                    let embed = new Discord.RichEmbed()
                                        .setThumbnail('http://www.nikusenpai.com/uploads/1/0/6/5/10653757/editor/lootbox-large.png?1498973983')
                                        .addField(`**RareBox**`,` ${aleatorio.user} pegou a caixa rara! Prêmio: ${wonCoins} ${premio}`, false)
                                        .setColor(0xecd73e);
       
                                    value.edit(embed);
                                }, 5000);
                            });
                        } else {
                            message.reply("**Use** `sy!rarebox drop` **para soltar uma caixa rara**.");
                        }
                    } else {
                        message.channel.send(`**Você possui ** \`\`${Number(documento.rarebox).toLocaleString()}\`\` ** caixas raras**`);
                    }
                } else {
		            message.reply('Você não possui caixas raras!');
                } 
            } else {
                createAccount(message.author.id);
            }
        });
    }
};
