module.exports = {
    description: 'Ulitize esse comando para eu modificar suas palavras e frases ao contrário.',
    categoria: 'Entretenimento',
    task(client, message) {
        
let database = require("../database.js");  
database.Bloqueio.findOne({
                "_id": message.author.id
            }, function (erro, documento) {
                if(documento) {
         if (!['244489368717230090','282504900552949760'].includes(message.author.id))
                
 if ([documento.block].includes(message.author.id)) return message.reply("<:FalseSysop3:462306755150479372> Você foi bloqueado de usar comandos do **SysopCorp**, se você acha que isso é um engano nos contate! `! Till#8514 | Natsu#7777`");
        
}
        
        let reversed = message.content.split(' ').slice(1).join(' ').split('').reverse().join('');
        message.reply(reversed);
    })
    }
};
