exports.exec = async (client message, args) => {

if (!['244489368717230090'].includes(message.author.id)) return;

try {
    if (args.remove) {
      await message.channel.overwritePermissions(message.guild.id, {
        SEND_MESSAGES: null,
        ADD_REACTIONS: null
      });

      message.channel.send({
        embed: {
          color: 0x4959e9,
          title: 'Bloqueio do canal removido',
          description: 'O bloqueio neste canal foi removido, agora você pode enviar mensagens no mesmo',
          footer: {
            text: `Removido por ${message.author.tag}`
          }
        }
      }).catch(e => {
        console.log.error(e);
      });
    }
    else {
      await message.channel.overwritePermissions(message.guild.id, {
        SEND_MESSAGES: false,
        ADD_REACTIONS: false
      });

      message.channel.send({
        embed: {
          color: 0xff2227,
          title: 'Bloqueio de Canal Iniciado',
          description: 'Este canal de texto está bloqueado. Você não tem permissão para enviar mensagens neste canal, a menos que seja explicitamente permitido. \n Os administradores podem remover o bloqueio usando o comando `lockdown --remove`.',
          footer: {
            text: `Iniciado por ${message.author.tag}`
          }
        }
      }).catch(e => {
        console.log.error(e);
      });
    }
  }
  catch (e) {
    console.log.error(e);
  }
};
