
module.exports = {
    description: 'Anuncie com o perfil do bot em qualquer canal.',
    categoria: 'Moderação',
    task(client, message, suffix) {
         message.delete(1000);
           
let database = require("../database.js");  
database.Bloqueio.findOne({
                "_id": message.author.id
            }, function (erro, documento) {
                if(documento) {
         if (!['244489368717230090'].includes(message.author.id))
                
 if ([documento.block].includes(message.author.id)) return message.channel.send(`<:xguardian:476061993368027148> | ${message.author}! Você foi bloqueado de usar comandos do **Sysop**, se você acha que isso é um engano nos contate! `);
        
}
           
       if (!message.member.hasPermission('ADMINISTRATOR'))
return message.channel.send(":x:Você não tem permissão para utilizar este comando!");
       
suffix = suffix.split(' '); 
 if(suffix[0] == "help"){
      message.reply('**Use:** `sy!anuncie` +  `<ID do canal para ser anunciad>` +  `<Texto de anúncio>`');
      return;
    }
       
       let args = message.content.split(' ').slice(1); //Obtiene el contenido del mensaje y lo separa en partes.

        let channel = args[0]; // Selecciona el primer valor en args.
        let content = args.slice(1).join(' '); // Elimina el primer valor y mantiene el contenido.

        if(!channel || isNaN(channel)) return message.reply('Você não definiu um canal, ou se definiu, não é válido! Copie a ID do canal para definir!').catch(console.error);
        // Esto se activará si no se ha escrito la id de un canal, o si el valor no es un número.
        // Y detiene su ejecución incluso si no detecta contenido.
        if(!content) return message.reply('Você deve inserir uma mensagem para enviar.').catch(console.error);

        // Criamos um try/catch para detectar erros e evitar que o bot caia.
        try {
            let dest = client.channels.get(channel); // Obtemos canal de destino.

            if(!dest) return message.reply('Canal de **Texto** não encontrado');
            // Detiene la ejecución si no se encuentra el canal.

            dest.send('`Novo Anúncio:`\n' + content).then((msg) => { // Enviará mensagem ao destino.
                message.reply('anunciou para um canal. \n**Mensagem:** ' + content + '\n**Mensagem com destino a:** ' + msg.channel );
                // Y envia una confirmación.
            }).catch(console.error);
        } catch (error) {
            console.error(error);
            message.reply(' :warning: Ocorreu um erro ao enviar está mensagem.').catch(console.error);
            // Caso houver erro está parte se executará.
        }
    })
    }
};
