   const config = require('config.json');
   const comandos  = require('./utils/comandos.js');
        module.exports = {
            task(client, message, suffix) {
                
        let comando = message.content.replace(config.prefix, '').split(/ |\n/)[0]
        comando = comandos.get(comando.toLowerCase());                                   
		if (comando.usersOnCooldown.has(message.author.id))
			return message.reply(':warning: Você só pode utilizar este comando a cada ' + comando.cooldown + ' segundos!').then(sentMsg => sentMsg.delete(8000));
		else {
			comando.task(client, message, suffix);
			if (comando.cooldown) {
				comando.usersOnCooldown.add(message.author.id);
				setTimeout(() => {
					comando.usersOnCooldown.delete(message.author.id);
				}, comando.cooldown * 1000);
			}
		}
            
		    
		}};