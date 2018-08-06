const Discord = require("discord.js");
const database = require('../database.js');
module.exports = {
  task(client, message, suffix) {

	database.Users.findOne({
      "_id": message.author.id
    }, function(erro, documento) {

      if (documento) {
        let user = message.mentions.users.size > 0 ? message.mentions.users.first() : message.author;
        const embed = new Discord.RichEmbed()
			.setThumbnail(`../Emblemas/Level${documento.level}.png`)
			.setAuthor(user.tag, user.avatarURL)
			.addField('Titulo Teste',`Frase teste`, true)
			.setColor(0x4959e9);
        
		message.channel.send({ embed });
      }});
      }
};