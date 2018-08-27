const Discord = require('discord.js');

module.exports = {
	task(client, message, suffix) {
		
let database = require("../database.js");  
database.Bloqueio.findOne({
                "_id": message.author.id
            }, function (erro, documento) {
                if(documento) {
         if (!['244489368717230090'].includes(message.author.id))
                
 if ([documento.block].includes(message.author.id)) return message.reply("<:FalseSysop3:462306755150479372> Você foi bloqueado de usar comandos do **SysopCorp**, se você acha que isso é um engano nos contate! `! Till#8514 | Natsu#7777`");
        
}
		

let paginas = ["Seja bem-vindos a Loja do Sysop, aqui você pode fazer suas compras a vontade para evoluir seu perfil no bot."] 
let pages = [`<:commands:482758132775256064> | Comprar comandos\n<:sale:482758173070196737> | Comprar moedas\n<:btnvoltar:461495764443725844> | Menu inicial.`];
let page = 1;

const embed = new Discord.RichEmbed()
.setColor('#36393E')
//.setThumbnail('https://cdn.discordapp.com/attachments/439176584000307210/469847812709023745/SysopLogo.png')
.setTitle((paginas[page-1]))
.setDescription(pages[page-1])
.setFooter(`Página ${page} de  3`)
message.channel.send(embed).then(function(value) {
  
  
  setTimeout(function() {
  value.react(":commands:482758132775256064"); //Comandos
  }, 1000)
  setTimeout(function() {
      value.react(":sale:482758173070196737"); //Moedas
  }, 1500)
setTimeout(function() {
  value.react(":btnvoltar:461495764443725844"); //Volta menu inicial
}, 2000)
    

  /*voltar menu*/ const backFilter = (reaction, user) => reaction.emoji.id === '461495764443725844' && user.id === message.author.id;
  /*comandos*/    const comandosFilter = (reaction, user) => reaction.emoji.id === `482758132775256064` && user.id === message.author.id;
  /*moedas*/      const moedaFilter = (reaction, user) => reaction.emoji.id === '482758173070196737' && user.id === message.author.id;


  //const music = value.createReactionCollector(musicFilter);

  const h1 = value.createReactionCollector(comandosFilter);
  const h2 = value.createReactionCollector(moedaFilter);
  const h9 = value.createReactionCollector(backFilter);



  
//adm
h1.on('collect', r => {
if(page === 2) return;
page++;
embed.setTitle("<:commands:482758132775256064> | Comandos para comprar");
embed.setDescription(`\`\`\`https\nUso: sy!by <parâmetro

Parâmetros:
 
 Comando setbackground - Com este comando é possível modificar seu background do perfil.
 Preço: 35.650 Sycoins
 
 Comando bio - Com este comando é possível alterar sua descrição no perfil.
 Preço: 200 Esmeraldas

 Comando goldbox - Este comando permite você soltar caixas douradas aleatoriamente dentro do seu servidor vindo como premio para qualquer um que pegar até 1000 coins.
 Preço 20.900 SY CRYSTAL
 
 Comando setborder - Este comando permitirá que você mude o quadro do seu perfil.
 Preço: 10.000 SY CRYSTAL\`\`\``);

embed.setFooter(`Pagina 2 de 3`);
value.edit(embed).then(m => { setTimeout(() => { m.delete() }, 5 * 60 * 1000) });
});


//utilidade
h2.on('collect', r => {
  if(page === 3) return;
  page++;
  embed.setTitle("<:sale:482758173070196737> | Comandos Moeda");
embed.setDescription(`\`\`\`https\nUso: sy!by <parâmetro>


Legendas:

ES = ESMERALDAS\nSC = SY CRYSTAL\nSCS = SY COINS\nGX = GOLDBOX\nCT = CONTAINERS\n\nParâmetros:\n
[ Nv1 ] 100 ES → 5k SCS
[ Nv2 ] 1k ES → 15k SCS
[ Nv3 ] 1k SC → 2k SCS
[ Nv4 ] 10k SC → 30k SCS
[ Nv5 ] 100k SCS → 500 ES
[ Nv6 ] 5 CT → 35 GX
[ Nv7 ] 100 GX → 20 CT
\`\`\``)
embed.setFooter(`Pagina 3 de 3`);
value.edit(embed).then(m => { setTimeout(() => { m.delete() }, 5 * 60 * 1000) });
  
})




h9.on('collect', r => {
  if(page === 1) return;
  page++;
  embed.setTitle("MENU LOJA");
  embed.setDescription(`<:commands:482758132775256064> | Comprar comandos\n<:sale:482758173070196737> | Comprar moedas\n<:btnvoltar:461495764443725844> | Menu inicial.`);
  embed.setFooter(`Pagina 1 de 3`);
  value.edit(embed).then(m => { setTimeout(() => { m.delete() }, 5 * 60 * 1000) });
  
});
}).catch(e => console.log(e));
	});
    }};
