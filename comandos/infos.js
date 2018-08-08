const Discord = require("discord.js");


module.exports = {
    description: 'Informações das guilds onde o bot se encontra.',
    categoria: 'Social',
    task(client, message, suffix) {

let database = require("../database.js");  
database.Bloqueio.findOne({
                "_id": message.author.id
            }, function (erro, documento) {
                if(documento) {
         if (!['244489368717230090'].includes(message.author.id))
                
 if ([documento.block].includes(message.author.id)) return message.reply("<:FalseSysop3:462306755150479372> Você foi bloqueado de usar comandos do **SysopCorp**, se você acha que isso é um engano nos contate! `! Till#8514 | Natsu#7777`");
        
		}

    let ms = client.uptime;
    let cd = 24 * 60 * 60 * 1000; // Calc days
    let ch = 60 * 60 * 1000; // Calc hours
    let cm = 60 * 1000; // Calc minutes
    let cs = 1000; // Calc seconds
    let days = Math.floor(ms / cd);
    let dms = days * cd; // Days, in ms
    let hours = Math.floor((ms - dms) / ch);
    let hms = hours * ch; // Hours, in ms
    let minutes = Math.floor((ms - dms - hms) / cm);
    let mms = minutes * cm; // Minutes, in ms
    let seconds = Math.round((ms - dms - hms - mms) / cs);
    if (seconds === 60) {
        minutes++; // Increase by 1
        seconds = 0;
    }
    if (minutes === 60) {
        hours++; // Inc by 1
        minutes = 0;
    }
    if (hours === 24) {
        days++; // Increase by 1
        hours = 0;
    }
    let dateStrings = [];

    if (days === 1) {
        dateStrings.push('**1** dia');
    } else if (days > 1) {
        dateStrings.push('**' + String(days) + '** dias');
    }

    if (hours === 1) {
        dateStrings.push('**1** hora');
    } else if (hours > 1) {
        dateStrings.push('**' + String(hours) + '** horas');
    }

    if (minutes === 1) {
        dateStrings.push('**1** minuto');
    } else if (minutes > 1) {
        dateStrings.push('**' + String(minutes) + '** minutos');
    }

    if (seconds === 1) {
        dateStrings.push('**1** segundo');
    } else if (seconds > 1) {
        dateStrings.push('**' + String(seconds) + '** segundos');
    }

    let dateString = '';
    for (let i = 0; i < dateStrings.length - 1; i++) {
        dateString += dateStrings[i];
        dateString += ', ';
    }
    if (dateStrings.length >= 2) {
        dateString = dateString.slice(0, dateString.length - 2) + dateString.slice(dateString.length - 1);
        dateString += 'e ';
    }
    dateString += dateStrings[dateStrings.length - 1];
        
        var server = message.guild;
	
		const embed = new Discord.RichEmbed()
			.setAuthor(server.name, server.iconURL)
			.setThumbnail('https://cdn.discordapp.com/attachments/442346665052209153/469406950413565962/SysopLogo.png')
			.setTitle("**SYSOPCORP INFOS**")
			.setDescription(`**[ i ]** SysopCorp é um bot brasileiro escrito em discord.js. Um bot mas com inúmeras funcionalidades. Sysop é dividido em categorias de Moderação, Social, Entretenimento, Economia, Aposta e Música. Sysop foi criado e está sendo desenvolvido cada vez mais por <@244489368717230090> . Quaisquer problemas que você enfrente com o Sysop você pode usar o comando \`sy!support\` e nos enviar mensagem. Sysop está sendo trabalho para cada vez mais dar muitos passos!`)
            .addField('Configurações',`\`💻\` Servidores conectados: ${client.guilds.size.toLocaleString()}
\`👥\` Conheço um total de ${client.users.size.toLocaleString()} usuários
\`#\`  Total de canais ${client.channels.size.toLocaleString()}
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n
<:dbl:466726889193734156> DBL SITE [Acessar](https://discordbots.org/bot/412593783696261121)\n
<:sysuptime:469404182705602573>  Uptime ${dateString}\n
<:sysinvite:469404184018681866>  Convite [Convite Direto](https://discordapp.com/oauth2/authorize?client_id=412593783696261121&scope=bot&permissions=2146958583)\n
<:syssuporte:469404183913693184> Servidor Suporte [Sysop](https://discord.gg/GMSjtTQ)\n
<:sysdonos:469404182453944320>   Dono: <@244489368717230090>`, false)
.setColor(0x0df7eb);

		message.channel.send({embed});
    })
    }
};
