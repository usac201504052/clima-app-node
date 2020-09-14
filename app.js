const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

//lugar.getLugarLatLng(argv.direccion)
//    .then(console.log);

//clima.getClima(34.05, -118.24)
//    .then(console.log)
//    .catch(console.log);

const getInfo = async(dir) => {
    try {
        const resp = await lugar.getLugarLatLng(dir);
        const tem = await clima.getClima(resp.lat, resp.lng);

        return `El clima en ${resp.direccion} es de ${tem} grados Celsius`;
    } catch {
        return `El clima en ${dir} no se pudo determinar`;
    }

}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);