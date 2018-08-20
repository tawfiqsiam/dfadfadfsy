const Discord = require("discord.js");
module.exports = { task(client, message, suffix) { message.delete(1000);

let database = require("../database.js");  
database.Bloqueio.findOne({
                "_id": message.author.id
            }, function (erro, documento) {
                if(documento) {
         if (!['244489368717230090','282504900552949760'].includes(message.author.id))
                
 if ([documento.block].includes(message.author.id)) return message.reply("<:FalseSysop3:462306755150479372> You are blocked to use Sysop commands, if you think is this wrong contract us! `SHAZAM!#0001 | Natsu#0001`");
        
}

if (!['244489368717230090'].includes(message.author.id)) return;

let mention = message.mentions.users.first();
if (!mention) return message.reply(`mencione alguém para casar.`);

database.Users.findOne({"_id": mention}, function(erra, documento) {
      if (documento) {

documento.casou = '' ;
documento.coins = 0;
documento.rubys = 0;
documento.emerald = 0;
documento.goldbox = 0;
documento.bio = 'Sobre você...';
documento.containers = 0;
documento.level = 0;
documento.xp = 0;
documento.profile_background = 'https://cdn.discordapp.com/attachments/442346665052209153/469407730797641738/SysopLogoLight.png';
documento.save();
message.channel.send(`<:trust:447056422346424320> OK ${message.author}! Você resetou o banco de dados de: ${mention}`);

} else {
      var pessoa = new database.Users({
                        _id: message.author.id,
                        name: message.author.username, 
                        discrim: "#" + message.author.discriminator,
                        bio: "Sobre",
                        rpup: 0,
                        adv: 0,
                        coins: 0,
                        rubys: 0,
                        containers: 0,
                        emerald: 0,
                        goldbox: 0,
                        casou: 'Ninguém',
                        profile_background: 'https://cdn.discordapp.com/attachments/442346665052209153/469407730797641738/SysopLogoLight.png',
                      
                    })
                    pessoa.save()
        message.reply("<:LikeSysop3:476062023629799424> **Perfil criado!** Use novamente este comando!");
}
});
});
}};
