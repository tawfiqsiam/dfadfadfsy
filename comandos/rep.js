var database = require("../database.js")
var dayCol = new Set()
const moment = require('moment');
require("moment-duration-format");
moment.locale('pt-BR');   

module.exports = {
    categoria: 'Entretenimento',
    description: 'Adicione Upvotes para seus amigos assim será ainda mais conhecido!', 
    task(client, message, suffix) {


database.Bloqueio.findOne({
                "_id": message.author.id
            }, function (erro, documento) {
                if(documento) {
         if (!['244489368717230090'].includes(message.author.id))
                
 if ([documento.block].includes(message.author.id)) return message.reply("<:FalseSysop3:462306755150479372> Você foi bloqueado de usar comandos do **Sysop**, se você acha que isso é um engano nos contate!`");
        
}

//let cooldown = 3600000;



        let user = message.mentions.users.first();
if (!user) return message.reply(`mencione alguém para dar rep!`)
        if (message.mentions.users.first().id == message.author.id) return message.reply("**Você não pode dar rep para você mesmo!**");
        if (message.mentions.users.first().bot) return message.reply("**Você não pode dar rep para um bot!**");

        database.Users.findOne({
            "_id": message.author.id
        }, function(erro, documento) {

            database.Users.findOne({
                "_id": message.mentions.users.first().id
            }, function(err2, doc2) {

                if (documento) {

                    if (doc2) {
          
 var tempo = moment.duration.format([moment.duration((parseInt(doc2.temprep) + 3600000) - Date.now())], "hh:mm:ss");
                 
 if ((parseInt(doc2.temprep) + 3600000) <= (Date.now())) {   

                        doc2.rep += 1
                        doc2.temprep = Date.now();
                        doc2.save();
                        message.reply(`<:trust:447056422346424320> Você deu um ponto de reputação para ${message.mentions.users.first()} <:likeheart:447056564965081088>`);
 } else {
     
     message.channel.send(`<:sysalerta:469789950938841088> Woww ${message.author}, você só pode dar rep novamente em: \`${tempo}\``)
     
 }

                    } else {

                        var pessoa = new database.Users({
                            _id: message.mentions.users.first().id,
                            level: 0,
                            xp: 0,
                            temprep: 0,
                            coins: 0,
                            conquistas: 0,
                            mensagens: 0,
                            msglevel: 0,
                            invitetru: false,
                            invitecode: "Nenhum",
                            invitou: 0,
                            warn: 0,
                            rep: 0
                        })

                        pessoa.save()

                    }

                } else {

                    var pessoa = new database.Users({
                        _id: message.author.id,
                        level: 0,
                        xp: 0,
                        coins: 0,
                        conquistas: 0,
                        mensagens: 0,
                        msglevel: 0,
                        invitetru: false,
                        invitecode: "Nenhum",
                        invitou: 0,
                        warn: 0,
                        rep: 0
                    })

                    pessoa.save()

                }

            })

        })
    
});
}};
