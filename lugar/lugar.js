const axios = require('axios');

const getLugarLatLng = async(dir) => {

    const encodedURL = encodeURI(dir);
    console.log(encodedURL);
    const instance = axios.create({
        baseURL: `https://ip-geolocation-ipwhois-io.p.rapidapi.com/json/?ip=${encodedURL}`,
        headers: {
            'X-RapidAPI-key': 'd44a02c50bmshe3ff7d6d7df166dp14b748jsnd635825bed2a',
            'X-RapidAPI-host': 'ip-geolocation-ipwhois-io.p.rapidapi.com'
        }
    });

    const resp = await instance.get();

    if (resp.data.legnth === 0) {
        throw new Error(`No hay resultados para ${dir}`);
    }

    const data = resp.data;
    const lat = data.latitude;
    const lng = data.longitude;
    const direccion = data.org;

    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}