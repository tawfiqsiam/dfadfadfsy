
module.exports = {
    categoria: 'Social',
    description: 'Mostro a thumbnail do servidor.',
     cooldown: 15,
    task(client, message, suffix) {
  message.delete(); 
    message.channel.send({embed: {description: suffix, thumbnail: {url: message.guild.iconURL}, color: 0xd70000}});
    }
};