const express = require('express');
const router = express.Router();
const ctrlrestaurants = require('../controller/restaurants');

router
    .route('/restaurants')
    .get(ctrlrestaurants.restaurantsAll)
    .post(ctrlrestaurants.restaurantsCreate);
router
    .route('/restaurants/:restaurantid')
    .get(ctrlrestaurants.restaurantsReadOne);

module.exports=router;