const database = require("../database.js");
const Discord = require("discord.js")

module.exports = { task(client, message, suffix) {

            database.Bloqueio.findOne({
                "_id": message.author.id
            }, function (erro, documento) {
                if(documento) {
         if (!['244489368717230090'].includes(message.author.id))
                
 if ([documento.block].includes(message.author.id)) return message.channel.send(`<:xguardian:476061993368027148> | ${message.author}! Você foi bloqueado de usar comandos do **Sysop**, se você acha que isso é um engano nos contate! `);
        
}

let args = suffix.split(' '),
            members = message.guild.members.array().filter(u => !u.bot),
            aleatorio = members[Math.floor(Math.random() * members.length)];


       let quantidade = n => Math.round(Math.random() * n),
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
                            
                            documento.goldbox -= 1;
                            documento.save();
                            
        
            
message.channel.send(`${message.author} dropou uma caixa de ouro! **Use** \`sy!pick para pegá-la\``).then(() => {
message.channel.awaitMessages(res => res.content == 'sy!pick', {max: 1, time: 60000, errors: ['time']})
.then(messages => {

let premio = "Sycoins <:Sycoins:469789351358889984>",
                                prc = Math.round(Math.random() * 20),
                                wonCoins = 0;
                                
                            if (prc <= 10) {
                                wonCoins += quantidade(5 + 500);
                            } else if (prc > 10) {
                                wonCoins += quantidade(500 + 1000);
                            }

let user = messages.first().author;

database.Users.findOne({ "_id": user.id,}, function (erro, doc) {
if (!doc) {
                doc = createAccount(user.id);
            }
                doc.coins += wonCoins;
                doc.save();
        });
                             
     message.channel.send(`${user} pegou a caixa de ouro contendo: ${wonCoins} ${premio}`);
  
});
}).catch(m => m.size == 0 && message.channel.send('1 minuto se passou e ninguém pegou a caixa de ouro.'));
  } else {
                            message.reply("**Use** `sy!goldbox drop` **para soltar uma caixa dourada**.");
                        }
                    } else {
                        message.channel.send(`**Você possui ** \`\`${Number(documento.goldbox).toLocaleString()}\`\` **goldbox**. Use: \`sy!goldbox drop\` para dropar uma.`);
                    }
                } else {
                    message.reply('Você não possui caixas douradas!');
                } 
                    
                        
            } else {
                createAccount(message.author.id);
            }
});
            })
}};
