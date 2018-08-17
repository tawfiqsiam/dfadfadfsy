const Discord = require('discord.js');
let database = require("../database.js");

module.exports = {
    categoria: 'Economia',
    description: 'Solte uma caixa dourada e alguém aleatóriamente do seu servidor irá pegar, contendo prêmios!',   
    cooldown: 30,	
    task(client, message, suffix) {
        message.delete();
  
database.Bloqueio.findOne({
                "_id": message.author.id
            }, function (erro, documento) {
                if(documento) {
         if (!['244489368717230090','282504900552949760'].includes(message.author.id))
                
 if ([documento.block].includes(message.author.id)) return message.reply("<:FalseSysop3:462306755150479372> Você foi bloqueado de usar comandos do **SysopCorp**, se você acha que isso é um engano nos contate! `! Till#8514 | Natsu#7777`");
        
}
	    

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
                });

                pessoa.save();
                return pessoa;
            };
        database.Users.findOne({ 
            "_id": message.author.id,
        }, function (erro, documento) {
            if (documento) {
                if (documento.goldbox > 0) {
                    if (!!args[0]) {
                        if (args[0] == 'drop') {
                            let premio = "coins <:NewCoins:458870031581970432>",
                                prc = Math.round(Math.random() * 20),
                                wonCoins = 0;
                                
                            if (prc <= 10) {
                                wonCoins += quantidade(5 + 500);
                            } else if (prc > 10) {
                                wonCoins += quantidade(500 + 1000);
                            }
                            
                            documento.goldbox -= 1;
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
                            
                            var gerador = ['./imagens/alertaGold.png', './imagens/passarogold.png'];
                            var alerta = gerador[Math.floor(Math.random() * gerador.length)];
                            
                            message.channel.send(``,new Discord.Attachment(alerta)).then
                                setTimeout(function() {
                                    let embed = new Discord.RichEmbed()
                                        //.setThumbnail('https://i.imgur.com/z39bazM.png')
                                        .addField(`**Goldbox**`,` **${aleatorio.user.username}** pegou a caixa dourada contendo: **${wonCoins}** ${premio}`, false)
                                        .setColor(0xfccf1f);
       
                                    message.channel.send(embed);
                                }, 12000);
                            
                        } else {
                            message.reply("**Use** `sy!goldbox drop` **para soltar uma caixa dourada**.");
                        }
                    } else {
                        message.channel.send(`**Você possui ** \`\`${Number(documento.goldbox).toLocaleString()}\`\` **goldbox**`);
                    }
                } else {
		            message.reply('Você não possui caixas douradas!');
                } 
            } else {
                createAccount(message.author.id);
            }
        });
	})
    }
};
