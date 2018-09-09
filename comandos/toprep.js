var database = require("../database.js");

module.exports = {
    task(client, message, args) {

database.Bloqueio.findOne({
                "_id": message.author.id
            }, function (erro, documento) {
                if(documento) {
         if (!['244489368717230090'].includes(message.author.id))
                
 if ([documento.block].includes(message.author.id)) return message.channel.send(`<:xguardian:476061993368027148> | ${message.author}! Você foi bloqueado de usar comandos do **Sysop**, se você acha que isso é um engano nos contate! `);
        
}


    database.Users.findOne({
        "_id": message.author.id
    }, function(erromano, documano) {
        database.Users.find({}, function(erro, documento) {
            if (documento) {
                var position = documento.map(function(docu) {
                    return {
                        id: docu._id,
                        rep: docu.rep,
                    };
                });
                position = position.sort(function(a, b) {

                    return b.rep - a.rep 
                });
                position = position.filter(function(a) {
                    return client.users.get(a.id)
                });
    var topRep = "\n" + position.slice(0, 10).map((a, posicao) => (posicao + 1)  + ". " + client.users.get(a.id).username + " → Reps: " + a.rep).join("\n____________________\n") + "";
                
      message.channel.send(`\`\`\`https\nTOP 10 Reputação SYSOP\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n${topRep}\`\`\`\n` ); 
            
    }
        })
})
})
}}
