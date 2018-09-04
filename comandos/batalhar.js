const db = require("../database.js");
var dayCol = new Set()

module.exports = { task(client, message, suffix) {

db.Bloqueio.findOne({
                "_id": message.author.id
            }, function (erro, documento) {
                if(documento) {
         if (!['244489368717230090','282504900552949760'].includes(message.author.id))
                
 if ([documento.block].includes(message.author.id)) return message.reply("<:xguardian:476061993368027148> Você foi bloqueado de usar comandos do **SysopCorp**, se você acha que isso é um engano nos contate! `! Till#8514 | Natsu#7777`");
        
}

var nire = message.mentions.users.first();
var qnire = message.author;


if (dayCol.has(message.author.id)) 
return message.channel.send(`<:sysalerta:469789950938841088> **|** ${message.author} batalhe novamente dentro de 1 hora.`)


if (!nire) 
return message.channel.send(`<:sysalerta:469789950938841088> ${message.author} mencione alguém para batalhar.`);

if (message.mentions.users.first().id == message.author.id) 
return message.channel.send(`<:xguardian:476061993368027148> | Opa ${message.author}! Você não pode batalhar com você mesmo.`);

if (message.mentions.users.first().bot) 
return message.channel.send(`<:xguardian:476061993368027148> | ${message.author} estranho... Você não pode batalhar com um bot.`);

message.channel.send(`<a:PulandoFeliz:486648350888689666> **|** ${qnire} te desafiou para uma batalha <@${nire.id}>. Você aceita o desafio?`).then(() => {
message.channel.awaitMessages(res => 
(res.content == "sim" && res.author.id == nire.id) || (res.content == 'não' && res.author.id == nire.id), { 

max: 1, time: 60000, errors: ['time'] }).then(col => {
    
    if (col.first().content == 'sim') {
        message.channel.send(`<a:foguinho:486647218896633888> **|** ${nire} aceitou o desafio!`);
        
           let give = [nire.id, qnire.id],
            ganhador = give[Math.floor(Math.random() * give.length)],
            quantia = n => Math.round(Math.random() * n),
            createAccount = id => {
                let pessoa = new db.Users({
                    _id: id,
                    level: 0,
                    xp: 0,
                    coins: 0,
                    rubys: 0,
                    emerald: 0,
                    rep: 0,
                    containers: 0,
                    goldbox: 0,
                });

                pessoa.save();
                return pessoa;
            };
     db.Users.findOne({ 
            "_id": qnire.id,
        }, function (erro, documento) {
            if (documento) {
                
                   if (documento.coins > 0) {
                  
                let premio = "Sycoins <:Sycoins:469789351358889984>",
                                prc = Math.round(Math.random() * 20),
                                wonCoins = 0;
                                
                            if (prc <= 10) {
                                wonCoins += quantia(5 + 500);
                            } else if (prc > 10) {
                                wonCoins += quantia(500 + 1000);
                            }
                
                                db.Users.findOne({ 
                                "_id": ganhador,
                            }, function (erro, doc) {
                                if (!doc) {
                                    doc = createAccount(ganhador.user.id);
                                }
                                doc.coins += wonCoins;
                                doc.save();
                            });
            message.channel.send(`:bomb: Batalhando...`).then(function(value) {

                         value.edit(`<@${ganhador}> venceu a batalha e recebeu um prêmio de: ${Number(wonCoins).toLocaleString()} ${premio}`
                   
                , 5000)
  
 
})

dayCol.add(message.author.id)
                        setTimeout(function() {
                            dayCol.delete(message.author.id)
                        }, 1 * 1000 * 60 * 60)
            }
            }});
    }
    if (col.first().content == 'não') {
        message.channel.send(`:crossed_swords: **|** ${nire} recusou o desafio.`);
    }
}).catch(() => message.channel.send(`:shrug::skin-tone-2: **|** Passou-se **1** minuto sem resposta. Batalha finalizada a força.`));
      
});
});
}};
