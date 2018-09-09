const Discord = require('discord.js');

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
	    
	    
        message.channel.guild.fetchInvites().then(invites => {
            if (!invites) return message.reply('Este servidor não possui convites!');
        
            
               
            var rank    = invites.array().sort((a, b) => b.uses - a.uses).slice(0, 5);
            var primeiro  = rank[0];
            var segundo   = rank[1];
            var terceiro  = rank[2];
            var quarto    = rank[3];
            var quinto    = rank[4];
            if (!primeiro) return message.reply('Este servidor não possui convites para ter um rank!');
            if (!segundo) return message.reply('Este servidor não possui convites para ter um rank!');
            if (!terceiro) return message.reply('Este servidor precisa de 5 convites gerados para obter um rank!');
            if (!quarto) return message.reply('Este servidor precisa de 5 convites gerados para obter um rank!');
            if (!quinto) return message.reply('Este servidor precisa de 5 convites gerados para obter um rank!');
        
            let total = primeiro.uses + segundo.uses + terceiro.uses + quarto.uses + quinto.uses;
          
            message.channel.send({
                embed: {
				color: 0x4959e9,
				description:
`Os top 5 recrutadores de nosso servidor

\`\`1º\`\` :first_place: \`\`${primeiro.inviter.username}\`\` Convidou \`\`${primeiro.uses}\`\` pessoas
\`\`2º\`\` :second_place: \`\`${segundo.inviter.username}\`\` Convidou \`\`${segundo.uses}\`\` pessoas
\`\`3º\`\` :third_place: \`\`${terceiro.inviter.username}\`\` Convidou \`\`${terceiro.uses}\`\` pessoas
\`\`4º\`\` :medal: \`\`${quarto.inviter.username}\`\` Convidou \`\`${quarto.uses}\`\` pessoas
\`\`5º\`\` :medal: \`\`${quinto.inviter.username}\`\` Convidou \`\`${quinto.uses}\`\` pessoas
...............................................................................................
💢 **Total recrutados** ${total} | 💢 **Total convites:** ${invites.size}
                
            `
                }
                });
           /* const embed = new Discord.RichEmbed()
                .setTitle("Top 5 Recrutadores")
                .setDescription("Os top 5 recrutadores de nosso servidor")
                .addField(`Primeiro`, `\`\`1º\`\` \`\`🏆\`\` **${primeiro.inviter.username}**\nConvidou \`\`${primeiro.uses}\`\` pessoa (s)`)
                .addField(`Segundo`, `\`\`2º\`\`  \`\`🏆\`\` **${segundo.inviter.username}**\nConvidou \`\`${segundo.uses}\`\` pessoa (s)`)
                .addField(`Terceiro`, `\`\`3º\`\`  \`\`🏆\`\` **${terceiro.inviter.username}**\nConvidou \`\`${terceiro.uses}\`\` pessoa (s)`)
                .addField(`Quarto`, `\`\`4º\`\`  \`\`🏆\`\` **${quarto.inviter.username}**\nConvidou \`\`${quarto.uses}\`\` pessoa (s)`)
                .addField(`Quinto`, `\`\`5º\`\`  \`\`🏆\`\` **${quinto.inviter.username}**\nConvidou \`\`${quinto.uses}\`\` pessoa (s)`)
                .addField(`Isso dá um total de:`, `\`\`💢\`\` \`\`${total}\`\` usuários recrutados.`, true)
                .addField(`Convites gerados`, `\`\`💢\`\` \`\`${invites.size}\`\` convites gerados.`, true)
                .setThumbnail("https://images.emojiterra.com/twitter/512px/1f3c6.png")
                .setColor('#f88600');
   
            message.channel.send({embed});*/
        });
 })
    }
    
};
