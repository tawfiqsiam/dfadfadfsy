module.exports = {
    description: 'Alterar apelido do Bot',
    categoria: 'Moderação',
    cooldown: 5,
    task(client, message, suffix) {

let database = require("../database.js");  
database.Bloqueio.findOne({
                "_id": message.author.id
            }, function (erro, documento) {
                if(documento) {
         if (!['244489368717230090','282504900552949760'].includes(message.author.id))
                
 if ([documento.block].includes(message.author.id)) return message.reply("<:FalseSysop3:462306755150479372> Você foi bloqueado de usar comandos do **SysopCorp**, se você acha que isso é um engano nos contate! `! Till#8514 | Natsu#7777`");
        
}
        
        if (!message.member.hasPermission('MANAGE_NICKNAMES'))
        return message.reply(':no_entry_sign: Este comando está disponível apenas para cargos de Gerenciamento de apelidos.');
        
        message.guild.me.edit({nick:suffix}).then(member =>
        message.reply(`Meu novo apelido é ** ${member.nickname}**`)).catch(console.error);
        })
        }
    }
