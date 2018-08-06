  exports.run = (client, message, args) => {
  
  const ID = "412169234492293130";
  let users = client.guilds.get(ID).members.get(message.author.id);
  if (!users) 
  return message.reply("Você não está no servidor oficial do SysopCorp");
  let role = client.guilds.get(ID).members.get(message.author.id).roles.find("id", "467669532916449290")
  if(!role)
  return message.channel.send('Você não é um parceiro! <:DiscordPartner:467546781538975754> Mais infos de como virar parceiro digite: sy!partners.');
  
  message.channel.send('Nha')
  };
