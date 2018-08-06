  const translate = require('google-translate-api');
  
  module.exports =  {
         task(client, message, suffix) {
    let reason = suffix[1];
      if (reason.length < 1) return message.reply('**Diga o idioma e oque devo traduzir!**');
    translate(`${message.content.replace(`s&traduzir ${suffix[0]} `,"")}`, {to: `${suffix[0]}`}).then(res => {
        message.channel.sendMessage({
            "embed": {
              "description": "ㅤ",
              "color": 55512,
              "thumbnail": {
                "url": "https://49.media.tumblr.com/371352719b572ca99e9413330c264622/tumblr_o0k3wjtu8M1sv5krro1_500.gif"
              },
              "author": {
                "name": message.author.username,
                "icon_url": message.author.displayAvatarURL
              },
              "fields": [
                {
                  "name": "📱 Antes:",
                  "value": "```\n" + message.content.replace(`sy!translater ${suffix[0]} `,"") + "```",
                  "inline": true
                },
                {
                  "name": " 📲 Depois:",
                  "value": "```\n" + res.text + "```",
                  "inline": true
                }
              ]
            }
          });
    }).catch(err => {
        console.error(err);
        message.reply("**O idioma que você está tentando executar parece não existir.💔**")
    });
    }};