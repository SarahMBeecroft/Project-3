const axios = require("axios");

const keyString = `&key=${process.env.BREWERY_DB_KEY}`;
const searchURL = 'http://sandbox-api.brewerydb.com/v2/search?';
const breweries = '&withBreweries=Y';   // we're probably going to want the brewery info...


module.exports = {
    searchBeer: function (req, res) {
        console.log(req.params);
        axios.get(searchURL + req.params.query + breweries + keyString).
            then((beer) => {
                // console.log(beer.data);
                res.json(beer.data);
            }).
            catch((err) => { res.json(err); });
    }
}