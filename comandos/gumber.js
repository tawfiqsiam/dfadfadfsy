
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
        
        
if (!suffix) return message.channel.send('Escreva a quantia que você quer gerar\n\n`Exemplo` sy!randomnumber <número>\n`DEMO` sy!randomnumber 30, isso gerará um valor entre 0 á 30, assim para o número que você definir.');

         message.delete(1000); 
  		var result = Math.floor((Math.random() * suffix) + 1);
  		message.reply(` Seu número aleatório é  ${result} `);
 })
    }
};
