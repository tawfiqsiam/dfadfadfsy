module.exports = { task(client, message, suffix) {
 
 database.Bloqueio.findOne({
                "_id": message.author.id
            }, function (erro, documento) {
                if(documento) {
         if (!['244489368717230090'].includes(message.author.id))
                
 if ([documento.block].includes(message.author.id)) return message.channel.send(`<:xguardian:476061993368027148> | ${message.author}! Você foi bloqueado de usar comandos do **Sysop**, se você acha que isso é um engano nos contate! `);
        
}
 
if (!suffix)
return message.channel.send(`<:sysalerta:469789950938841088> ${message.author} defina o texto que você gostaria de converter!`);
    
let user = message.author;    
let fonte =
suffix.replace(/A/gi, 'ᴀ')
.replace(/Ã/gi, 'ᴀ̃').replace(/Á/gi, 'ᴀ́').replace(/B/gi, 'ʙ').replace(/C/gi, 'ᴄ') 
.replace(/Ç/gi, 'ç').replace(/D/gi, 'ᴅ').replace(/E/gi, 'ᴇ').replace(/É/gi, 'ᴇ́')
.replace(/Ê/gi, 'ᴇ̂́').replace(/F/gi, 'ғ').replace(/G/gi, 'ɢ')
.replace(/H/gi, 'ʜ').replace(/I/gi, 'ɪ').replace(/J/gi, 'ᴊ').replace(/K/gi, 'ᴋ').replace(/L/gi, 'ʟ')
.replace(/M/gi, 'ᴍ').replace(/N/gi, 'ɴ').replace(/O/gi, 'ᴏ').replace(/P/gi, 'ᴘ').replace(/Q/gi, 'ϙ')
.replace(/R/gi, 'ʀ').replace(/S/gi, 's').replace(/T/gi, 'ᴛ').replace(/U/gi, 'ᴜ').replace(/V/gi, 'ᴠ')
.replace(/W/gi, 'ᴡ').replace(/X/gi, 'x').replace(/Y/gi, 'ʏ').replace(/Z/gi, 'ᴢ');
   
   
    
message.channel.send(`Texto de \`${user.username}\`\n\n\`\`\`http\n${fonte}\`\`\``);
 });
}};
