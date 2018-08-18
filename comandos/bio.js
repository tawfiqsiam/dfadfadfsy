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
        let amount = parseInt(suffix[0], 10)
        if (!amount || amount < 2 || amount > 160) 
        return message.reply('O limite máximo de caracteres é: `160`');
        documento.bio = amount;
        message.delete();
        message.reply(`Biografia Alterada para: \`\`${documento.bio}\`\` `);
        documento.save();
    } else {
      var pessoa = new database.Users({
                        _id: message.author.id,
                        name: message.author.username, 
                        discrim: "#" + message.author.discriminator,
                        bio: "Sobre você",
                        rpup: 0,
                        adv: 0,
                        coins: 0,
                        rubys: 0,
                        containers: 0,
                        emerald: 0,
                        goldbox: 0,
                        nv: 0,
                        nvxp: 0,
                        profile_background: 'https://cdn.discordapp.com/attachments/442346665052209153/469407730797641738/SysopLogoLight.png',
                      
                    })
                    pessoa.save()
                    message.reply("<:LikeSysop3:476062023629799424> **Histórico criado e salvo!** Use novamente este comando!");
    }

});
  })
}};
