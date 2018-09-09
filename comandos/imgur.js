const Discord = require("discord.js");
 var imgur = require("imgur")
   imgur.setAPIUrl('https://api.imgur.com/3/');
   imgur.getAPIUrl();



module.exports = {
        task(client, message) {
     if(message.attachments.size < 1) {
	     
let database = require("../database.js");  
database.Bloqueio.findOne({
                "_id": message.author.id
            }, function (erro, documento) {
                if(documento) {
         if (!['244489368717230090'].includes(message.author.id))
                
 if ([documento.block].includes(message.author.id)) return message.channel.send(`<:xguardian:476061993368027148> | ${message.author}! Você foi bloqueado de usar comandos do **Sysop**, se você acha que isso é um engano nos contate! `);
        
}
})
	     
     message.channel.send('Envie uma imagem para começar..');
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
