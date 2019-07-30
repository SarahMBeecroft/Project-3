const axios = require("axios");

const mapsKey = `&key=${process.env.MAPS_KEY}`
const mapsURL = 'https://www.google.com/maps/dir/?api=1&'
const origin = 'origin=47.6062,-122.3321'
const destination = '&destination=47.6740,-122.1215'
const travelMode = '&travelmode=driving'

//https://maps.googleapis.com/maps/api/directions/json?origin=Disneyland&destination=Universal+Studios+Hollywood&key=YOUR_API_KEY
// module.exports = {
//     maps: function (res) {
//       
//         axios.get(mapsURL + origin + destination+ travelMode+ mapsKey).
//             then((beer) => { 
//                 // console.log(beer.data);
//                 res.json(beer.data);
//             }).
//             catch((err) => { res.json(err); });
// }
// }