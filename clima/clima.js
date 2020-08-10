const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=a99657de690babf7f7f4b8f666b50c76&units=metric`)
    return resp.data.main.temp;
}

module.exports = {
    getClima
}