const fetch = require('node-fetch');

const coldestPlace = async (data) =>{
    const sorted = [...data].sort((a,b)=>{
        if(Number (b.temperatura) >Number(a.temperatura)){
            return -1;
        }
        if(Number (b.temperatura) <Number (a.temperatura)){
            return 1;
        }
        return 0;
    });
    const{
        stacja: station,
        temperatura: temperature,
    }=sorted[0];
    console.log(`Lowest temperature is currently in ${station} and its ${temperature} C degrees`);
    console.log('To teraz bedzie pętelka od najzimniejszego miasta do najcieplejszego');
    for(const miasto of sorted){
        console.log(`Miasto ${miasto.stacja} z temperaturą ${miasto.temperatura}`);
    }
}

const processWeatherData = async (data) => {
    const sorted = [...data].sort((a,b)=>{
        if(b.temperatura > a.temperatura){
            return 1;
        }
        if(a.temperatura > b.temperatura){
            return -1;
        }
        return 0;
    });
    const {
        stacja: station,
        temperatura: temperature,
    } = sorted[0];
    console.log(`Najwieksza temperatura jest aktualnie w ${station} i wyniosi ${temperature}C`)
};

const findWarmestPlaceInPoland = async () =>{
    try {
        const res = await fetch('https://danepubliczne.imgw.pl/api/data/synop');
        const data = await res.json();
        await processWeatherData(data);
        await coldestPlace(data);
    }
    catch (e){
        console.log(e);
    }

}
findWarmestPlaceInPoland();
