const request = require('request-promise-native');
const config  = require("../config.json");

module.exports = { 
  categoria: "Social",
  description: "Procure por uma live com o username Twitch. Mais Infos: **sy!twitch-live help**",
          task(client, message, suffix) {

let database = require("../database.js");  
database.Bloqueio.findOne({
                "_id": message.author.id
            }, function (erro, documento) {
                if(documento) {
         if (!['244489368717230090','282504900552949760'].includes(message.author.id))
                
 if ([documento.block].includes(message.author.id)) return message.reply("<:FalseSysop3:462306755150479372> Você foi bloqueado de usar comandos do **SysopCorp**, se você acha que isso é um engano nos contate! `! Till#8514 | Natsu#7777`");
        
}
		  
suffix = suffix.split(' '); 
 if(suffix[0] == "help"){
      message.reply('**Use:** `sy!twitch-live` +  `<username do twitch>`');
      return;
    }
          

    let options = {
      headers: {
        'Client-ID': config.twitchClientID,
        'Accept': 'Accept: application/vnd.twitchtv.v3+json'
      },
      url: `https://api.twitch.tv/kraken/streams/${suffix}`,
      json: true
    };
	
	request(options).then(response => {

    let author, fields, image, footer;
   

    if (response.stream === null) {
      return message.reply('This user is not LIVE <:twitch:430890176802193409>');
    }
  
    author = {
      name: response.stream.channel.display_name,
      url: response.stream.channel.url,
      icon_url: response.stream.channel.logo

    };
    fields = [
      {
        name: 'Game',
        value: response.stream.game,
        inline: true
      },
      {
        name: 'Viewers',
        value: response.stream.viewers,
        inline: true
      },
      {
        name: 'Average FPS',
        value: response.stream.average_fps,
        inline: true
      },
      {
        name: 'Delay',
        value: response.stream.delay,
        inline: true
      },
      {
        name: 'Channel created at',
        value: new Date(response.stream.channel.created_at),
        inline: false
      },
      
    ];
    image = {
      url: response.stream.preview.large
    };
    footer = {
      text: 'SysopCorp Twitch -  Live'
    };
     thumbnail: {
        url: `https://i.imgur.com/gYf1BEK.png`;
      }

    message.channel.send({
      embed: {
        color: 0x7c248e,
        author: author,
        title: response.stream.channel.status,
        url: response.stream.channel.url,
        fields: fields,
        image: image,
        footer: footer,
        timestamp: new Date(response.stream.created_at)
      }
    });
	}).catch(e => console.log(e));
	})
  }};
