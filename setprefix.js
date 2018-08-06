const database =  require('../database.js');
module.exports = {
    task(client, message, args) {


    database.Guilds.findOne({
      "_id": message.guild.id
    }, function(erro, documento) {

      if (documento) {
   args = args.split(' '); 
   if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('É necessário permissões de`Administrator` para executar este comando'); // Tell them if they don't have the proper permissions.
    if (!args.join(" ")) return message.channel.send('Porfavor defina um novo prefixo. `sy!setPrefix <new prefix>`'); // Tell them if they didn't supply any arguments.

        documento.setprefix = args.join()
        documento.save()

        message.channel.send('Prefixo alterado para ' + args.join())
      }
      }).catch(e => console.log(e));
      
      var servidor = new database.Guilds({
                _id: message.guild.id,
                lvl: true,
                setprefix: '',
            });
            servidor.save();

}};

