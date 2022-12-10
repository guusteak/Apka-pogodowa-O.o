const fetch = require('node-fetch');
const {appendFile} = require('fs').promises;
const {normalize, resolve} = require('path');

function safeJoin(base, target){
    const targetPath = '.' +normalize('/' + target);
    return resolve(base, targetPath);
}

const getDataFileName = (city) => safeJoin(`./data/`, `${city}.txt`);

const processWeatherData = async (data, cityName) => {
    const foundData = data.find(stationData => {
        return stationData.stacja === cityName;
    });
    console.log(foundData);
    if (!foundData){
        throw new Error('There is no such city in our API')
    }
    const {cisnienie: pressure,
        wilgotnosc_wzgledna: humidity,
        temperatura: temperature
    } = foundData;
    const weatherInfo = `In ${cityName} there is ${temperature}C, ${humidity}% of humidity and pressure of ${pressure}hPa`;
    console.log(weatherInfo);
    const dateTimeString = new Date().toLocaleString();
    await appendFile(getDataFileName(cityName), `${dateTimeString}\n${weatherInfo}\n`);
};

const cityNameChecker = async cityName =>{
    try {
        const res = await fetch('https://danepubliczne.imgw.pl/api/data/synop');
        const data = await res.json();
        await processWeatherData(data, cityName);
    }
    catch (e){
        console.log(e);
    }

}
cityNameChecker(process.argv[2]);


