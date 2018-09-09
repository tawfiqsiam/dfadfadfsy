const Discord = require("discord.js");
module.exports = {
        task(client, message) {

                let database = require("../database.js");  
database.Bloqueio.findOne({
                "_id": message.author.id
            }, function (erro, documento) {
                if(documento) {
         if (!['244489368717230090'].includes(message.author.id))
                
 if ([documento.block].includes(message.author.id)) return message.channel.send(`<:xguardian:476061993368027148> | ${message.author}! Você foi bloqueado de usar comandos do **Sysop**, se você acha que isso é um engano nos contate! `);
        
}

if(!message.channel.nsfw) return message.channel.send(' :underage: COMANDO `NSFW` | Este comando requer nsfw ativado!');

const boobs = [
"https://i.pinimg.com/474x/ce/88/3d/ce883ded5627d491e713508ceb8afc45.jpg",
"http://bigboobs-photos.com/wp-content/uploads/2016/01/Charley-Atwell-Showing-Her-Sexy-Boobs-Photos-4.jpg",  
"https://images.sex.com/images/pinporn/2015/11/19/300/14347628.jpg",  
"https://bigtits.city/pics/f8/4582.jpg",  
"https://img1.xuk.mobi/images/photos/00/03/97/91/39791/origin/0446eb2e002c36d3fc4f624b075ddfbf.jpg",  
"https://media.tits-guru.com/images?uuid=f74e9d1a-2487-48d1-a7a3-092328cad4d1",  
"http://pittsburghflashfictiongazette.net/wp-content/uploads/2016/10/joey_fisher_topless_stripdown__11-0e2942e2_web.jpg",  
"https://i.pinimg.com/736x/3a/b0/72/3ab072a435b12b016f585c9d879d25e2--bandeau-apps.jpg",  
"https://thumb-v-cl.xhcdn.com/t/237/5_b_6190237.jpg",  
"http://1.bp.blogspot.com/-drDK1OfgdOs/VTpZJcugdnI/AAAAAAAABPY/m5r6hK2b8Dw/s1600/Sexy%20boobs%20(8).jpg",  
"https://thechive.files.wordpress.com/2016/11/knockers-from-all-angles-2.jpg?quality=85&strip=info&w=600",  
"https://ftopx.com/large/201504/151193.jpg",  
"https://thechive.files.wordpress.com/2016/11/bf80e038653e51d8a14fd99d74c15dfd.jpg?quality=85&strip=info&w=600",  
 ];
 
 const embed = new Discord.RichEmbed()
    .setImage(boobs[Math.floor(boobs.length * Math.random())])
    .setColor(0x4959e9);
message.channel.send({embed});
})
}};
