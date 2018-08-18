const Jimp = require("jimp"),
  database = require("../database.js"),
  Discord = require('discord.js');

module.exports = {
  categoria: 'Entretenimento',
  description: 'Tenha um perfil personalizado com seu nível, xp, emblemas, moedas e muito mais!',
  task(client, message, suffix) {
    
database.Bloqueio.findOne({
                "_id": message.author.id
            }, function (erro, documento) {
                if(documento) {
         if (!['244489368717230090','282504900552949760'].includes(message.author.id))
                
 if ([documento.block].includes(message.author.id)) return message.reply("<:FalseSysop3:462306755150479372> Você foi bloqueado de usar comandos do **SysopCorp**, se você acha que isso é um engano nos contate! `! Till#8514 | Natsu#7777`");
        
}
    
      if (message.author.bot) return 'Bots não podem usar esse comando :) ';

    let server = message.guild;
    let user = message.mentions.users.first() ? message.mentions.users.first() : message.author;
    database.Users.findOne({
      "_id": user.id
    }, function(erra, documento) {
      if (documento) {
      let pudim = documento.level + 1;
      let imgcolor = {
      "online": "./status/online.d.png",
      "idle": "./status/idle.d.png",
      "dnd": "./status/dnd.d.png",
      "offline": "./status/invisible.d.png",
      "stream": "./status/.d.png"
      
};
        try {
          Jimp.loadFont(Jimp.FONT_SANS_32_WHITE).then(function(letra) {
            Jimp.loadFont(Jimp.FONT_SANS_16_WHITE).then(function(letra2) {
             Jimp.loadFont(Jimp.FONT_SANS_16_BLACK).then(function(letra3) {
               Jimp.loadFont(Jimp.FONT_SANS_16_BLACK).then(function(letr) {
              Jimp.read("https://cdn.discordapp.com/attachments/413155538755649538/433097929234841602/InvisibleSysop.png", function(erre, img) {
                Jimp.read(`${documento.profile_background}`).then(function(background) {
                 Jimp.read("./Emblemas/Level" + documento.level + ".png").then(function(emblema) {
                   // Jimp.read(user.username).then(function(user) {
                    Jimp.read(`${user.avatarURL}`).then(function(avatar) {
                      Jimp.read("https://cdn.discordapp.com/attachments/393818943246172164/480292451009953792/PerfilSysop.png").then(function(perfil) {
                        Jimp.read(`./border/${documento.borderp}.png`).then(function(marco) {
                         
                              Jimp.read(`${imgcolor[user.presence.status]}`).then(function(status) {
                               Jimp.read("https://i.imgur.com/f55gYrh.png").then(function(mascara) {
                    Jimp.read(`${server.iconURL}`).then(function(serverIcon) {
                    Jimp.read("https://cloud.githubusercontent.com/assets/414918/11165709/051d10b0-8b0f-11e5-864a-20ef0bada8d6.png").then(function(mess) {

                            serverIcon.resize(40, 40);
                            mess.resize(40, 40);
                            serverIcon.mask(mess, 0, 0);
                            avatar.resize(276, 265);
                            mascara.resize(276, 265);
                            avatar.mask(mascara, 0, 0);
                            background.resize(770, 480);
                            emblema.resize(40, 44);
                        
                            status.resize(55, 55);
                        //  pau.resize(9,490)

                            img.composite(background, 16, 12);
                            img.composite(perfil, 0, 0);
                            img.composite(avatar, 1, 250);
                            img.composite(marco, 1, 250);
                            img.composite(emblema, 120, 58);
                            img.composite(serverIcon, 29, 18);
                            img.composite(status, 225, 410);
                         // img.print(user, 415, 303);

                            img.print(letra, 285, 392, `${user.username}`);
                            img.print(letra2, 78, 29, `${server.name}`);
                            img.print(letra, 690, 392, `${user.discriminator}`);
                            img.print(letra2, 690, 227, `${documento.rpup}`);
                            img.print(letra3, 630, 295, `${documento.casou}`);
                            img.print(letra2, 660, 360, `Total de: ${documento.adv}`);
                            img.print(letra, 690, 445, `${documento.level}`);
                            img.print(letra2, 675, 485, `${Number(documento.xp).toLocaleString()}`);
                        img.print(letra2, 470, 480, `${Number(documento.emerald).toLocaleString()}`);
                         // img.print(letra, 160, 415, `${Number(documento.containers).toLocaleString()}`);
                            img.print(letra, 406, 21, `${Number(documento.coins).toLocaleString()}`);
                           img.print(letra2, 470, 446, `${Number(documento.rubys).toLocaleString()}`);
                            img.print(letra, 680, 20, `${Number(documento.rep).toLocaleString()}`);
                            img.print(letra2, 22, 545, `\`\`${documento.bio}\`\``, 725);
                            //img.print(letr, 200, 23, documento.xp + "/" +  Math.ceil(pudim * 400) + " (" + parseInt(documento.xp/(pudim *400 )*100) + "%)")  
                            img.getBuffer(Jimp.MIME_PNG, (erri, buffer) => {
                              message.channel.send(``, new Discord.Attachment(buffer, 'PerfilSysop.png'));
                            });
                          });
                        });
                      });
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
          } catch (e) {
          message.channel.send('**Você está usando um plano de fundo inválido**');
        }
      } else {
          
            var pessoa = new database.Users({
                        _id: message.author.id,
                        name: message.author.username, 
                        discrim: "#" + message.author.discriminator,
                        bio: "sy!bio su bio",
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
  })
  }
};
