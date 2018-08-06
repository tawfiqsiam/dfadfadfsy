const Discord = require("discord.js");
const client  = new Discord.Client();
const config  = require("./config.json");
const configuration  = require("./configuration.json");
const fs      = require("fs");
const YTDL = require('ytdl-core');
const modRole = ('Administrator');
var database = require("./database.js");
const db = require('quick.db');
const moment = require('moment');
let reload    = require('require-reload')(require),
	utils     = reload('./utils/utils.js'),
	comandos  = require('./utils/comandos.js'),
	logger    = new (require('./utils/Logger.js'))(config.logTimestamp);

 
 client.on("error", (e) => console.log(e));
  client.on("warn", (e) => console.log(e));
  client.on("debug", (e) => console.log(e));


module.exports = {
	task(client, message, name) {
		if (name) {
			let comando = reload(`./comandos/${name}.js`);
			comando.usersOnCooldown = new Set();
			comandos.set(name, comando);
			return message.reply(`:cyclone: | O Comando ** ${name}** foi atualizado!`);
		} else
			return message.reply('Especifique um comando');
	}
};


fs.readdir("./comandos/", (err, files) => {
	if (err) return console.error(err);
	files.forEach(name => {
		let nome = name.split('.')[0];
		require(`./comandos/${name}`).usersOnCooldown = new Set();
		comandos.set(nome, require(`./comandos/${name}`));
	});
});

  

client.on('ready', () => {
 var a = '244489368717230090';
var embed = new Discord.RichEmbed()
    .setThumbnail('https://cdn.discordapp.com/attachments/429458467988832257/469723736300453901/SysopLogo.png')
    .setDescription(`<:SysopLogoEMOI:439565791357042700> Sysop foi reiniciado pelo heroku.\n\nSysopGuide reiniciado pelo clound9.\n\nMemória: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MS`)
    .setColor(0x0df7eb);  							 
    client.users.get(a).send({embed});    
    
});

client.on("ready", () => {
   logger.logWithHeader('Estamos online!', 'bgRed', 'black',  `Online! S:${client.guilds.size} | U:${client.users.size}`);
    var statusIDO = ["idle", "dnd"]
 
    var jogando = [`Alegria`, `AMOOR`, `Comandos? sy!help`, `para ${client.guilds.size} servidores`]

    
    client.user.setGame(jogando[Math.round(Math.random() * jogando.length - 1)], "https://www.twitch.tv/adrianocruz1105")
    client.user.setStatus(statusIDO[Math.round(Math.random() * statusIDO.length - 1)]);
    client.guilds.get("441766085809799198").members.map(a =>
    setInterval(() => {
        client.user.setGame(jogando[Math.round(Math.random() * jogando.length - 1)], "https://www.twitch.tv/adrianocruz1105")
        client.user.setStatus(statusIDO[Math.round(Math.random() * statusIDO.length - 1)])}, 1 * 1000 * 60));
});


module.exports = {
	task(client, message, name) {
	database.Guilds.findOne({"_id": message.guild.id}, function(erro, documento) {
        if (documento) return;
		if (!documento && documento.sugestao && message.channel.id == documento.sugestao)
	    message.react('439601495621763083').then(message.react('439601513472458752').then(
	    message.react('459002752891355147'))).catch(e => console.log(e));
	    
    });
	}};

const DBL = require ("dblapi.js");
const dbl = new DBL (config.DBL);

client.on ('ready', () => {
  setInterval (() => {
      dbl.postStats (client.guilds.size);
  }, 18000);
});


client.on('guildMemberAdd', (member) => {	
if (member.guild) {
database.Guilds.findOne({ "_id": member.guild.id}, function(erra, sysop) {
if (sysop) {
if (sysop.autorole) {
member.addRole(sysop.autorole);
sysop.save();
}}
});
}
});

client.on('guildMemberAdd', (member) => {
if (member.guid) {
database.Guilds.findOne({ "_id": member.guild.id}, function(erra ,sysop) {	
if (sysop) {
if (sysop.welcome) {
let mensagem = sysop.welcome.replace(/\$\{USER\}/gi, member.user.username).replace(/\$\{SERVER\}/gi, member.guild.name).replace(/\$\{MENTION\}/gi, `${member.user}`).replace(/\$\{USER_ICONURL\}/gi, member.user.displayAvatarURL).replace(/\$\{USER_ID\}/gi, member.user.id);
client.channels.get(sysop.welcomeChannel).send(mensagem);
}}
    });
    }
});

client.on('guildMemberAdd', (member) => {
if (member.guild) {
database.Guilds.findOne({ "_id": member.guild.id}, function(erro, sysop) {	
if (sysop) {
if (sysop.dm) {
let mensagem = sysop.dm.replace(/\$\{USER\}/gi, member.user.username).replace(/\$\{SERVER\}/gi, member.guild.name).replace(/\$\{MENTION\}/gi, `${member.user}`).replace(/\$\{USER_ICONURL\}/gi, member.user.displayAvatarURL).replace(/\$\{USER_ID\}/gi, member.user.id);
member.send(mensagem);
}}
});
}
});


client.on('guildMemberRemove', (member) => {	
if (member.guild) {
database.Guilds.findOne({ "_id": member.guild.id}, function(erra, sysop) {	
if (sysop) {	
if (sysop.bye) {
let mensagem = sysop.bye.replace(/\$\{USER\}/gi, member.user.username).replace(/\$\{SERVER\}/gi, member.guild.name).replace(/\$\{MENTION\}/gi, `${member.user}`).replace(/\$\{USER_ICONURL\}/gi, member.user.displayAvatarURL).replace(/\$\{USER_ID\}/gi, member.user.id);
client.channels.get(sysop.byeChannel).send(mensagem);
        }}
    });
    }
});

