const Discord = require('discord.js');
const moment = require('moment');
moment.locale('pt-BR'); 

const cooldown = new Set();
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

    let args = suffix;
    message.delete();
    if (cooldown.has(message.author.id && message.guild.id)) {
        return message.channel.send('O envio de Support tem um tempo de **5 Minutos** Cooldown!');
    }
    if (args.length < 1) {
        return message.channel.send(`Defina sua mensagem para enviar ${message.author}`);
    }
    cooldown.add(message.author.id && message.guild.id);
    setTimeout(() => {
        cooldown.delete(message.author.id && message.guild.id);
    }, 300000);
    let guild = message.guild;
    let user = message.mentions.users.first() || message.author;
    //const envio = client.channels.get('462652881846403082');
    message.channel.send(`Hey, ${message.author}, sua mensagem chegou para os elfos. Uma análise será feita e, entramos em contanto com você o mais breve possível! Aqui está seu comprovante:`);
    const embed2 = new Discord.RichEmbed()
        .setAuthor(`Ticket de ${message.author.tag}`, message.author.displayAvatarURL)
        .addField('Ticket:', `**Ticket** ${user.discriminator}\n**Servidor:** ${guild.name}\n**Mensagem enviada:**\n${args}`)
        .setThumbnail(message.author.displayAvatarURL)
        .setFooter(`${moment().format('MMMM Do YYYY, h:mm:ss a')}`)
        .setColor(0x7df04d);
    message.channel.send({ embed: embed2 });
    const embed = new Discord.RichEmbed()
        .setAuthor(`Ticket de ${message.author.tag}`, message.author.displayAvatarURL)
        .addField('Ticket:', `**Report's Author:** ${message.author.tag}\n**Servidor:** ${guild.name}\n**Full report:** ${args}`)
        .setThumbnail(message.author.displayAvatarURL)
        .setColor(0x4959e9);
    client.guilds.get('412169234492293130').channels.get('462652881846403082').send({ embed })
        .catch(e => console.log(e));
    })
}};
