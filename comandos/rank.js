const Jimp = require("jimp"),
  database = require("../database.js"),
  Discord = require('discord.js');

module.exports = {
  categoria: 'Entretenimento',
  description: 'Tenha um perfil personalizado com seu nível, xp, emblemas, moedas e muito mais!',
  task(client, message, suffix) {
    
        
    //if (message.mentions.users.first().bot) return message.reply("**Bots não tem perfil!**");

database.Bloqueio.findOne({
                "_id": message.author.id
            }, function (erro, documento) {
                if(documento) {
         if (!['244489368717230090','282504900552949760'].includes(message.author.id))
                
 if ([documento.block].includes(message.author.id)) return message.reply("<:FalseSysop3:462306755150479372> Você foi bloqueado de usar comandos do **SysopCorp**, se você acha que isso é um engano nos contate! `! Till#8514 | Natsu#7777`");
        
}
  

    let user = message.mentions.users.first() ? message.mentions.users.first() : message.author;
    database.Users.findOne({
      "_id": user.id
    }, function(erra, documento) {
      if (documento) {
      let pudim = documento.level + 1;
      let imgcolor = {
      "online": "./status/online.png",
      "idle": "./status/ausente.png",
      "dnd": "./status/ocupado.png",
      "offline": "./status/offline.png",
      "stream": "./status/.d.png"
      
};

let level = documento.lvll + 1;
        try {
          Jimp.loadFont(Jimp.FONT_SANS_32_WHITE).then(function(letra) {
            Jimp.loadFont(Jimp.FONT_SANS_16_WHITE).then(function(letra2) {
             Jimp.loadFont(Jimp.FONT_SANS_32_BLACK).then(function(letra3) {
               Jimp.loadFont(Jimp.FONT_SANS_16_BLACK).then(function(letr) {
                Jimp.read(`${user.avatarURL}`).then(function(level) {  
              Jimp.read("./EEXP /exp ("+ parseInt(documento.eexp/(documento.lvll *700 )*100) +").png").then(function(pau) {
              Jimp.read("https://cdn.discordapp.com/attachments/442346561289060352/469817915357528074/InvisibleSysop_1.png", function(erre, img) {
                Jimp.read(`${documento.profile_background}`).then(function(background) {
                    Jimp.read(`${user.avatarURL}`).then(function(avatar) {
                      Jimp.read("https://cdn.discordapp.com/attachments/442346561289060352/469798232004886538/CardSys.png").then(function(perfil) {
                     
                              Jimp.read(`${imgcolor[user.presence.status]}`).then(function(status) {
                               Jimp.read("https://cloud.githubusercontent.com/assets/414918/11165709/051d10b0-8b0f-11e5-864a-20ef0bada8d6.png").then(function(mascara) {

                            avatar.resize(200, 200);
                            mascara.resize(200, 200);
                            avatar.mask(mascara, 0, 0);
                            background.resize(934, 282);
                            status.resize(70, 70);
                            img.composite(background, 1, 0);
                            img.composite(perfil, 0, 0);
                            img.composite(avatar, 43, 70);
                      
                            img.composite(status, 190, 215);
                            img.composite(pau, 250, 160);
                       

                            img.print(letra, 280, 140, `${user.username}`);
                            img.print(letra, 815, 235, `${user.discriminator}`);
                            img.print(letra, 770, 15, `${Number(documento.coins).toLocaleString()}`);
                            img.print(letra, 480, 180, documento.eexp + "/" +  Math.ceil(documento.lvll * 700 ) + " (" + parseInt(documento.eexp/(documento.lvll *700 )*100) + "%)")  
                            img.getBuffer(Jimp.MIME_PNG, (erri, buffer) => {
                              message.channel.send(``, new Discord.Attachment(buffer, 'CardSys.png'));
                     
                    
                    });
                  });
                });
              });
            });
          });
      //  });
      });
    });
  });
});
  });
            });
          });
        } catch (e) {
          message.channel.send('**Você está usando um plano de fundo inválido**');
        }
      } else {
        message.reply("**Você não tem um perfil.** :confused: Use: `sy!register`");
      }
    });
    });
  }
};
