var database = require("../database.js")
var dayCol = new Set()


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

   let user = message.mentions.users.first();

    if (dayCol.has(message.author.id)) return message.reply("**Você já deu rep hoje. Volte em um dia! :confused:**");

    if (message.mentions.users.size < 1) {
        message.reply("**Você já pode dar rep. :smile:**");
    } else {
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

                        doc2.rep += 1
                        doc2.save();
                        message.reply(`Você deu um ponto de reputação para ${message.mentions.users.first().user} <:likeheart:447056564965081088>`);
                        dayCol.add(message.author.id)
                        setTimeout(function() {
                            dayCol.delete(message.author.id)
                        }, 24 * 1000 * 60 * 60)

                    } else {

                        var pessoa = new database.Users({
                            _id: message.mentions.users.first().id,
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


    }
});
}};
