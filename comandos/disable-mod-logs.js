let reload = require('require-reload')(require),
    settings = require('../settings.json'),
    utils   = reload('../utils/utils.js');


module.exports = {
    categoria: 'Moderação',
    description: 'Desabilite o MOD-LOGS do servidor',
    task(client, message, suffix) {
        
        const blacklist = require('../Storange/blacklist.json')
if (blacklist[message.author.id]) {
        message.channel.send("Você foi bloqueado de usar comandos do bot!")
        return;
    }
        
if (!message.member.hasPermission('ADMINISTRATOR')) 
return message.reply(':no_entry_sign: Desculpe, este comando está disponível apenas para cargos administrativos do servidor.');

settings[message.guild.id].logging = "";
utils.save('settings', 'json', JSON.stringify(settings));
message.channel.send('Logs do servidor desativado.');
       
}};
