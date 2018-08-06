
const sm = require('string-similarity');

module.exports = {
    
 task(client, message, suffix) {

let database = require("../database.js");  
database.Bloqueio.findOne({
                "_id": message.author.id
            }, function (erro, documento) {
                if(documento) {
         if (!['244489368717230090','282504900552949760'].includes(message.author.id))
                
 if ([documento.block].includes(message.author.id)) return message.reply("<:FalseSysop3:462306755150479372> Você foi bloqueado de usar comandos do **SysopCorp**, se você acha que isso é um engano nos contate! `! Till#8514 | Natsu#7777`");
        
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
