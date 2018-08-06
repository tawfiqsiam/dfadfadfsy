module.exports = {
        task(client, message, suffix) {
        
 suffix = suffix.split(' '); 
 if(suffix[0] == "-v"){
      message.reply('`SysopCorp` atualizado! Versão 2.3.0');
      return;
    }
        }};