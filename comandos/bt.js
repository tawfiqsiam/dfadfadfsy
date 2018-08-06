module.exports = {
    description: 'Anuncie com o perfil do bot em qualquer canal.',
    categoria: 'Moderação',
    task(client, message, suffix) {
         message.delete(1000);
           
const Discord = require('discord.js');        
const database = require("../database.js");  
database.Bloqueio.findOne({
                "_id": message.author.id
            }, function (erro, documento) {
                if(documento) {
         if (!['244489368717230090','282504900552949760'].includes(message.author.id))
                
 if ([documento.block].includes(message.author.id)) return message.reply("<:FalseSysop3:462306755150479372> Você foi bloqueado de usar comandos do **SysopCorp**, se você acha que isso é um engano nos contate! `! Till#8514 | Natsu#7777`");
        
}
    
    suffix = suffix.split(' '); 
 if(suffix[0] == "help"){
      message.reply('**Use:** `sy!anuncie` +  `<ID do canal para ser anunciado>` +  `<Texto de anúncio>`');
      return;
    }

database.Guilds.findOne({ "_id": message.guild.id }, function (erro, doc) {

 if(doc) {  
      
    
 if (!doc.staffanuncio) 
 return message.reply(`Opa! Para usar o comando você deve definir a role Staff que usará o mesmo.`);    
    
         
var permission = message.guild.roles.find("id", doc.staffanuncio) 
if (permission == null) return message.channel.send(`<:FalseSysop3:462306755150479372> Wow! Você precisa ser <@&${doc.staffanuncio}> para criar anúncios`);
       
       let args = message.content.split(' ').slice(1); //Obtiene el contenido del mensaje y lo separa en partes.

        let channel = args[0]; // Selecciona el primer valor en args.
        let content = args.slice(1).join(' '); // Elimina el primer valor y mantiene el contenido.

        if(!channel || isNaN(channel)) return message.reply('Você não definiu a ID de um canal ou se definiu não é válida!').catch(console.error);
        // Esto se activará si no se ha escrito la id de un canal, o si el valor no es un número.
        // Y detiene su ejecución incluso si no detecta contenido.
        if(!content) return message.reply('Você deve inserir uma mensagem para enviar.').catch(console.error);

        // Criamos um try/catch para detectar erros e evitar que o bot caia.
        try {
            let dest = client.channels.get(channel); // Obtemos canal de destino.

            if(!dest) return message.reply('Canal de **Texto** não encontrado');
            // Detiene la ejecución si no se encuentra el canal.
            const embed = new Discord.RichEmbed().then((msg) => { 
            embed.setTitle('NOVO ANÚNCIO!')
            embed.setDescription(`${message.author.username} anunciou para um canal.`);
            embed.addField(`Mensagem com destino a:`, msg.channel);
            embed.addField(`Mensagem de anúncio:`, content);
            embed.setCorlor(0x4959e9);
            dest.send({embed});
            /*dest.send('`Novo Anúncio:`\n\n' + content).then((msg) => { // Enviará mensagem ao destino.
                message.reply(`anunciou para um canal. \n**Mensagem:** '${content}\n**Mensagem com destino a:** ${msg.channel}`);*/
                // Y envia una confirmación.
            }).catch(console.error);
        } catch (error) {
            console.error(error);
            message.reply(':warning: Ocorreu um erro ao enviar está mensagem.').catch(console.error);
            // Caso houver erro está parte se executará.
        }

}
    });
            });
}
};
