const fetch = require('node-fetch');

const processWeatherData = (data) => {
    const foundData = data.find(stationData => {
        return stationData.stacja === cityName;
    });
    console.log(foundData);
    if (!foundData){
        console.log('Ustawa nie przewiduje takiego debilnego zachowania jak zrobiles');
    }
    const {cisnienie: pressure,
        wilgotnosc_wzgledna: humidity,
        temperatura: temperature
    } = foundData;
    const weatherInfo = `In ${cityName} there is ${temperature}C, ${humidity}% of humidity and pressure of ${pressure}hPa`;
    console.log(weatherInfo)
};

const cityName = process.argv[2];

fetch('https://danepubliczne.imgw.pl/api/data/synop')
    .then(r => r.json())
    .then(processWeatherData);
