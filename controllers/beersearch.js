const axios = require("axios");

const keyString = `&key=${process.env.BREWERY_DB_KEY}`
const searchURL = 'http://api.brewerydb.com/v2/search?&format=json&q='

module.exports = {
    searchBeer: function (req, res) {
        console.log(req.params);
        axios.get(searchURL + req.params.query + keyString).
            then((beer) => { 
                // console.log(beer.data);
                res.json(beer.data);
            }).
            catch((err) => { res.json(err); });
}
}