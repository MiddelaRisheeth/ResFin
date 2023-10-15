var express = require('express');
var router = express.Router();
var ctrlLocations = require('../controller/index');

/* GET home page. */
router.get('/', ctrlLocations.homelist);
router.get('/restaurant', ctrlLocations.restaurantList);
router.get('/about/', ctrlLocations.about);
router.get('/restaurant-info/:restaurantid', ctrlLocations.restaurantInfo);

module.exports = router;
