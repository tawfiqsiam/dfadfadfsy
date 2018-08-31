const Discord = require('discord.js');
const config = require('../config.json');

module.exports = {
    task(client, message, suffix) {

   if(message.author.id !== '244489368717230090') return message.reply("Apenas o proprietário do bot pode usar esse comando.");

        
          const ytdl = require('ytdl-core');  
  const search = require('youtube-search');
  
   search(suffix, {
               maxResults: 1,
               key: process.env.YT
           },(err, res) => {
          //Si hay error o no se encontraron resultado de la busqueda
         if (err) return console.log("Error");
          //if (!res[0]) return message.channel.send("Sem resultados.");
          
          //Obtiene el link de la busqueda
         // let url  = res[0].link;
          

           let vitas = 'https://www.youtube.com/watch?v=j4jS5ZYp4kc';  
          let voiceChannel = message.member.voiceChannel;
          voiceChannel.leave();
          voiceChannel.join()
            .then(connection => {
              const url = ytdl(vitas, { filter : 'audioonly' });
              const dispatcher = connection.playStream(url);
            });

     // message.channel.send('Reproduzindo agora: '+ url);
      message.delete();
          })}};