client.on("message", message => {
if (message.guild) {
database.Guilds.findOne({"_id": message.guild.id}, function(erra, sysop) {
if (sysop) {
if (sysop && sysop.convites && message.content.search('discord.gg') > -1) {	
message.delete();
return message.channel.send(`<:FalseSysop3:462306755150479372> | ${message.author} Você não pode enviar convites de outros servidores aqui!`).then(sentMsg => sentMsg.delete(60000));
}}
});
}
});

client.on("messageUpdate", (newMessage, oldMessage) => {	
if (oldMessage.guild) {
database.Guilds.findOne({"_id": oldMessage.guild.id}, function(erro, sysop) {
if (sysop) {
if (sysop && sysop.convites && oldMessage.content.search('discord.gg') > -1) {
oldMessage.delete();
return newMessage.channel.send(`<:FalseSysop3:462306755150479372> | ${newMessage.author} Você não pode enviar convites de outros servidores aqui!`).then(sentMsg => sentMsg.delete(60000)) 
}}
});
}
});

client.on("message", message => {
if (message.guild) {
database.Guilds.findOne({"_id": message.guild.id}, function(erra, sysop) {
if (sysop) {
if (sysop && sysop.sugest && message.channel.id == sysop.sugest)
message.react('👍').then(message.react('👎')).then(message.react(':FalseSysop3:462306755150479372'))  
}
});
}
});

client.on('message', message => {
    if (message.guild) {
database.Guilds.findOne({"_id": message.guild.id}, function(erra, sysop) {
if (sysop) {    
    if (sysop && sysop.words) {
			sysop.words.every(e => {
				if (message.content.search(new RegExp(`\\b${e}\\b`, 'gi')) > -1) {
					message.delete();
					message.reply("Cuidado com o palavreado!!! :rage:").then(sentMsg => sentMsg.delete(10000));
					return false;
				} else return true;
			});
    }}});
}
});

client.on('messageUpdate', (oldMessage, newMessage) => {
    if (oldMessage.guild) {
database.Guilds.findOne({"_id": oldMessage.guild.id}, function(erra, sysop) {
if (sysop) {    
    if (sysop && sysop.words) {
			sysop.words.every(e => {
				if (oldMessage.content.search(new RegExp(`\\b${e}\\b`, 'gi')) > -1) {
					oldMessage.delete();
					newMessage.reply("Cuidado com o palavreado!!! :rage:").then(sentMsg => sentMsg.delete(10000));
					return false;
				} else return true;
			});
    }}});
}
});

client.on("message", message => {
  if (message.author.bot) return;

  if (!message.content.startsWith(config.prefix)) return;
 
  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);
 
  let args = message.content.split(" ").slice(1);
  //
  
  
 
  try {   
         //aqui voco pode colocar qualquer nome (não esqueça de mudar o nome da pasta para o mesmo)
    let commandFile = require(`./private/${command}.js`);
    commandFile.run(client, message, args);
  }catch (err) {
   
 
  }
 
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./commands/${command}`)];
      const cmd = require(`./commands/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};


          

client.on('message', message => {
	let settings = reload('./settings.json');
    let comando = message.content.replace(config.prefix, '').split(/ |\n/)[0],
	suffix  = message.content.replace(config.prefix + comando, '').trim();
	if (message.content.startsWith(config.prefix) && comandos.has(comando)) {
		logger.logCommand(message.guild === undefined ? null : message.guild.name, message.author.username, config.prefix + comando, message.cleanContent.replace(config.prefix + comando, '').trim());
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
		
		logger.logCommand(message.guild === undefined ? null : message.guild.name, message.author.username, config.prefix + comando, message.cleanContent.replace(config.prefix + comando, '').trim());
		var server = message.guild;
		const embed = new Discord.RichEmbed()
		.setThumbnail(server.iconURL)
        .setAuthor(message.author.username, message.author.avatarURL)
        .addField(`Executor:`, `\`${message.author.tag}\``, true)
        .addField(`ID do Executor`, `\`${message.author.id}\``, true)
        .addField(`Comando usado:`, `\`\`\`Markdown\n# ${message.content}\`\`\``,false)
        .addField(`Dentro do server:`,`\`\`\`Markdown\n# ${message.guild.name}\`\`\``,false)
        .addField(`Canal onde foi Executado`,`\`${message.channel.name}\``,true)
	.addField(`Total de usuários`, `\`${server.memberCount}\``, true)	
        .setFooter('SysopCorp ---- LOG COMANDOS ' + ' ---- ' + new Date())
        .setColor(0x0df7eb);
        
        client.guilds.get('412169234492293130').channels.get('451470780602122251').send({ embed });
	}
});

client.on('guildCreate', guild => {
  let ID = "244489368717230090";

  
    console.log(`O servidor: ${guild.name}  adicionou o seu bot `)
    
    const embed = new Discord.RichEmbed()
    .setAuthor(guild.name, guild.iconURL)
    
        .setColor(0x4959e9)
        .addField("GOD", `**O servidor: __${guild.name}__ >adicionou o bot ___${client.user.username}__: ** `)
        .setThumbnail(guild.iconURL)
        .addField("Dono:",`<@${guild.ownerID}>`,true)
        .addField("Membros:",`${guild.members.size}`,true)
        .addField(":smiling_imp: __**Servidores atuais:**__", `\`\`\`js\n${client.guilds.size}\`\`\``)
 
        .setTimestamp()
        client.guilds.get("441766085809799198").members.map(a =>
        client.users.get(a.id).send({embed})) 
        
							  
});

client.login(process.env.A);
