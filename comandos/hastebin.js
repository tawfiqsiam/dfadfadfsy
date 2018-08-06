const snekfetch = require('snekfetch');

module.exports =  {
    task(client, message, suffix) {

 let database = require("../database.js");  
database.Bloqueio.findOne({
                "_id": message.author.id
            }, function (erro, documento) {
                if(documento) {
         if (!['244489368717230090','282504900552949760'].includes(message.author.id))
                
 if ([documento.block].includes(message.author.id)) return message.reply("<:FalseSysop3:462306755150479372> Você foi bloqueado de usar comandos do **SysopCorp**, se você acha que isso é um engano nos contate! `! Till#8514 | Natsu#7777`");
        
}       
        
        const blacklist = require('../Storange/blacklist.json')
if (blacklist[message.author.id]) {
        message.channel.send("Você foi bloqueado de usar comandos do bot!")
        return;
    }
        
snekfetch.post("https://hastebin.com/documents").send("Envie um conteúdo").then(body => {
message.channel.send("https://hastebin.com/" + body.body.key + (("js") ? "." + "js" : ""));
}).catch(err => message.channel.send(err.stack));
    })
}};
