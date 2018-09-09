  const database = require("../database.js") 
 const fs = require('fs');
 module.exports = {
     task(client, message, suffix) {
 

database.Bloqueio.findOne({
                "_id": message.author.id
            }, function (erro, documento) {
                if(documento) {
         if (!['244489368717230090'].includes(message.author.id))
                
 if ([documento.block].includes(message.author.id)) return message.channel.send(`<:xguardian:476061993368027148> | ${message.author}! Você foi bloqueado de usar comandos do **Sysop**, se você acha que isso é um engano nos contate! `);
        
}

    database.Users.findOne({"_id":message.author.id},function(erro,documento){
            if (documento) {
            message.channel.send("Você já possuir um perfil!, Para visualizar seu perfil use: `sy!profile`");
            } else {
                    var pessoa = new database.Users({
                        _id: message.author.id,
                        name: message.author.username, 
                        discrim: "#" + message.author.discriminator,
                        bio: "Sobre você",
                        marry: "None",
                        newDay: 0,
                        temprep: 0,                       
                      
                    })
                    pessoa.save()
            message.reply("Registro realizado com sucesso! **Utilize** `sy!profile` para visualizar seu perfil")
        
  };
})
})
     }};
