const Discord = require("discord.js");
 const errors = require("../utils/errors.js");
module.exports = {
 task(client, message, suffix) {
 cooldown: 300,          
 message.delete();
 
 suffix = suffix.split(' '); 
 if(suffix[0] == "help"){
      message.reply('**Use:** `sy!support@botsysop` +  `<user>` +  `<reason>`');
      return;
    }

    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(suffix[1]));
    if(!rUser) return message.channel.send("Não foi possível encontrar o usuário!");
    

    
    let rreason = suffix.join(" ").slice(22);
    if(!rreason) return errors.noReason(message.channel);
    
    let reportEmbed = new Discord.RichEmbed()
    .setDescription("Nova Mensagem | Support ")
    .setColor("0x4959e9")
    .addField("Mensagem de:", `${message.author} ID: \`\`${message.author.id}\`\` `)
    .addField("Mensagem:",` \`\`${rreason}\`\` `)
    .addField("Enviado em", message.createdAt);
    let supportchannel = message.guild.channels.find(`name`, "support");
    if(!supportchannel) return message.channel.send("Algo inesperado aconteceu. Tente novamente mais tarde"); //Quando o canal support não é encontrado


    message.delete().catch(O_o=>{});
    message.channel.send(`${rUser} mensagem enviada! Nosso Support irá entrar em contato.`);
    client.guilds.get('307956208042770433').channels.get('437683400258748417').send(reportEmbed);
    supportchannel.send(reportEmbed);
      
}

      
    };