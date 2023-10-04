const mongoose = require('mongoose');
const Rest = mongoose.model('../models/restaurants');
const express = require('express');

express().use(express.urlencoded({ extended: true }));

async function restaurantsAll(req, res) {
    try {
        const data = await Rest.find({class: `${req.query.param1}` + 'restaurant'})
            .then(function (restaurants) {
                res.status(200).json(restaurants);
            })
    } catch (err) {
        res.status(404).json(err);
    }
};

async function restaurantsReadOne(req, res) {
    try {
        const restId = await Rest.findById(req.params.restaurantid)
            .then(function (restaurant) {
                res
                    .status(200)
                    .json(restaurant);
            });
    } catch (err) {
        return res
            .status(404)
            .json(err);
    }
};

async function restaurantsCreate (req, res) {
    try {
        const rest = await Rest.create({
            title: req.body.title,
            smalDesc: req.body.smalDesc,
            address: req.body.address,
            rating: req.body.rating,
            class: req.body.class,
            imgSrc: "/images/" + req.body.title + ".jpeg",
            photo1: "/images/" + req.body.title + "-interior.jpeg",
            photo2: "/images/" + req.body.title + "-other.jpeg",
            popfoods: [{
                name: req.body.pname1,
                desc: req.body.pdesc1,
                imgSrc: "/images/" + req.body.pname1 + ".jpeg"
            }, {
                name: req.body.pname2,
                desc: req.body.pdesc2,
                imgSrc: "/images/" + req.body.pname2 + ".jpeg"
            }, {
                name: req.body.pname3,
                desc: req.body.pdesc3,
                imgSrc: "/images/" + req.body.pname3 + ".jpeg"
            }],
        })
        .then(function (restaurant) {
            res
                .status(201)
                .redirect('/');
        });
    } catch (err) {
        return res
            .status(404)
            .json("Unable to add restaurant: " +err);
}
};
module.exports = {
    restaurantsAll,
    restaurantsCreate,
    restaurantsReadOne,
};