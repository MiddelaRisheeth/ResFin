const mongoose = require('mongoose');
const popfoodsSchema = new mongoose.Schema({
    name: String,
    desc: String,
    imgSrc: String
});
const reviewSchema = new mongoose.Schema({
    author: String,
    rating: Number,
    reviewText: String,
    timestamp:Date,
});
const restaurantSchema = new mongoose.Schema({
    
    popfoods:[popfoodsSchema]
    review:[reviewSchema]

        title: String,
        address:String,

   
        
        imgSrc:String,
        rating: Number
        
        photo1:String,
        photo2:String,
        desc:String,
    });
mongoose.model('Restaurant', restaurantSchema);

