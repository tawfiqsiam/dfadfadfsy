module.exports = {
    task(client, message, suffix) {

   if (!['244489368717230090','282504900552949760'].includes(message.author.id)) return message.reply("Desculpe, comando permitido apenas a Desenvolvedores.")

    let args = suffix.split(' ');
    if (!args.join(' ')) {
      message.channel.send(`<:nop:439601513472458752> |  Forneça um comando para atualizar.`);
      return;
    }
    delete require.cache[require.resolve(`./${args[0]}.js`)];
    message.channel.send(`<a:update:439601087616647169>  Comando \`${args[0]}\` foi atualizado`).catch(e => {
    message.channels.send(`The command \`${args[0]}\` `)
    })
}};