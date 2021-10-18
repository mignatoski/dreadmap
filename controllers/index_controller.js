// index_controller.js
var controller = {};

controller.index_get = (req, res) => {
    res.render('index', {location:"artaria"})
};

controller.getLocation = (req, res) => {
    res.render('index', {location: req.params.location})
};

export default controller