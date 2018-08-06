var database = require("../database.js");

module.exports = {
    task(client, message, suffix, args) {

    suffix = suffix.split(' '); 
    let razaou = suffix[0];


    if (!message.member.hasPermission(["MANAGE_GUILD"]))
    return message.reply("**Você não tem permissão para configurar o bot!**");
     
     
    database.Guilds.findOne({ 
        "_id": message.guild.id
    }, function(erro, documento) {

        if (documento) {

             if (razaou === 'sy!config levels') {
                    if(documento.lvl){
                        documento.lvl = false
                        documento.save()
                        message.reply("**:warning: Sistema de levels desativado.**");
                    } else {
                        documento.lvl = true
                        documento.save()
                        message.reply("**:warning: Sistema de levels ativado.**");
                    }
                } else {

            var servidor = new database.Guilds({
                _id: message.guild.id,
                lvl: true,
            });
            servidor.save();

    }
                }
    })
    }};