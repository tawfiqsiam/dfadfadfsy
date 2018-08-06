const request = require('request-promise-native');
const Discord = require('discord.js');
exports.run  = async (client, message, args) => {
 
 let database = require("../database.js");  
database.Bloqueio.findOne({
                "_id": message.author.id
            }, function (erro, documento) {
                if(documento) {
         if (!['244489368717230090','282504900552949760'].includes(message.author.id))
                
 if ([documento.block].includes(message.author.id)) return message.reply("<:FalseSysop3:462306755150479372> Você foi bloqueado de usar comandos do **SysopCorp**, se você acha que isso é um engano nos contate! `! Till#8514 | Natsu#7777`");
        
}
            })
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
 
  try {
    
    args.name = args.join(' ');

    let options = {
      headers: {
        'User-Agent': `Teste`,
        'Accept': 'application/json',
        'User-Key': '081c9329990909dda95025ff013d4ec3'
      },
      url: 'https://api-2445582011268.apicast.io/games/',
      qs: {
        search: encodeURIComponent(args.name),
        fields: '*',
        limit: 1
      },
      json: true
    };
  
    let response = await request(options);
    response = response[0];

    if (!response) {
    }

    message.channel.send({
      embed: {
        color: 0xf7462d,
        title: response.name,
        url: response.url,
        description: response.summary,
        fields: [
          {
            name: 'Avaliação',
            value: response.total_rating ? response.total_rating.toFixed(2) : '-',
            inline: true
          },
          {
            name: 'Data de lançamento',
            value: new Date(response.first_release_date).toDateString(),
            inline: true
          },
          {
            name: 'Links',
            value: response.websites ? response.websites.map(website => website.url).join('\n') : '-'
          }
        ],
        image: {
          url: `https://images.igdb.com/igdb/image/upload/t_cover_big/${response.cover.cloudinary_id}.jpg`
        },
        footer: {
          text: 'Powered by IGDB SysopCorp'
        }
      }
    }).catch(e => {
      console.log.error(e);
    });
  }
  catch (e) {
    if (e.response) {
      return console.log('error', e.response.statusCode, e.response.statusMessage, message.channel);
    }
  }
};
