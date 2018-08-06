module.exports = {
    description: 'Crie um Webhook através de comando em um canal.',
    categoria: 'Social',
    task(client, message, suffix) {
        message.delete(1000)

let database = require("../database.js");  
database.Bloqueio.findOne({
                "_id": message.author.id
            }, function (erro, documento) {
                if(documento) {
         if (!['244489368717230090','282504900552949760'].includes(message.author.id))
                
 if ([documento.block].includes(message.author.id)) return message.reply("<:FalseSysop3:462306755150479372> Você foi bloqueado de usar comandos do **SysopCorp**, se você acha que isso é um engano nos contate! `! Till#8514 | Natsu#7777`");
        
}
        
      if (!message.member.hasPermission('ADMINISTRATOR'))
        return message.reply(':no_entry_sign: Desculpe, este comando está disponível apenas para cargos administrativos do servidor.');
      
  let args = message.content.split(" ").slice(1);
  

const nameAvatar = args.join(" ");
const linkCheck = /https?:\/\/.+\.(?:png|jpg|jpeg|(url))/gi;
if (!linkCheck.test(nameAvatar)) return message.reply("Você deve inserir um link de imagem. (Formatos: PNG. JPG, JPEG.)");
const avatar = nameAvatar.match(linkCheck)[0];
const name = nameAvatar.replace(linkCheck, "");
message.channel.createWebhook(name, avatar)
  .then(webhook => webhook.edit(name, avatar)
    .catch(error => console.log(error)))
  .then(wb => message.author.send(`Aqui está seu Webhook https://canary.discordapp.com/api/webhooks/${wb.id}/${wb.token}\n\nMantenham isso seguro, assim evitará ser " explorado ".`)
    .catch(error => console.log(error)))
  .catch(error => console.log(error));
  
  message.reply('**Webhook criado, check suas mensagens diretas.**');
    })
    }};
