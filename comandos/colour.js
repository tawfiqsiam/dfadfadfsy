const convert = require('color-convert');
 const config  = require("../config.json");

module.exports = { 
  categoria: 'Social',
  description: 'Tenha informações de determinada cor. Infos use: `sy!colour help`',
  task(client, message, suffix) {
    
let database = require("../database.js");  
database.Bloqueio.findOne({
                "_id": message.author.id
            }, function (erro, documento) {
                if(documento) {
         if (!['244489368717230090','282504900552949760'].includes(message.author.id))
                
 if ([documento.block].includes(message.author.id)) return message.reply("<:FalseSysop3:462306755150479372> Você foi bloqueado de usar comandos do **SysopCorp**, se você acha que isso é um engano nos contate! `! Till#8514 | Natsu#7777`");
        
}
   
  suffix = suffix.split(' '); 
 if(suffix[0] == "help"){
      message.reply('**Use:** `sy!colour` +  `<#fffff> (Substitua para qualquer outra cor.)`');
      return;
    }
        
    
  if (!/^#?[0-9a-fA-F]{6}$/.test(suffix[0])) {
 
  }

  message.channel.send({
    embed: {
      color: 0x32e2c8,
      fields: [
        {
          name: 'HEX',
          value: `#${suffix[0].includes('#') ? suffix[0].split('#').slice(1).join() : suffix[0]}`,
          inline: true
        },
        {
          name: 'RGB',
          value: `${convert.hex.rgb(suffix[0].includes('#') ? suffix[0].split('#').slice(1).join() : suffix[0])}`,
          inline: true
        },
        {
          name: 'CMYK',
          value: `${convert.hex.cmyk(suffix[0].includes('#') ? suffix[0].split('#').slice(1).join() : suffix[0])}`,
          inline: true
        },
        {
          name: 'HSL',
          value: `${convert.hex.hsl(suffix[0].includes('#') ? suffix[0].split('#').slice(1).join() : suffix[0])}`,
          inline: true
        },
        {
          name: 'HSV',
          value: `${convert.hex.hsv(suffix[0].includes('#') ? suffix[0].split('#').slice(1).join() : suffix[0])}`,
          inline: true
        },
        {
          name: 'HWB',
          value: `${convert.hex.hwb(suffix[0].includes('#') ? suffix[0].split('#').slice(1).join() : suffix[0])}`,
          inline: true
        },
        {
          name: 'LAB',
          value: `${convert.hex.lab(suffix[0].includes('#') ? suffix[0].split('#').slice(1).join() : suffix[0])}`,
          inline: true
        },
        {
          name: 'ANSI16',
          value: `${convert.hex.ansi16(suffix[0].includes('#') ? suffix[0].split('#').slice(1).join() : suffix[0])}`,
          inline: true
        },
        {
          name: 'ANSI256',
          value: `${convert.hex.ansi256(suffix[0].includes('#') ? suffix[0].split('#').slice(1).join() : suffix[0])}`,
          inline: true
        },
        {
          name: 'XYZ',
          value: `${convert.hex.xyz(suffix[0].includes('#') ? suffix[0].split('#').slice(1).join() : suffix[0])}`,
          inline: true
        },
        {
          name: 'HCG',
          value: `${convert.hex.hcg(suffix[0].includes('#') ? suffix[0].split('#').slice(1).join() : suffix[0])}`,
          inline: true
        },
        {
          name: 'Apple',
          value: `${convert.hex.apple(suffix[0].includes('#') ? suffix[0].split('#').slice(1).join() : suffix[0])}`,
          inline: true
        },
        {
          name: 'Gray',
          value: `${convert.hex.gray(suffix[0].includes('#') ? suffix[0].split('#').slice(1).join() : suffix[0])}`,
          inline: true
        },
        {
          name: 'CSS Keyword (Approx.)',
          value: `${convert.hex.keyword(suffix[0].includes('#') ? suffix[0].split('#').slice(1).join() : suffix[0])}`,
          inline: true
        }
      ],
      thumbnail: {
        url: `https://dummyimage.com/250/${suffix[0].includes('#') ? suffix[0].split('#').slice(1).join() : suffix[0]}/&text=%20`
      }
    }
  });
 })
}};
