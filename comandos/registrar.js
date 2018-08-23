const Discord = require("discord.js");
const db = require("../database.js"); 
module.exports = { task(client, message, suffix) { message.delete(1000);

 
db.Bloqueio.findOne({
                "_id": message.author.id
            }, function (erro, documento) {
                if(documento) {
         if (!['244489368717230090','282504900552949760'].includes(message.author.id))
                
 if ([documento.block].includes(message.author.id)) return message.reply("<:xguardian:476061993368027148> Você foi bloqueado de usar comandos do **Sysop**. Se acha que é um engano nos contate!`");
        
}



let args = suffix;
let p1 =   message.guild.id+message.author.id;

    let pp1 = message.mentions.users.first()

    ? message.mentions.users.first().id 

    : args
    ? args[0]
    : null;
    if (!pp1) return message.channel.send(`<:sysalerta:469789950938841088> ${message.author} Mencione um usuário ou insira um ID.`);

    let user1 = message.guild.members.has(pp1) ? message.guild.members.get(pp1) : null;
    if (!user1) return message.channel.send(`<:xguardian:476061993368027148> Opa ${message.author}, não encontrei nenhum usuário.`);

db.Guilds.findOne({"_id":message.guild.id},function(erro,doc){
if (doc) {   

var mas = message.guild.roles.find("id", doc.man);
if (mas == null) return message.channel.send(`<:sysalerta:469789950938841088> ${message.author} O cargo \`masculino\` não foi definido neste servidor. **Use:** sy!setregistro`);

var mass = message.guild.roles.find("id", doc.girl);
if (mass == null) return message.channel.send(`<:sysalerta:469789950938841088> ${message.author} O cargo \`feminino\` não foi definido neste servidor. **Use:** sy!setregistro`);

var no = message.guild.roles.find("id", doc.autorole);
if (no == null)return message.reply(`<:sysalerta:469789950938841088> ${message.author} O cargo \`membro\` não foi definido neste servidor. **Use:** sy!setregistro`);
       
var noo = message.guild.roles.find("id", doc.staffer);
if (noo == null)return message.reply(`<:sysalerta:469789950938841088> ${message.author} O cargo \`staff\` não foi definido neste servidor. **Use:** sy!setregistro`);
        
         
         
         
if(!message.guild.members.get(message.author.id).roles.find("id", doc.staffer)) 
return message.channel.send(`<:xguardian:476061993368027148> Opa ${message.author}, que situação complicada! Você não é um usuário Staff por tanto não tem acesso ao comando.`);
         
if(!message.guild.members.get(user1.id).roles.find("id", doc.autorole)) 
return message.channel.send(`<:sysalerta:469789950938841088> ${message.author} Este usuário já foi registrado`);

if(!message.guild.members.get(user1.id).roles.some(r=>[doc.man , doc.girl].includes(r.id))) 
return message.channel.send(`<:sysalerta:469789950938841088> ${message.author}, **Registro Incompleto** Verifique se o usuário a ser registrado possui a tag \`menino\` ou \`menina\` em seu registro.`);

if(message.guild.members.get(user1.id).roles.find("id", doc.man)) {     

db.Registrador.findOne({ "_id": message.guild.id+message.author.id }, function (erro, doc2) {
if(doc2) {   
let server = message.guild;    

message.guild.members.get(pp1).removeRole(message.member.guild.roles.find("id", doc.autorole));

                    doc2.hm += 1;
                    doc2.save();
                    const embed = new Discord.RichEmbed()
                    .setDescription(`<@${message.author.id}> registrou o usuário <@${user1.id}> com sucesso! :blue_heart:`)
                    .setThumbnail(user1.avatarURL)
                    .setColor('#97ff4a');
                    message.channel.send({embed});  
                    user1.send(`<@${user1.id}> você foi registrado por <@${message.author.name}> no servidor **${server.name}** . Se você acha que isso é um engano contate um staff do servidor. :blue_heart:`);

                    
                    
} else {
                    var pessoa = new db.Registrador({
                        _id: p1,
                        mh: 0,
                        hm: 0,
                     
                    });
                    pessoa.save();
       message.channel.send(`<:sysalerta:469789950938841088> ${message.author} Você não possui uma histórico! Use o comando novamente.`);
            }
        
               });
           }    
  
   if(message.guild.members.get(user1.id).roles.find("id", doc.girl)) {        
   if(message.guild.members.get(user1.id).roles.find("id", doc.man)) return;
   
   db.Registrador.findOne({ "_id": message.guild.id+message.author.id }, function (erro, documento) {
   if(documento) {   
   let server = message.guild;
   
   message.guild.members.get(pp1).removeRole(message.member.guild.roles.find("id", doc.autorole));

                    documento.mh += 1 ;
                    documento.save();
                    const embed = new Discord.RichEmbed()
                    .setDescription(`<@${message.author.id}> registrou o usuário <@${user1.id}> com sucesso! :blue_heart:`)
                    .setThumbnail(user1.avatarURL)
                    .setColor('#f30052');
                    message.channel.send({embed}); 
                    user1.send(`<@${user1.id}> você foi registrada por <@${message.author.id}> no servidor **${server.name}** . Se você acha que isso é um engano contate um staff do servidor. :heart:`);
           
                } else {
                    var pessoa = new db.Registrador({
                        _id: p1,
                        mh: 0,
                        hm: 0,
                     
                    });
                    pessoa.save();
                message.channel.send(`<:sysalerta:469789950938841088> ${message.author} Você não possui uma histórico! Use o comando novamente.`);

            }
                   
               });
   }
           
} else {
            var pessoa = new db.Guilds({
                _id: message.guild.id,
                autorole: '',
                sugestao: '',
                filterInvites: false,
                filterPrintscreen: '',
                filterWords: [],
                welcome: '',
                welcomeChannel: '',
                bye: '',
                byeChannel: '',
                dm: '',
                girl: '',
                man: '',
                staffer: '',
            });
            pessoa.save();
            message.channel.send(`<:xguardian:476061993368027148> ${message.author}, Servidor não registrado, use o comando novamente.`);

    }
    
});
});
}};
