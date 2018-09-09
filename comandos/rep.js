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
                
 if ([documento.block].includes(message.author.id)) return message.channel.send(`<:xguardian:476061993368027148> | ${message.author}! Você foi bloqueado de usar comandos do **Sysop**, se você acha que isso é um engano nos contate! `);
        
}
    
      //if (!['244489368717230090'].includes(message.author.id)) return message.channel.send(`<:sysalerta:469789950938841088> Opa ${message.author}, erro ao executar esse comando. Caso o erro persista contate: **! Aquaman 🐙#1408**`);
 
    
   let user = message.mentions.users.first();

    if (dayCol.has(message.author.id)) return message.channel.send(`<:sysalerta:469789950938841088> Opa ${message.author}, Você já deu rep! Volte novamente em 1 hora.`)

    if (message.mentions.users.size < 1) {
        message.reply("você já pode dar rep ;)");
    } else {
        if (message.mentions.users.first().id == message.author.id) return message.channel.send(`<:xguardian:476061993368027148> | Epa ${message.author}, Você não pode dar rep para você mesmo!`);
        if (message.mentions.users.first().bot) return message.channel.send(`<:xguardian:476061993368027148> | ${message.author} Bem, isto é confuso. Você não pode dar rep para um bot!**`);

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
                        message.reply(`deu um ponto de reputação para ${message.mentions.users.first()} <:likeheart:447056564965081088>`);
                        dayCol.add(message.author.id)
                        setTimeout(function() {
                            dayCol.delete(message.author.id)
                        }, 1 * 1000 * 60 * 60)

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
})
}};
