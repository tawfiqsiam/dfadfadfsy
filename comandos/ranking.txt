var database = require("../database.js");

module.exports = {
    task(client, message, args) {


database.Bloqueio.findOne({
                "_id": message.author.id
            }, function (erro, documento) {
                if(documento) {
         if (!['244489368717230090','282504900552949760'].includes(message.author.id))
                
 if ([documento.block].includes(message.author.id)) return message.reply("<:FalseSysop3:462306755150479372> Você foi bloqueado de usar comandos do **SysopCorp**, se você acha que isso é um engano nos contate! `! Till#8514 | Natsu#7777`");
        
}
        
    database.Users.findOne({
        "_id": message.author.id
    }, function(erromano, documano) {
        database.Users.find({}, function(erro, documento) {
            if (documento) {
                var position = documento.map(function(docu) {
                    return {
                        id: docu._id,
                        level: docu.level,
                        xp: docu.xp
                    }
                });
                position = position.sort(function(a, b) {
                    return b.level - a.level
                    return b.xp - a.xp
                });
                position = position.filter(function(a) {
                    return client.users.get(a.id)
                })
                var toplevel = "\n" + position.slice(0, 10).map((a, posicao) => "**" + (posicao + 1) + "** " +

                     ` \`\`` + client.users.get(a.id).username + ` \`\` \n` + "Level: " + "**" + a.level + "**" + " | XP:" + "**" + a.xp + "/" + (400* a.level + 1 + "**")).join("\n------------------------------------------------------\n")+ "";
                message.channel.sendMessage({
                    "embed": {
                        "description": "ㅤㅤㅤㅤㅤㅤ**TOP 10 SYSOP**\n\n" + toplevel,
                        "color": 0x4959e9,
                        "footer": {
                            "icon_url": message.author.displayAvatarURL,
                            "text": "Sua pontuação: Level: " + documano.level + ", XP: " + documano.xp + "/" + (400 * documano.level + 1), 
                        "thumbnail": {
                            "url": "https://i.imgur.com/g3LLjjv.jpg"
                        }
                    }
                    }
    });
            }
        });
    });
    })
}};
