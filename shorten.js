
const shorten = require('isgd');

module.exports = {
 task(client, message, suffix) {

suffix = suffix.split(' '); 
if (!suffix[0]) return message.channel.send('Use: `sy!shorten` + `<url>` + `<Texto>` ');
if (!suffix[1]) {

shorten.shorten(suffix[0], function(res) {
if (res.startsWith('Error:')) message.channel.send('Por favor, insira um URL válido');

message.channel.send(`**<${res}>**`);
});

} else { 

shorten.custom(suffix[0], suffix[1], function(res) {
if (res.startsWith('Error:')) return message.channel.send(`**${res}**`);
message.channel.send(`**<${res}>**`);
});

}}

};