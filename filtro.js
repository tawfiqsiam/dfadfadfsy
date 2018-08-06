module.exports = {
	task(client, message, suffix) {
		
    if (!['244489368717230090','282504900552949760'].includes(message.author.id)) 
return message.reply('Comando em fase `BETA` de teste, apenas usuários autorizados podem usar o mesmo.');  
    
			if (!message.member.hasPermission('ADMINISTRATOR', 'MANAGE_MESSAGES')) 
				return message.reply(':no_entry_sign: Desculpe, o comando **filter** está disponível apenas para usuários administrativos e gerenciadores de mensagens  do server.');
		
		let database = require('../database.js');
        let createAccount = id => {
         let servidor = new database.Guilds({
                _id: message.guild.id,
                autorole: '',
                sugestao: '',
                filterInvites: false,
                filterPrintscreen: '',
                filterWords: [],
                welcome: '',
                welcomeChannel: '',
                rremove: '',
                rremoveChannel: '',
                
            });
        servidor.save();
        return servidor;
    };


    createAccount(message.guild.id);
		database.Guilds.findOne({
			"_id": message.guild.id
		}, function(erro, documento) {
			if (!documento) return;

			if (!suffix)
				return message.channel.send('Você precisa especificar um filtro **Filtros Disponíveis:** `convites`');

			switch (suffix.split(' ')[0]) {
			case 'convites': {
					if (!documento) return;
    			if (!!documento.filterInvites)
    			    documento.filterInvites = !documento.filterInvites;
    			else 
    			documento.filterInvites = true;
    			
    		    documento.save();
    			return message.channel.send('Filtro de convites definido para ' + documento.filterInvites);
		    }
				
		
			}
			});
		}
};
