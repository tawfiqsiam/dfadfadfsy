const Discord = require("discord.js");
 var imgur = require("imgur")
   imgur.setAPIUrl('https://api.imgur.com/3/');
   imgur.getAPIUrl();



module.exports = {
        task(client, message) {
     if(message.attachments.size < 1) {
       message.channel.send('Envie uma imagem para começar..')
     } else {

      //

       if(message.attachments.first().url.endsWith('png') || message.attachments.first().url.endsWith('jpg') || message.attachments.first().url.endsWith('gif')) {
         imgur.uploadUrl(message.attachments.first().url).then(function (json) {
          		 var rpts = ['https://i.imgur.com/OxHKeTw.gif'];
             var link = rpts[Math.floor(Math.random() * rpts.length)];
		  const embed = new Discord.RichEmbed() 

          .setTitle("<:successpngsuccessiconimage231944:413149856199213056> Imagem Upada!")
          .setThumbnail(link)
          .setDescription(`<:upload:413149547737513985> Aqui está sua imagem \n` + json.data.link)
          .setImage(json.data.link)
          .setColor(0x4959e9);

          message.channel.send({embed});
         }).catch(function (err) {

          //
          
           message.channel.send('Falha ao tentar enviar...')
         })
       } else {

//
         message.channel.send('Só Suporto arquivos png, jpg e gif...')
       }
     }
    }};