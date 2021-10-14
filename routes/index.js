var express = require('express');
var router = express.Router();

var index_controller = require('../controllers/index_controller');

/* GET home page. */
router.get('/', index_controller.index_get);

module.exports = router;