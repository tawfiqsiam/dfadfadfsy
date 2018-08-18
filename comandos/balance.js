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
    let oficial;
    
    if (!sysop.me) oficial = `${sysop.me}`;
    else oficial = '';
    
    const embed = new Discord.RichEmbed()
    .setThumbnail(user.avatarURL)
    embed.setDescription(`Saldo de **${user.username}** ${oficial}\n\n
\`Moedas:\`
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
<:Sycoins:469789351358889984>  ${Number(sysop.coins).toLocaleString()} sycoins  |  <a:rubine:442715023878651905> ${Number(sysop.rubys).toLocaleString()} rubys\n
\`Moedas Raras:\`
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
<a:esmeral:442718169585680387> ${Number(sysop.emerald).toLocaleString()} esmeraldas\n
\`Utilitário:\`
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
<:Container_gold:470318996206649364> ${Number(sysop.goldbox).toLocaleString()} goldbox's
<:Container_frontier_zero:470320615660847175> ${Number(sysop.containers).toLocaleString()} containers`);
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
