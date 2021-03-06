const axios = require("axios");
// const express = require("express");
// const app = express();

// let allowCrossDomain = function (req, res, next) {
// 	res.header('Access-Control-Allow-Origin', "*");
// 	res.header('Access-Control-Allow-Headers', "*");
// 	next();
// }
// app.use(allowCrossDomain);


const mapsKey = `key=${process.env.MAPS_KEY}`;
const mapsURL = 'https://maps.googleapis.com/maps/api/js?';
const mapsURL2 = '&v=3.exp&libraries=geometry,drawing,places&callback=';
module.exports = {
	mapSearch: function (req, res) {
		console.log("map search backend hit");
		axios.get(mapsURL + mapsKey + mapsURL2 + req.params.callback).
			then(map => {
				res.send(map.data);
			}).
			catch(err => { console.log(err); });
	}
}
