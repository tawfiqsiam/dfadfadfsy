const request = require('request-promise-native');
const cheerio = require('cheerio');

 
  module.exports = { 
  task(client, message, suffix) {

 let database = require("../database.js");  
database.Bloqueio.findOne({
                "_id": message.author.id
            }, function (erro, documento) {
                if(documento) {
         if (!['244489368717230090'].includes(message.author.id))
                
 if ([documento.block].includes(message.author.id)) return message.channel.send(`<:xguardian:476061993368027148> | ${message.author}! Você foi bloqueado de usar comandos do **Sysop**, se você acha que isso é um engano nos contate! `);
        
}
   
if (!suffix) return message.reply(':x: Defina algo para pesquisar');
suffix = suffix.split(' '); 

    if (!suffix.query) {
  
    }
    
    
     const nsfw = 
["pênis", "gozando","Zoofilia", "mulata caindo na pika", "mulata fodendo", "novinha fodendo", "boquete", "boqueteira", "boquetão", "morena fudendo", "mulata caindo no pau", "erotico", "erot", "mulata caindo na rola", "foder", "fudendo", "novinha caindo na pika", "novinha caindo na rola", "novinha caindo no pau", "ruivinha caindo na pika", "ruiva caindo na pika", "ruiva caindo na rola", "ruivinha caindo na rola", "ruiva caindo no pau", "ruivinha caindo no pau",  "gozada", "punehta", "siririca", "kamasutra", "blogsexo", "semen", "rola", "cavalgando na rola", "kikando na rola", "quicando na rola", "roludo", "piro", "sexo anal", "sexo oral", "urologista", "bct", "zé buceta", "bucetinha", "bucetão", "sentando na rola", "sentando na pika", "novinha mamando", "morena mamando", "ruivinha mamando", "camisinha", "sexy", "sexy hot", "vadia", "bunda grande", "bundão", "bunda gostoza", "bunda mucha", "sexo amandor", "vídeos de sexo caseiro", "sexo caseiro", "peitudas", "seios grandes", "leite no peito", "mamando o pau",  "gemidas", "gemidão do zap", "gemidão", "gemidos", "gemer", "estrelas porno", "estrelas pornos", "estrelas pornôs", "estrelas pornos", "https://www.xvideos.com/", " http://clubedazoofilia.com/", "https://www.xnxx.com/", "www.mrvideosdesexo.xxx/boa-foda/", "www.pornocarioca.com/", "porno", "pornô", "hentai", "piper perry", "https://www.hqdesexo.com/", "pika", "peitos", "nudez", "vaginas", "comendo morena", "comendo novinha", "xnxx", "pornohub", "cú", "putaria", "novinhas","piroca", "nsfw", "blacked", "xnxx", "mia khalifa","porno", "porn", "pene", "penes", "vagina", "vaginas", "xvideos", "gay", "lesbian", "lesbiana", "pornhub", "xnxx", "pussy", "boobs", "tetas", "hentai","erohentai","bdsm ","sexo","sex","redtube","Xvideos","prno","+18","XVIDEOS",
 "x videos","rule 3+4","startwift","Negros","negro","Colegiala","colegiala","perras","Rule 34","rule 34","Strippers","excitante","PRNO","PORNO","PORN","PENE","PENES","VAGINA","VAGINAS","GAY","LESBIAN","LESBIANA","PORNHUB","XNXX","PUSSY","BOOBS","TETAS","HENTAI","EROHENTAI","SEXO","SEX","REDTUBE","BDSM"];
        if(nsfw.some(p => message.content.includes(p))){
  message.channel.send(" :underage: `NSFW` | Conteúdo Sexual Explícito não é permitido na pesquisa!");
  return;
        }  
    
    let options = {
      headers: {
        'User-Agent': `SysopCorp`
      },
      url: 'http://google.com/search',
      qs: {
        q: encodeURIComponent(suffix),
        safe: 'active'
      }
    };
    
    request(options).then(response => {

    let $ = cheerio.load(response);
    let results = [];

    $('.g').each((i) => {
      results[i] = {};
    });
    $('.g>.r>a').each((i, e) => {
      let raw = e.attribs['href'];
      results[i]['name'] = `${getText(e)} - ${raw.substr(7, raw.indexOf('&sa=U') - 7)}`;
    });
    $('.g>.s>.st').each((i, e) => {
      results[i]['value'] = getText(e);
    });

    results = results.filter(r => r.name && r.value).slice(0, 5);

    message.channel.send({
      embed: {
        color: 0x4959e9,
        title: `<:Google_Chrome_iconicons:395242718110023680> Resultados para \`\`${suffix}\`\` `,
        url: `https://www.google.com/search?q=${encodeURIComponent(suffix)}`,
        fields: results,
        footer: {
          text: 'Powered by Google'
        }
      }
    }).catch(e => {
      console.log.error(e);
    });
    });
    function getText(children) {
  if (children.children) return getText(children.children);
  return children.map(c => {
    return c.children ? getText(c.children) : c.data;
  }).join('');
}
 })
}};
