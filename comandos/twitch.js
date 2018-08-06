
const config  = require("../config.json");
const Discord = require('discord.js');
const fetch = require('node-fetch');

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
        
    let apiKey = config.twitchClientID;
    if (!suffix) {
        return message.reply('You must give me a twitch channel for stats');
    }
    
     fetch('https://api.twitch.tv/kraken/users/' + suffix + '?client_id=' + apiKey)
    .then(res => {
        return res.json();
    }).then(json => {
        fetch('https://api.twitch.tv/kraken/channels/' + suffix + '?client_id=' + apiKey)
          .then(res => {
              return res.json();
          }).then(json2 => {
              if (json.status === 404) {
                  return message.reply(`Channel: \`\`${suffix}\`\` does not exist.`).catch(e => console.log(e));
              }
  
              
              const embed = new Discord.RichEmbed()
              .setAuthor('Twitch Info ')
              .addField('Name', json.name, true)
              .addField('Since', json.created_at, true)
              .addField('Total followers', Number(json2.followers).toLocaleString(), true)
              .addField('Total views', Number(json2.views).toLocaleString(), true)
              .addField('Channel link', json2.url, true)
              .addField('**Has partner?**', json2.partner)
              .setColor(config.purple_sysop)
              .setThumbnail('https://i.imgur.com/gYf1BEK.png');

              message.channel.send({embed}).catch(e => console.log(e));
          }).catch(e => console.log(e));
    });
    })
    }
};
