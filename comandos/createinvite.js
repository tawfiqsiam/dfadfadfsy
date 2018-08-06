module.exports = {
    description: 'Gere um link de convites do servidor.',
    categoria: 'Moderação',
    task(client, message, suffix) {
        
let database = require("../database.js");  
database.Bloqueio.findOne({
                "_id": message.author.id
            }, function (erro, documento) {
                if(documento) {
         if (!['244489368717230090','282504900552949760'].includes(message.author.id))
                
 if ([documento.block].includes(message.author.id)) return message.reply("<:FalseSysop3:462306755150479372> Você foi bloqueado de usar comandos do **SysopCorp**, se você acha que isso é um engano nos contate! `! Till#8514 | Natsu#7777`");
        
}
        
if (!message.member.hasPermission('ADMINISTRATOR'))
return message.channel.send(":x: Você não tem permissão para utilizar este comando!");

var id = message.channel.id;
message.guild.channels.get(id).createInvite({
    maxAge: 0       //maxAge: 0 significa que el link sera permanente

}).then(invite =>  
    message.channel.send(` **Novo Convite gerado!** \n ${invite.url}`)
);
    })
}};
