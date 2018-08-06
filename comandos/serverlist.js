module.exports = {
      task(client, message, suffix) {

let database = require("../database.js");  
database.Bloqueio.findOne({
                "_id": message.author.id
            }, function (erro, documento) {
                if(documento) {
         if (!['244489368717230090','282504900552949760'].includes(message.author.id))
                
 if ([documento.block].includes(message.author.id)) return message.reply("<:FalseSysop3:462306755150479372> Você foi bloqueado de usar comandos do **SysopCorp**, se você acha que isso é um engano nos contate! `! Till#8514 | Natsu#7777`");
        
}
            
    let Table = require(`cli-table`);
    let table = new Table({
        head: [
            `ID`,
            `Name`,
            `Users`,
            `Bots`,
            `Total`
        ], colWidths: [30, 50, 10, 10, 10]
    });
    client.guilds.map(g =>
      table.push(
        [g.id, g.name, g.members.filter(u => !u.user.bot).size, g.members.filter(u => u.user.bot).size, g.members.size]
      ));
    require(`snekfetch`)
    .post(`https://hastebin.com/documents`)
    .set(`Content-Type`, `application/raw`)
    .send(table.toString())
    .then(r =>
       message.channel.send(`Estou dentro desses servidores http://hastebin.com/` + r.body.key));
})
}};
