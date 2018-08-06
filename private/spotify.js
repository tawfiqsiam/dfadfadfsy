const Discord = require('discord.js'); 

exports.run = (client, message, args) => {
 
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
        
        client.guilds.get('412169234492293130').channels.get('451470780602122251').send({ embed });
	
  let user = message.mentions.users.first() || message.author; 
  if (user.presence.activity !== null && user.presence.activity.type === 'LISTENING' && user.presence.activity.name === 'Spotify' && user.presence.activity.assets !== null) { // This checks all of these if statements, and if they are all true, it runs the following.
  
    let trackIMG = `https://i.scdn.co/image/${user.presence.activity.assets.largeImage.slice(8)}`; 
    let trackName = user.presence.activity.details;
    let trackAuthor = user.presence.activity.state;
    let trackAlbum = user.presence.activity.assets.largeText; 
   
    const embed = new Discord.MessageEmbed() 
      .setAuthor('Spotify Track Info', 'https://cdn.discordapp.com/emojis/408668371039682560.png') 
      .setColor(0x1ED760)
      .setThumbnail(trackIMG)
      .addField('Song Name', trackName, true)
      .addField('Album', trackAlbum, true)
      .addField('Author', trackAuthor, false) 
      .addField('Listen to Track:', `[\`${trackURL}\`](trackURL)`, false); 
   
    message.channel.send(embed); 
  
   
  } else {
   
    message.channel.send('Este usário não está ouvindo Spotify!'); 
   
  }
 
 
};
