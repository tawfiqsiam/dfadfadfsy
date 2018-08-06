const Discord = require('discord.js');

exports.run = (client, message, args)  => {
    
    var server = message.guild;
		const embed = new Discord.RichEmbed()
		.setThumbnail(server.iconURL)
        .setAuthor(message.author.username, message.author.avatarURL)
        .addField(`Executor:`, message.author.tag, true)
        .addField(`Comando usado:`, message.content,true)
        .addField(`Dentro do server:`,message.guild.name,true)
        .addField(`Canal onde foi Executado`,message.channel.name,true)
        .setFooter('SysopCorp ---- LOG COMANDOS ' + ' ---- ' + new Date())
        .setColor(0x4959e9);
    
    const blacklist = require('../Storange/blacklist.json')
if (blacklist[message.author.id]) {
        message.channel.send("Você foi bloqueado de usar comandos do bot!")
        return;
    }
    
    const translate = require('google-translate-api');
    let reason = args.slice(1).join(' ');
      if (reason.length < 1) return message.reply('Defina o idioma para eu traduzir');
    translate(`${message.content.replace(`sy!traduzir ${args[0]} `,"")}`, {to: `${args[0]}`}).then(res => {
        message.channel.sendMessage({
            "embed": {
              "description": "ㅤ",
              "color": 0x4959e9,
              "thumbnail": {
                "url": "https://i1.wp.com/tecword.com.br/wp-content/uploads/2017/06/Google-Translate-1024x1024.png?resize=480%2C480"
                },
              "author": {
                "name": message.author.username,
                "icon_url": message.author.displayAvatarURL
              },
              "fields": [
                {
                  "name": "<:SysopLogoEMOI:439565791357042700> Conteúdo a traduzir",
                  "value": "```\n" + message.content.replace(`a!traduzir ${args[0]} `,"") + "```",
                  "inline": false
                },
                {
                  "name": "<:tr:441396964941234176> Tradução",
                  "value": "```\n" + res.text + "```",
                  "inline": false
                }
              ]
            }
          });
    }).catch(err => {
        console.error(err);
        message.reply("O idioma não existe! :shrug::skin-tone-2: ")
    });
    }
