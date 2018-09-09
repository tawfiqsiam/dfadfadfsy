
module.exports = {
    description: 'Expulse usuário do servidor.',
    categoria: 'Moderação',
    task(client, message, suffix) {
        
let database = require("../database.js");  
database.Bloqueio.findOne({
                "_id": message.author.id
            }, function (erro, documento) {
                if(documento) {
         if (!['244489368717230090'].includes(message.author.id))
                
 if ([documento.block].includes(message.author.id)) return message.channel.send(`<:xguardian:476061993368027148> | ${message.author}! Você foi bloqueado de usar comandos do **Sysop**, se você acha que isso é um engano nos contate! `);
        
}

let user = message.mentions.users.first();
let razon = suffix.split(' ').slice(1).join(' ');

var perms = message.member.hasPermission("KICK_MEMBERS");

if(!perms) return message.channel.send("`Error` `|` Você não tem permissão para utilizar este comando.");
if (message.mentions.users.size < 1) return message.reply('Você deve mencionar alguém.').catch(console.error);

const adriano = message.guild.member(user)
if (adriano.highestRole.position >= message.member.highestRole.position) return message.reply("Você não pode expulsar este usuário pois seu cargo é igual ou menor do que o mesmo.")        
        
if (!razon) return message.channel.send('Escreva um Motivo, `sy!kick @username [motivo]`');
if (!message.guild.member(user).kickable) return message.reply('Falha no comando.');
     
message.guild.member(user).kick(razon);
message.channel.send(`**${user}** foi kick do servidor. Motivo: ${razon}.`);
    })
}};
