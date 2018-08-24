const Discord = require("discord.js");
module.exports = { task(client, message, suffix) {
    
const db = require("../database.js");
db.Bloqueio.findOne({
                "_id": message.author.id
            }, function (erro, documento) {
                if(documento) {
         if (!['244489368717230090'].includes(message.author.id))
                
 if ([documento.block].includes(message.author.id)) return message.reply("<:xguardian:476061993368027148> Você foi bloqueado de usar comandos do **Sysop**, se você acha que isso é um engano nos contate!");
        
}

db.Guilds.findOne({"_id": message.guild.id}, function(erro, sysop) {

if (sysop) {
	
if  (!message.member.hasPermission(["MANAGE_MESSAGES"])) 
return message.channel.send(`Opa ${message.author}! Você não possui permissão de **Gerenciamento de Mensagens** para usar esse comando.`);	

if (!suffix)
return message.channel.send(`<:xguardian:476061993368027148> ${message.author}, level como usar?\n\n\`sy!level on\` - Para ativar o sistema de level na guilda.\n\`sy!level off\` - Para desativar o sistema de level na guilda.`)
	
switch (suffix.split(' ')[0]){
	
case 'on': {

sysop.upar  = true ;
sysop.save();
message.channel.send(`:white_check_mark: | Ok ${message.author} você ativou o sistema de levels.`) ;
	return;
}
case 'off': {

sysop.upar  = false ;
sysop.save();
message.channel.send(`:no_entry_sign: | Ok ${message.author} você desativou o sistema de levels.`) ;
	return;
}}} else {
    var server = new db.Guilds({
            _id: message.guild.id,
             convites: false,
             sugestao: '',
             welcome: '',
             words: [],
             autorole: '',
             welcomeChannel: '',
             byeChannel: '',
             dm: '',
             nivel: 0,
             exps: 0,
             upa: true,
        });
        server.save();
        message.reply('<:SysopLogoEMOI:439565791357042700> Um histórico foi criado. Use o comando novamente!');
}
});    
});
}};
