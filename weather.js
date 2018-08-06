const weather = require('weather-js');
 const config  = require("../config.json");

module.exports = {
    task(client, message, suffix) {

suffix = suffix.split(' ');
  if (suffix.length < 1) {
}

  weather.find({ search: suffix.join(' '), degreeType: 'C' }, function(err, result) {
    if (err) {
    }

    if (!result || result.length < 1) {
    }

    result = result[0];

    message.channel.send({
      embed: {
        color: 0x32e2c8,
        title: 'Clima Atual',
        fields: [
          {
            name: 'Localização',
            value: result.location.name,
            inline: true
          },
          {
            name: 'Coordenadas',
            value: `${result.location.lat}, ${result.location.long}`,
            inline: true
          },
          {
            name: 'Fuso Horário',
            value: `UTC${result.location.timezone >= 0 ? `+${result.location.timezone}` : result.location.timezone}`,
            inline: true
          },
          {
            name: 'Condição',
            value: result.current.skytext,
            inline: true
          },
          {
            name: 'Temperatura',
            value: `${result.current.temperature} \u00B0${result.location.degreetype}`,
            inline: true
          },
          {
            name: 'Feels Like',
            value: `${result.current.feelslike} \u00B0${result.location.degreetype}`,
            inline: true
          },
          {
            name: 'Baixo',
            value: `${result.forecast[1].low} \u00B0${result.location.degreetype}`,
            inline: true
          },
          {
            name: 'Alto',
            value: `${result.forecast[1].high} \u00B0${result.location.degreetype}`,
            inline: true
          },
          {
            name: 'Velocidade do vento',
            value: result.current.winddisplay,
            inline: true
          },
          {
            name: 'Umidade',
            value: `${result.current.humidity}%`,
            inline: true
          },
          {
            name: 'Precipitação',
            value: `${result.forecast[1].precip} cm`,
            inline: true
          },
          {
            name: 'Tempo de Observação',
            value: result.current.observationtime,
            inline: true
          }
        ],
        thumbnail: {
          url: `https://resources.bastionbot.org/images/weather/${result.current.skycode}.png`
        },
        footer: {
          text: 'Powered by SysopCorp Weather'
        }
      }
    }).catch(e => {
      console.log.error(e);
    });
  });
}};