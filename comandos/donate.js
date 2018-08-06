module.exports = {
        task(client, message) {
		
let database = require("../database.js");  
database.Bloqueio.findOne({
                "_id": message.author.id
            }, function (erro, documento) {
                if(documento) {
         if (!['244489368717230090','282504900552949760'].includes(message.author.id))
                
 if ([documento.block].includes(message.author.id)) return message.reply("<:FalseSysop3:462306755150479372> Você foi bloqueado de usar comandos do **SysopCorp**, se você acha que isso é um engano nos contate! `! Till#8514 | Natsu#7777`");
        
}
		
        message.channel.send({
			embed: {
				color: 0x4959e9,
				description:`
▬▬▬▬▬▬▬▬▬▬▬▬▬  DOAR  ▬▬▬▬▬▬▬▬▬▬▬▬▬
**Contribua para o bot, a doção ajuda-nos a manter Sysop e Reth ativos e atualizados!**

<:pplogo:451830475510644746> __PayPal:__ [DOAR AGORA!](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=888UVX99DTTXS&lc=BR&item_name=Reth&currency_code=BRL&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted)
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
Doando para o **SysopCorp**, você tem os seguintes benefícios:

:white_small_square: Cargo Especiais no Servidor Oficial
:white_small_square: Commandos PREMIUM <:Premium_item_Sysop:433324770864529418>
:white_small_square: 100k de rubys adicionados no seu profile <:rubys:430493599633899532>
:white_small_square: 50 lootbox raras <:ContainerEmoji:436348542576230411>

Mais benefícios em breve!
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
				`,
			}
		});
	})
    }
};
