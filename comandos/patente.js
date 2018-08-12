const Discord = require("discord.js");
const db = require("../database.js");
module.exports = { task(client, message, suffix) {

let server = message.guild;
let user = message.mentions.users.size > 0 ? message.mentions.users.first().id : message.author;
let bio;
let patente;
let adv;    


db.Users.findOne({ "_id": user }, function(erro, sysop) {
if (sysop) {
    
if (!sysop.rpbio) bio = 'Nenhuma biografia ainda.';
else bio = `**${sysop.rpbio}**`;

if (!sysop.rpup)  patente = '';
else patente = `**${sysop.rpup}**`;
    
if (!sysop.adv)  adv = '0';
else adv = `**${sysop.adv}**`;    

const embed = new Discord.RichEmbed()
.setThumbnail(user.avatarURL)
.setAuthor(server.name)
.setTitle(`Carreira de ${user.username}`)
.setDescription(`\`🌟\` Patente: ${patente}\n\n\`🌟\` Biografia:\n${sysop.bio}\n\n\`🌟\` Advertências: ${adv}`)
.setColor('#36393E');
message.channel.send({embed});
 
          } else {
              var pessoa = new db.Users({
                        _id: message.author.id,
                        rpup: 0,
                        bio: '',
                        adv: 0,
                    }); 
                    pessoa.save();
                    message.reply(` ! Histórico criado. Use este comando novamente.`);
          }
     });
}};
