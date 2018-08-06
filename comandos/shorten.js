
const shorten = require('isgd');

module.exports = {
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
if (!suffix[0]) return message.channel.send('Use: `sy!shorten` + `<url>` + `<Texto>` ');
if (!suffix[1]) {

shorten.shorten(suffix[0], function(res) {
if (res.startsWith('Error:')) message.channel.send('Por favor, insira um URL válido');

message.channel.send(`**<${res}>**`);
});

} else { 

shorten.custom(suffix[0], suffix[1], function(res) {
if (res.startsWith('Error:')) return message.channel.send(`**${res}**`);
message.channel.send(`**<${res}>**`);
});

}
})
 }

};
