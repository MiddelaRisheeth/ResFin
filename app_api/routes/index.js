const express = require('express');
const router = express.Router();
const ctrlrestaurants = require('../controller/restaurant');

router
    .route('/restaurant')
    .get(ctrlrestaurants.restauranstAll)
    .post(ctrlrestaurants.restaurantsCreate);
router
    .route('/restaurant/:restaurantid')
    .get(ctrlrestaurants.restaurantsReadOne);

module.exports=router;