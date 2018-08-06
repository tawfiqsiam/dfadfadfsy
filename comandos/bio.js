const database = require("../database.js");

module.exports = { categoria: 'Social', description: 'Altere sua biografia no seu perfil personalizado', task(client, message, suffix) {

database.Bloqueio.findOne({
                "_id": message.author.id
            }, function (erro, documento) {
                if(documento) {
         if (!['244489368717230090','282504900552949760'].includes(message.author.id))
                
 if ([documento.block].includes(message.author.id)) return message.reply("<:FalseSysop3:462306755150479372> Você foi bloqueado de usar comandos do **SysopCorp**, se você acha que isso é um engano nos contate! `! Till#8514 | Natsu#7777`");
        
}

      suffix = suffix.split(' '); 
    database.Users.findOne({"_id":message.author.id},function(erro,documento){

    if (documento) {
        if(documento.bio_shoped === "no") return message.channel.send('Você não comprou o comando')
        if (!suffix) return message.reply('Escreva sua biografia...');
        documento.bio = `${message.content.replace("sy!bio","")}`;
        message.delete();
        message.reply(`Biografia Alterada para: \`\`${documento.bio}\`\` `);
        documento.save();
    } else {
            message.reply("⚠ Você não possui um perfi \n`INSTRUÇÕES` Para criar seu perfil, utilize  `sy!register ` ⚠");
    }

});
  })
}};
