let database = require("../database.js");
const Discord = require("discord.js");
const moment = require('moment');
moment.locale('pt-BR');
 
module.exports = {
    categoria: 'Economia',
    description: 'Receba seu bônus diário!',
    task(client, message, suffix) {
        database.Bloqueio.findOne({
            "_id": message.author.id
        }, function (erro, documento) {
            if (documento) {
                if (!['244489368717230090'].includes(message.author.id))
                    if ([documento.block].includes(message.author.id))
                        return message.channel.send(`<:xguardian:476061993368027148> | ${message.author}! Você foi bloqueado de usar comandos do **Sysop**, se você acha que isso é um engano nos contate! `);
            }
           
            database.Users.findOne({
                "_id": message.author.id
            }, function (erro, documento) {
                if (documento) {
                    if(message.author.bot) return;
               
                    const HOUR =  60 * 60 * 1E3;
                    let current = documento.daily;
                    if (current == 0)
                    current = Date.now() - 5 * HOUR; // primeiro trabalho
                    console.log(current);

                    if (new Date() >= current) {
                    documento.daily = Date.now() + 5 * HOUR;
                    documento.save();
                    
                    var prc = Math.round(Math.random() * 80);
                    var premio, quantidade, dayRDM;
                       
                        if (prc <= 20) {
                            premio = `containers <:container:430855297200947230>`;
                            quantidade = 100;
                            dayRDM = Math.round(Math.random() * parseInt(quantidade) + 1);
                            documento.containers += dayRDM;
                            documento.save();
                        } else  if (prc <= 40) {
                            premio = `Sy Crystal <:sysopcrystal:482651147111366656>`;
                            quantidade = 15000;
                            dayRDM = Math.round(Math.random() * parseInt(quantidade) + 1);
                            documento.rubys += dayRDM;
                            documento.save();
                        } else if (prc <= 80) {
                            premio = `sycoins <:Sycoins:469789351358889984>`;
                            quantidade = 20000;
                            dayRDM = Math.round(Math.random() * parseInt(quantidade) + 1);
                            documento.coins += dayRDM;
                            documento.save();
                        } else if (prc <= 40) {
                            premio = `goldboxs <:New_goldenbox_10:458877483182194698>`;
                            quantidade = 200;
                            dayRDM = Math.round(Math.random() * parseInt(quantidade) + 1);
                            documento.goldbox += dayRDM;
                            documento.save();
                        } else if (prc <= 40) {
                            premio = `EXP's <:New_goldenbox_10:458877483182194698>`;
                            quantidade = 1000;
                            dayRDM = Math.round(Math.random() * parseInt(quantidade) + 1);
                            documento.eexp += dayRDM;
                            documento.save();
                        } else if (prc <= 20) {
                            premio = `esmeraldas <a:esmeral:442718169585680387>`;
                            quantidade = 2000;
                            dayRDM = Math.round(Math.random() * parseInt(quantidade) + 1);
                            documento.emerald += dayRDM;
                            documento.save();
                        }
                       
                        let user = message.mentions.users.first() || message.author;
                        message.channel.send(`<a:Coin:435849790610472960> Trabalhando...`).then(function(value) {
                            setTimeout(function() {
                                const embed = new Discord.RichEmbed()
                                    .setThumbnail(user.avatarURL)
                                    .setAuthor(message.author.username, message.author.avatarURL)
                                    .addField(`**Salário!**`,` <a:festa:461509706763206657> Você ganhou: **${dayRDM} ${premio}** .`, false)
                                    .setColor('#36393E');
                                value.edit(embed);
                            }, 3000);
                        });
                    } else {
                             let restante = current - Date.now();
                let humanize = require('humanize-duration');
                let humanize_config = {
                 language: 'pt',
                 conjunction: ' e ',
                 serialComma: false,
                 round: true,
                 units: ['h', 'm', 's']
    };
    
    message.channel.send(`<a:swbouce:488754110175379456> **│** ${message.author}! Você precisa esperar **${humanize(restante, humanize_config)}** para trabalhar de novo.`);
}
                } else {
                    let pessoa = new database.Users({
                        _id: message.author.id,
                        level: 0,
                        xp: 0,
                        coins: 0,
                        rubys: 0,
                        containers: 0,
                        nextDay: 0,
                        daily: 0,
                    });
                    pessoa.save();
                }
            });
        });
    }
};
