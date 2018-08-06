const Discord = require('discord.js');
const database = require("../database.js");


exports.run = (client, message, args) => {
   
 
database.Bloqueio.findOne({
                "_id": message.author.id
            }, function (erro, documento) {
                if(documento) {
         if (!['244489368717230090','282504900552949760'].includes(message.author.id))
                
 if ([documento.block].includes(message.author.id)) return message.reply("<:FalseSysop3:462306755150479372> Você foi bloqueado de usar comandos do **SysopCorp**, se você acha que isso é um engano nos contate! `! Till#8514 | Natsu#7777`");
        
}
   
   var server = message.guild;
		const embed = new Discord.RichEmbed()
		.setThumbnail(server.iconURL)
        .setAuthor(message.author.username, message.author.avatarURL)
        .addField(`Executor:`, message.author.tag, true)
        .addField(`Comando usado:`, message.content,true)
        .addField(`Dentro do server:`,message.guild.name,true)
        .addField(`Canal onde foi Executado`,message.channel.name,true)
        .setFooter('SysopCorp ---- LOG COMANDOS ' + ' ---- ' + new Date())
        .setColor(0x4959e9);
        
        client.guilds.get('412169234492293130').channels.get('451470780602122251').send({ embed });
   
    if  (!message.member.hasPermissions(["BAN_MEMBERS"])) return message.reply(":x: Você não tem permissão para dar striker em alguém!");
   
    if (message.mentions.users.size < 1) return message.reply("Mencione a um usuário");
      
    if (message.mentions.users.first().bot) return message.reply("Você não pode dar striker em um bot.");


  let reason = args.slice(1).join(' ');
  if (reason.length < 1) return message.reply('Defina um motivo para o striker.');
  
 
   if (!message.guild.member(message.mentions.users.first().id).bannable) return message.reply(":x: Não tenho permissão para dar Striker no usuário mencionado.");

    var oi = message.guild.roles.find("name", "😡 SysopRage 😡")        // variaveis
    if (oi == null ){
           message.guild.createRole({
                   
               "name": "advertência 1",  //nome do cargo
               "color": 0xA4A4A4, //cor do cargo
               "permissions": 1, //numero da permission
               "mentionable": false, //se ele e mencionavel
               "position": 49
           })         
                  message.guild.createRole({
                          
                      "name": "advertência 2",  //nome do cargo
                      "color": 0xA4A4A4, //cor do cargo
                      "permissions": 1, //numero da permission
                      "mentionable": false, //se ele e mencionavel
                      "position": 49
                  })
                              message.guild.createRole({
                                 
                             "name": "advertência 3",  //nome do cargo
                             "color": 0xA4A4A4, //cor do cargo
                             "permissions": 1, //numero da permission
                             "mentionable": false, //se ele e mencionavel
                             "position": 49
                         })
                         message.guild.createRole({
                            
                        "name": "😡 SysopRage 😡",  //nome do cargo
                        "color": 0xff3535, //cor do cargo
                        "permissions": 1, //numero da permission
                        "mentionable": false, //se ele e mencionavel
                        "position": 49
                    })}
           if (oi == null)return message.reply("**Use o comando novamente**");
      
           if(!message.guild.members.get(message.mentions.users.first().id).roles.find("name", "☢ Tóxico ☢")) {
            message.guild.members.get(message.mentions.users.first().id).addRole(message.member.guild.roles.find("name", "😡 SysopRage 😡")) 
            message.guild.members.get(message.mentions.users.first().id).addRole(message.member.guild.roles.find("name", "advertência 1")) 
           message.channel.send(`<@${message.mentions.users.first().id}> recebeu um striker, staffs de olho :eyes:`);
        database.Users.findOne({
    "_id": message.mentions.users.first().id
}, function (erro, documento) {
    if(documento) {     
        documento.strike1 = reason
        documento.save()

        }
    })
}

           if(message.guild.members.get(message.mentions.users.first().id).roles.find("name", "advertência 1")) {
         message.guild.members.get(message.mentions.users.first().id).removeRole(message.member.guild.roles.find("name", "advertência 1"))
         message.guild.members.get(message.mentions.users.first().id).addRole(message.member.guild.roles.find("name", "advertência 2"))
         message.channel.send(`**<@${message.mentions.users.first().id}> recebeu já dois Strikers, +1 é ban** <:SysopHammer:453575969014546443> `);
         database.Users.findOne({
            "_id": message.mentions.users.first().id
        }, function (erro, documento) {
            if(documento) {     
                documento.strike2 = reason
                documento.save()
        
                }
            })
        }
            
    if(message.guild.members.get(message.mentions.users.first().id).roles.find("name", "advertência 2")) {
        message.guild.members.get(message.mentions.users.first().id).removeRole(message.member.guild.roles.find("name", "advertência 2"))
         message.guild.members.get(message.mentions.users.first().id).addRole(message.member.guild.roles.find("name", "advertência 3"))
         message.mentions.users.first().send("Você foi banido por receber `3` Strikers (Advertências)")
         let member = await = message.guild.member(message.mentions.users.first().id).ban(0)
         database.Users.findOne({
            "_id": message.mentions.users.first().id
        }, function (erro, documento) {
            if(documento) {     
                documento.strike3 = reason
                let user = message.mentions.users.size > 0 ? message.mentions.users.first() : message.author;
                var rpts = ['https://i2.wp.com/www.evatese.com/wp-content/uploads/2015/08/Banned-songs-by-NBC-olamide-phyno-davido-chrisbrown-evateseblog-august-2015.gif?resize=421%2C311'];
                var link = rpts[Math.floor(Math.random() * rpts.length)];
                const embed = new Discord.RichEmbed() 
                
                          .setTitle("🚫 Striked Member")
                          .setThumbnail('https://i.imgur.com/etOfjIY.png')
                          .addField('**Usuário banido:**', `<@${message.mentions.users.first().id}>`,true)
                          .addField('**Executor:**', `<@${message.author.id}>`,true)    
                          .addField('**Striker 1**',documento.strike1)
                          .addField('**Striker 2**',documento.strike2)
                          .addField('**Striker 3**',documento.strike3)
                          .setFooter(user.tag, user.avatarURL)
                          .setColor(0x26dfd6);
                
                          message.channel.send({embed});
                documento.save()
        
                }
            })        
    } 
         
})
}
