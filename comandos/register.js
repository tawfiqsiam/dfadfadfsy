  const database = require("../database.js") 
 const fs = require('fs');
 module.exports = {
     task(client, message, suffix) {
 

database.Bloqueio.findOne({
                "_id": message.author.id
            }, function (erro, documento) {
                if(documento) {
         if (!['244489368717230090','282504900552949760'].includes(message.author.id))
                
 if ([documento.block].includes(message.author.id)) return message.reply("<:FalseSysop3:462306755150479372> Você foi bloqueado de usar comandos do **SysopCorp**, se você acha que isso é um engano nos contate! `! Till#8514 | Natsu#7777`");
        
}

    database.Users.findOne({"_id":message.author.id},function(erro,documento){
            if (documento) {
            message.channel.send("Você já possuir um perfil!, Para visualizar seu perfil use: `sy!profile`");
            } else {
                    var pessoa = new database.Users({
                        _id: message.author.id,
                        name: message.author.username, 
                        discrim: "#" + message.author.discriminator,
                        bio: "sy!bio su bio",
                        marry: "None",
                      
                    })
                    pessoa.save()
            message.reply("Registro realizado com sucesso! **Utilize** `sy!profile` para visualizar seu perfil")
        
  };
})
})
     }};
