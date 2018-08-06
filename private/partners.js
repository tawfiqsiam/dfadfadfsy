const database = require("../database.js");

exports.run = (client, message, args) => {
database.Bloqueio.findOne({
                "_id": message.author.id
            }, function (erro, documento) {
                if(documento) {
         if (!['244489368717230090','282504900552949760'].includes(message.author.id))
                
 if ([documento.block].includes(message.author.id)) return message.reply("<:FalseSysop3:462306755150479372> Você foi bloqueado de usar comandos do **SysopCorp**, se você acha que isso é um engano nos contate! `! Till#8514 | Natsu#7777`");
        
}

      const Discord = require("discord.js");
      const embed = new Discord.RichEmbed();
      embed.setDescription(`**SysopCorp | Infos Partners**
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n
\`\`\`Markdown\n# Informações gerais para Parceiros.\`\`\`\n
A Parceria com o SysopCorp é uma comunidade de beneficíos para usuários que utilizam o mesmo. Sendo parceiro você pode desfrutar de comandos VIPS em qualquer servidor em que o bot estiver. Sendo parceiro você ganha os seguintes beneficíos, requisitos:\n
<:DiscordPartner:467546781538975754> | Precisa estar no [\`servidor Oficial\`](https://discord.gg/6HwTNBT) do Reth & Sysop;
<:DiscordPartner:467546781538975754> | É preciso contribuir com o bot no minímo $ 5,00 reais;
<:DiscordPartner:467546781538975754> | Obter a tag VIP no servidor Oficial do Reth & Sysop;
<:DiscordPartner:467546781538975754> | Acesso a novos comandos VIPS.\n

\`IMPORTANTES!\` O parceiro deve manter a contribuição mensal para o bot, caso contrário, o mesmo perde o benefício até a renovação do mesmo.

[\`Solicitar Parceria\`](https://goo.gl/forms/k2qB9R3559DkiHwD3)\n
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
Sysop 2017-2018 | Adriano e Natsu | Todos os direitos reservados.`);
      embed.setThumbnail('https://cdn.discordapp.com/attachments/439176584000307210/447078986699374612/SysopPartners.png');
      embed.setColor('#23272A');
      message.channel.send({embed});
      })
  };
