const axios = require('axios');


const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=0b12eb1c149f1ec30cca2e98910c9c74&units=metric`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}