const request = require('request');
const apiOptions = {
    server: "http://localhost:3000"
};
if (process.env.NODE_ENV === 'production') {
    apiOptions.server = 'https://restaurant-finder.cyclic.cloud';
};

const getRestAll = (req, res, callback) => {
    const path = `/api/restaurants`;
    const requestOptions = {
        url: `${apiOptions.server}${path}`,
        method: 'GET',
        json: {}
    };
    request(
        requestOptions,
        (err, { statusCode }, body) => {
            if (statusCode === 200) {
                callback(req, res, body);
            } else {
                console.log(statusCode);
            }
        });
};

const getRestOne = (req, res, callback) => {
    const path = `/api/restaurants/${req.params.restaurantid}`;
    const requestOptions = {
        url: `${apiOptions.server}${path}`,
        method: 'GET',
        json: {}
    };
    request(
        requestOptions,
        (err, { statusCode }, body) => {
            if (statusCode === 200) {
                callback(req, res, body);
            } else {
                console.log(statusCode);
            }
        });
};

const homelist = (req, res) => {
    res.render('index', {
        title: 'Restaurant Finder'
    })
}

const restaurantList = (req, res) => {
    getRestAll(req, res,
        (req, res, responseData) => renderHomePage(req, res, responseData)
    );
}

const about = (req, res) => {
    res.render('about', {
        title: 'About'
    })
}

const restaurantInfo = (req, res) => {
    getRestOne(req, res,
        (req, res, responseData) => renderRestPage(req, res, responseData)
    );
}

const renderRestPage = (req, res, restaurantOne) => {
        res.render('restaurant-info', {
        title: 'Restaurant',
        resnum: req.query.param1,
        restaurant: restaurantOne
    })
}

const renderHomePage = (req, res, restaurantAll) => {
    res.render('restaurant-list', {
        title: 'Restaurant List',
        locationName: req.query.param1,
        restaurants: restaurantAll
    })
}

module.exports = {
    homelist,
    restaurantList,
    restaurantInfo,
    about,
    getRestAll,
    getRestOne
}