const Discord = require("discord.js");
const db = require("../database.js");
module.exports = { task(client, message, suffix) { 
    
let user = message.mentions.users.first() ? message.mentions.users.first() : message.author;
db.Users.findOne({"_id": user.id}, function(erro, sysop) {
if (sysop) {    

db.Bloqueio.findOne({"_id": message.author.id}, function (erro, documento) {
                if(documento) {
         if (!['244489368717230090'].includes(message.author.id))
                
 if ([documento.block].includes(message.author.id)) return message.reply("<:FalseSysop3:462306755150479372> Você foi bloqueado de usar comandos do **Sysop**, se você acha que isso é um engano nos contate!`");
        
}
})
  
   // if (!['244489368717230090'].includes(message.author.id)) return message.channel.send(`<:sysalerta:469789950938841088> Opa ${message.author}, comando em manutenção!`);
 
    const embed = new Discord.RichEmbed()
    .setThumbnail(user.avatarURL)
    embed.setDescription(`👤Saldo de **${user.username}**\n-------------------------------------`);
   embed.addField(`<:Sycoins:469789351358889984> Sycoins`, `\`\`\`http\n${Number(sysop.coins).toLocaleString()}\`\`\` `,true)
   embed.addField(`<:xcrystal:482650560974159883> SY CRYSTAL`, `\`\`\`http\n${Number(sysop.rubys).toLocaleString()}\`\`\``,true)
   embed.addField(`<a:esmeral:442718169585680387> Esmeralda`, `\`\`\`http\n${Number(sysop.emerald).toLocaleString()}\`\`\``, false)
   embed.addField(`<:Container_gold:470318996206649364> Goldbox's`, `\`\`\`http\n${Number(sysop.goldbox).toLocaleString()}\`\`\``,true)
   embed.addField(`<:Container_frontier_zero:470320615660847175> Containers`, `\`\`\`http\n${Number(sysop.containers).toLocaleString()}\`\`\``,true)
    embed.setColor('#36393E');
    message.channel.send({embed});
    
} else {
    var pessoa = new db.Users({
                    _id: user.id,
                    level: 0,
                    xp: 0,
                    coins: 0,
                    rubys: 0,
                    containers: 0,
                    goldbox: 0,
                    emerald: 0,
                    
                });

                pessoa.save();
                message.reply(`use o comando novamente`);
            }
    
});
}};
