var express = require('express');
var router = express.Router();
const PunkAPIWrapper = require('punkapi-javascript-wrapper')
const punkAPI = new PunkAPIWrapper()

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'IronBeers' });
});

router.get('/beers', ((req, res, next) =>{
    punkAPI
    .getBeers()
    .then(beersFromApi => {
        // console.log('Beers from the database: ', beersFromApi)
        const beerData = {beersFromApi};
        // console.log("these are the 25 beers", beerData)
        res.render("beers.hbs", beerData)
    })
    .catch(error => console.log(error));
}))

router.get('/random-beer', ((req, res, next)=>{
    punkAPI
    .getRandom()
    .then(responseFromAPI => {
    const random = { responseFromAPI };
    res.render('random-beer', random);
    })
    .catch(error => console.log(error));

}))

module.exports = router;
