var database = require("../database.js");

module.exports = {
    categoria: 'Economia',
    description: 'Doa suas moedas para alguem',
    task(client, message, args) {

database.Bloqueio.findOne({
                "_id": message.author.id
            }, function (erro, documento) {
                if(documento) {
         if (!['244489368717230090'].includes(message.author.id))
                
 if ([documento.block].includes(message.author.id)) return message.channel.send(`<:xguardian:476061993368027148> | ${message.author}! Você foi bloqueado de usar comandos do **Sysop**, se você acha que isso é um engano nos contate! `);
        
}

    if(message.author.bot) return;

        
    let user = message.mentions.users.first();
    args = args.split(' '); 
    let razaod = args.slice(0);

    database.Users.findOne({
        "_id": message.author.id
    }, function(erro, documento) {

        if (documento) {

            if (message.mentions.users.size < 1) return message.reply("**Mencione alguem para doar coins!**");
            if (message.mentions.users.first().id == message.author.id) return message.reply("**Você não pode doar para você mesmo!**");
            if (message.mentions.users.first().bot) return message.reply("**Você não pode doar para um bot!**");
            if (!razaod.length < 1) {
                if (parseInt(args[1]) > 0) {
                if (args[1] < documento.coins) {

                    database.Users.findOne({
                        "_id": message.mentions.users.first().id
                    }, function(errou, docs) {

                        if (docs) {

                            docs.coins += parseInt(args[1])
                            docs.save();
                            documento.coins -= parseInt(args[1])
                            documento.save();
                           message.channel.send('<a:loading:442459946601152512> Transferindo...').then(function(value) {
                             setTimeout(function() {
                            value.edit(`<a:pblob:442467218282774548> | ${message.author} transferência concluída. Você pagou **${parseInt(args[1])}**  sycoins <:Sycoins:469789351358889984> para <@${message.mentions.users.first().id}>`)}, 3000)

})
                        } else {

                 
            var pessoa = new database.Users({
                _id: message.author.id,
                level: 0,
                xp: 0,
                coins: 0,
                rubys: 0,
                containers: 0,
                goldbox: 0,
                rep: 0,
            });
            pessoa.save();

                        }

                    })

                } else {
                    message.reply("**Você não possui saldo suficiente para doar a alguém!**");
                }
            } else {
                message.reply("**A quantia não deve ser menor que 1!**");
            }
            } else {
                message.reply("**Adicione uma quantia para doar**");
            }

        } else {


 
            var pessoa = new database.Users({
                _id: message.author.id,
                level: 0,
                xp: 0,
                coins: 0,
                rubys: 0,
                containers: 0,
                goldbox: 0,
                rep: 0,
            });
            pessoa.save();
        }
    })
})
}};
