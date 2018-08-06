const Discord = require("discord.js");

module.exports = {
    categoria: 'Social',
    description: 'Tenha um acesso rápido no Tanki Online, use esse comando para acessar ao Jogo no navegador ou fazer o download do mesmo em diversos servidores.',
    task(client, message, suffix) {
        
  var rpts = ['https://media.giphy.com/media/3ohs4wb94nxfG8icRa/giphy.gif', 'http://tankionline.com/en/wp-content/uploads/2018/01/war-news.jpg'];
  var link = rpts[Math.floor(Math.random() * rpts.length)];
  
const embed = new Discord.RichEmbed()
    .setImage(link) 
    .setTitle('**Tanki Online** - GAME')
    .addField(' `TO-BR` ', `<:unnamed:412752176323231745> **Navegador** - [BR](http://tankionline.com/battle-br.html) • **Tanki Online Client US** [Download](http://s.us.tankionline.com/resources/client/3/win/tankionline_us.exe)`, false)
    .addField(' `TO-ES` ', `<:unnamed:412752176323231745> **Navegador** - [ES](http://tankionline.com/battle-es.html) • **Tanki Online Client US** [Download](http://s.us.tankionline.com/resources/client/3/win/tankionline_us.exe)`, false)
    .addField(' `TO-EN` ', `<:unnamed:412752176323231745> **Navegador** - [EN](http://tankionline.com/battle-en.html) • **Tanki Online Client EU** [Download](http://s.eu.tankionline.com/resources/client/3/win/tankionline_eu.exe)`, false)
    .setColor(0x4959e9);
message.channel.send({embed});
}};