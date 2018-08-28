module.exports = { task(client, message, suffix) {
let db = require('../database.js');
db.Bloqueio.findOne({
                "_id": message.author.id
            }, function (erro, documento) {
                if(documento) {
         if (!['244489368717230090','282504900552949760'].includes(message.author.id))
                
 if ([documento.block].includes(message.author.id)) return message.reply("<:xguardian:476061993368027148> Você foi bloqueado de usar comandos do **Sysop**. Se acha que é um engano nos contate!`");
        
}


const Discord = require("discord.js");  
const Sysop = '🔇 Sysop Mute'

let user = message.mentions.users.first();
let role = message.guild.roles.find('name', Sysop)
let args = suffix.split(' '); 
let sysop =  args.slice(1).join(' ')
 
 ? args.slice(1).join(' ')
 :  "Não especificado.";


if (!message.member.hasPermission("MUTE_MEMBERS")) 
return message.channel.send(`<:xguardian:476061993368027148> Opa${message.author}! Você não tem a permissão **Silenciar Membros** !`);

let id = message.mentions.users.first()

    ? message.mentions.users.first().id 

    : args
    ? args[0]
    : null;
if (!id) return message.reply('<:sysalerta:469789950938841088> Mencione alguém ou especifique um ID.');


if (message.guild.member(user).roles.has(role)) 
return message.channel.send(`<:sysalerta:469789950938841088> Woww ${message.author}! Não consegui desmutar este usuário, verifique minhas permissões.`);

message.guild.member(user).removeRole(role);
message.channel.send(`\`🔔\` | Usuário ${user} foi desmutado por ${message.author}. **Motivo:** ${sysop}`);
  
            });
}};
