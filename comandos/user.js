const Discord = require('discord.js');
const db = require("../database.js");
module.exports = {
    description: 'Você pode ver informações suas ou de outro usuário mencionando-o',
    categoria: 'Social',
    task(client, message) {
    	
    	var moment = require('moment');
    	moment.locale('pt-BR');
    	
      
      db.Bloqueio.findOne({
                "_id": message.author.id
            }, function (erro, documento) {
                if(documento) {
         if (!['244489368717230090','282504900552949760'].includes(message.author.id))
                
 if ([documento.block].includes(message.author.id)) return message.reply("<:FalseSysop3:462306755150479372> Você foi bloqueado de usar comandos do **SysopCorp**, se você acha que isso é um engano nos contate! `! Till#8514 | Natsu#7777`");
        
}
      
 db.Users.findOne({"_id": message.author.id}, function(erro, doc) {

    	let estados = {
      "online": "<:online:432366851012689921> Online",
      "idle": "<:idle:432366904766889984> Ausente",
      "dnd": "<:dnd:432367117195804684> Não incomodar",
      "offline": "<:invisible:432366960630824962> Desconectado/invisivel",
      "Stream": "<:stream:432366775548510208> Transmitindo"
};
    	let color = {
      "online": "#00c903",
      "idle": "#ff9a00",
      "dnd": "#ff0000",
      "offline": "#d8d8d8",
      "stream": "#ff9a00"
      
};
    	let user = message.mentions.users.first() || message.author;
    	let member = message.guild.member(user);
    	
        let dentrar = message.author.createdAt;
        let millisJoined = new Date().getTime() - member.joinedAt.getTime();
        let daysJoined = millisJoined / 1000 / 60 / 60 / 24;
        let roles = member.roles.map(roles => `${roles}`).join(' | ');
       // if (roles.length < 1) roles = ['Não possuo cargos.'];
        let acc = user.createdAt.toDateString()

      const embed = new Discord.RichEmbed()
			.setThumbnail(user.displayAvatarURL)
			.setAuthor(user.tag, user.avatarURL)
                         .addField('Status', '**'+estados[user.presence.status]+'**', true)
			.addField('Jogando',` \`\`\`Markdown\n# ${user.presence.game != null ? user.presence.game.name : "Nada"}\`\`\``, false)
			.addField('Discord Name', `\`\`\`diff\n- ${user.username}-\`\`\``, true)
			.addField('ID', `\`\`\`${user.id}\`\`\``, true)
			.addField('Apelido dentro do servidor',` \`\`${member.nickname != null ? member.nickname : "Nenhum apelido neste servidor."}\`\``, true)
			.addField('Conta criada em', ` \`\`${moment(acc).format('LL')}\`\` `, true)
			.addField('Dias no servidor:', ` Estou á \`\`${daysJoined.toFixed(0)}\`\` dia (s) no servidor `, true)
			.addField('Meus Cargos', roles)
			.setColor(color[user.presence.status]);
        
		message.channel.send({ embed });
    })
 });
    }
};
