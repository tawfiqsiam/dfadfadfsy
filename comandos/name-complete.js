
const sm = require('string-similarity');

module.exports = {
    
 task(client, message, suffix) {

let database = require("../database.js");  
database.Bloqueio.findOne({
                "_id": message.author.id
            }, function (erro, documento) {
                if(documento) {
         if (!['244489368717230090'].includes(message.author.id))
                
 if ([documento.block].includes(message.author.id)) return message.channel.send(`<:xguardian:476061993368027148> | ${message.author}! Você foi bloqueado de usar comandos do **Sysop**, se você acha que isso é um engano nos contate! `);
        
}
     
suffix = suffix.split(' '); 
if(!suffix[0]) return message.channel.send('Por favor, insira um texto');

let members = [];
let indexes = [];

message.guild.members.forEach(function(member){
members.push(member.user.username);
indexes.push(member.id);
});


let match = sm.findBestMatch(suffix.join(' '), members);
let username = match.bestMatch.target;
let member = message.guild.members.get(indexes[members.indexOf(username)]);

message.channel.send('Você quer dizer' + member);
})
}};
