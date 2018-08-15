const Discord = require("discord.js");
const db = require("../database.js");
module.exports = { task(client, message, suffix) { 
    
    if (!['244489368717230090'].includes(message.author.id)) return message.reply(`Opa, comando em fase \`BETA\` você ainda não pode usar ;(`)

    
let user = message.mentions.users.first() ? message.mentions.users.first() : message.author;
db.Users.findOne({"_id": user.id}, function(erro, sysop) {

database.Bloqueio.findOne({"_id": message.author.id}, function (erro, documento) {
                if(documento) {
         if (!['244489368717230090','282504900552949760'].includes(message.author.id))
                
 if ([documento.block].includes(message.author.id)) return message.reply("<:FalseSysop3:462306755150479372> Você foi bloqueado de usar comandos do **SysopCorp**, se você acha que isso é um engano nos contate! `! Till#8514 | Natsu#7777`");
        
}
    
    let verificado;
    if (!sysop.verificado) verificado = '';
    else verificado = `${sysop.verificado}`
    
    const embed = new Discord.RichEmbed()
    .setThumbnail(user.avatarURL)
    embed.setDescription(`Saldo de **${user.username}** ${verificado}\n\n
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
    
});
});
}};
