module.exports = {
    description: 'Pesquise no GOOGLE.',
    categoria: 'Social',
    cooldown: 5,
    task(client, message, suffix) {
      const cheerio = require('cheerio'),
      snekfetch = require('snekfetch'),
      querystring = require('querystring');

 let database = require("../database.js");  
database.Bloqueio.findOne({
                "_id": message.author.id
            }, function (erro, documento) {
                if(documento) {
         if (!['244489368717230090','282504900552949760'].includes(message.author.id))
                
 if ([documento.block].includes(message.author.id)) return message.reply("<:FalseSysop3:462306755150479372> Você foi bloqueado de usar comandos do **SysopCorp**, se você acha que isso é um engano nos contate! `! Till#8514 | Natsu#7777`");
        
}       
        
        
 const nsfw = 
["pênis", "gozando","Zoofilia", "mulata caindo na pika", "mulata fodendo", "novinha fodendo", "boquete", "boqueteira", "boquetão", "morena fudendo", "mulata caindo no pau", "erotico", "erot", "mulata caindo na rola", "foder", "fudendo", "novinha caindo na pika", "novinha caindo na rola", "novinha caindo no pau", "ruivinha caindo na pika", "ruiva caindo na pika", "ruiva caindo na rola", "ruivinha caindo na rola", "ruiva caindo no pau", "ruivinha caindo no pau",  "gozada", "punehta", "siririca", "kamasutra", "blogsexo", "semen", "rola", "cavalgando na rola", "kikando na rola", "quicando na rola", "roludo", "piro", "sexo anal", "sexo oral", "urologista", "bct", "zé buceta", "bucetinha", "bucetão", "sentando na rola", "sentando na pika", "novinha mamando", "morena mamando", "ruivinha mamando", "camisinha", "sexy", "sexy hot", "vadia", "bunda grande", "bundão", "bunda gostoza", "bunda mucha", "sexo amandor", "vídeos de sexo caseiro", "sexo caseiro", "peitudas", "seios grandes", "leite no peito", "mamando o pau",  "gemidas", "gemidão do zap", "gemidão", "gemidos", "gemer", "estrelas porno", "estrelas pornos", "estrelas pornôs", "estrelas pornos", "https://www.xvideos.com/", " http://clubedazoofilia.com/", "https://www.xnxx.com/", "www.mrvideosdesexo.xxx/boa-foda/", "www.pornocarioca.com/", "porno", "pornô", "hentai", "piper perry", "https://www.hqdesexo.com/", "pika", "peitos", "nudez", "vaginas", "comendo morena", "comendo novinha", "xnxx", "pornohub", "cú", "putaria", "novinhas","piroca", "nsfw", "blacked", "xnxx", "mia khalifa","porno", "porn", "pene", "penes", "vagina", "vaginas", "xvideos", "gay", "lesbian", "lesbiana", "pornhub", "xnxx", "pussy", "boobs", "tetas", "hentai","erohentai","bdsm ","sexo","sex","redtube","Xvideos","prno","+18","XVIDEOS",
 "x videos","rule 3+4","startwift","Negros","negro","Colegiala","colegiala","perras","Rule 34","rule 34","Strippers","excitante","PRNO","PORNO","PORN","PENE","PENES","VAGINA","VAGINAS","GAY","LESBIAN","LESBIANA","PORNHUB","XNXX","PUSSY","BOOBS","TETAS","HENTAI","EROHENTAI","SEXO","SEX","REDTUBE","BDSM"];
        if(nsfw.some(p => message.content.includes(p))){
  message.channel.send(" :underage: `NSFW` | Conteúdo Sexual Explícito não é permitido na pesquisa!");
  return;
        }      

//Esta variable gerena una URL de nuestra busqueda/consulta (args)
let buscarUrl = `https://www.google.com/search?q=${encodeURIComponent(suffix)}&safe=medium`;

message.channel.send('<a:loading:433842755819798529> `Pesquisando...` ')
.then(m =>{
        //Ahora usamos snekfetch para rastrear en Google.com
        return snekfetch.get(buscarUrl).then((result) =>{ 

              //Cheerio nos permite analizar el HTML en su resultado de google para tomar la URL
              let $ = cheerio.load(result.text);

              //la variable googleData nos permite tomar la URL desde la instancia de la página (HTML)
              let googleData = $('.r').eq(0).find('a').first(2).attr('href');
              
              //Ahora que tenemos nuestros datos de Google, podemos enviarlos al canal.
              googleData = querystring.parse(googleData.replace('/url?', ''));
              
              //resultado de busqueda
              m.edit(`Resultados para **${suffix}** \n <:Google_Chrome_iconicons:395242718110023680> ${googleData.q}`);
        //Usamos nuestro bloque catch, Si no se encuentran resultados.
        }).catch((err) => {
              m.edit(' <:DiscordTurd:432367282493325313> ||  Não há resultados encontrados!');
        });

});
    })
}};
