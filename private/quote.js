exports.run = (client, message, args) => { 
    message.delete(1000);



  const Discord = require("discord.js");
  var moment = require('moment');
    	moment.locale('pt-BR'); 
 

  function quote(messageInfo) {
    var text = messageInfo.content
    var author = messageInfo.author
    var tag = author.tag
    var icon = author.displayAvatarURL
    var time = new Date(messageInfo.createdTimestamp);

    const quoteEmbed = new Discord.RichEmbed()
      .setColor(0x4959e9)
      .setThumbnail(icon)
      .setAuthor(tag)
      .setDescription(`${moment(time).format('LLLL')}\n\n${text}`)

    return message.channel.send({
      embed: quoteEmbed
    });

  }

  if (args.length == 1) {
    try {
      message.channel.fetchMessage(args[0])
        .then(message => quote(message))
    } catch (error) {
      console.log(error)
    }
  }

  if (args.length == 2) {
    try {
      client.channels.get(args[1]).fetchMessage(args[0])
        .then(message => quote(message))

    } catch (error) {
      console.log(error)
      return message.reply(":warning: houve um erro ao encontrar essa mensagem. Por favor, verifique se você tem o ID de mensagem adequada.")
    }

  }

  if (args.length == 0) {
    return message.reply("você deve fornecer um ID de mensagem (e um ID de canal se a mensagem estiver em outro canal).")
  }

  if (args.length >= 3) {
    return message.reply("você deve fornecer apenas um ID de mensagem (e um ID de canal se a mensagem estiver em outro canal).")
  }

};
