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
         if (!['244489368717230090','282504900552949760'].includes(message.author.id))
                
 if ([documento.block].includes(message.author.id)) return message.reply("<:FalseSysop3:462306755150479372> Você foi bloqueado de usar comandos do **SysopCorp**, se você acha que isso é um engano nos contate! `! Till#8514 | Natsu#7777`");
        
}
    
    if (!['244489368717230090'].includes(message.author.id)) return message.channel.send(`<:sysalerta:469789950938841088> Opa ${message.author}, comando em fase beta.`);
 
    
   let user = message.mentions.users.first();

    if (dayCol.has(message.author.id)) 
    return message.channel.send(`<:sysalerta:469789950938841088> Opa ${message.author}, Você já favoritou alguém. Volte novamente em 1 hora.`)

    if (message.mentions.users.size < 1) {
        message.reply(`mencione alguém para favoritar.`);
    } else {
        if (message.mentions.users.first().id == message.author.id) 
        return message.channel.send(`<:xguardian:476061993368027148> | Epa ${message.author}, Você não pode se auto favoritar!`);
        if (message.mentions.users.first().bot) return message.channel.send(`<:xguardian:476061993368027148> | ${message.author} Bem, isto é confuso. Você não pode favoritar um bot.`);

        database.Users.findOne({
            "_id": message.author.id
        }, function(erro, documento) {

            database.Users.findOne({
                "_id": message.mentions.users.first().id
            }, function(err2, doc2) {

                if (documento) {

                    if (doc2) {

                        doc2.star += 1
                        doc2.save();
                        message.channel.send(`:star2: **│** ${message.author}deu uma estrela para  ${message.mentions.users.first()}.`);
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
                            rep: 0,
                            star: 0,
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
                        rep: 0,
                        star: 0,
                    })

                    pessoa.save()

                }

            })

        })


    }
})
}};
