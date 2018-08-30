module.exports = { task(client, message, args) {
let db = require("../database.js");
db.Bloqueio.findOne({"_id": message.author.id}, function (erro, documento) {
                if(documento) {
         if (!['244489368717230090'].includes(message.author.id))
                
 if ([documento.block].includes(message.author.id)) return message.channel.send(`<:xguardian:476061993368027148> ${message.author}, você foi bloqueado de usar comandos do **Sysop**, se você acha que isso é um engano nos contate!`);
        
                }
if (!message.member.voiceChannel) 
return message.channel.send(`<:xguardian:476061993368027148> ${message.author} conecte-se a um canal de voz primeiro!`)

if (message.guild.members.get(client.user.id).voiceChannel) 
return message.channel.send(`<:xguardian:476061993368027148> Opa ${message.author}! já estou conectado no canal **${message.guild.members.get(client.user.id).voiceChannel.name}**`)

const voiceChannel = message.member.voiceChannel;
const permissions = voiceChannel.permissionsFor(client.user);
    if (!permissions.has('CONNECT')) {
      return message.channel.send(`<:xguardian:476061993368027148> Opa ${message.author}, Não consigo me conectar ao seu canal de voz, verifique se tenho as permissões adequadas!`);
    } 
    if (!permissions.has('SPEAK')) {
      return message.channel.send(`<:xguardian:476061993368027148> Opa ${message.author}! Eu não posso falar neste canal de voz, verifique se eu tenho as permissões adequadas!`);
    }

var asdasd = { "URL": "https://youtube.com/watch?v=j4jS5ZYp4kc" }
var ytdl = require('ytdl-core')
message.member.voiceChannel.join().then(connection => {

const dispatcher = connection.playStream(ytdl('https://www.youtube.com/watch?v=j4jS5ZYp4kc', { audioonly: true }))

    
})    
});
}};
