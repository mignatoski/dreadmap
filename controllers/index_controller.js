const path = require('path');

exports.index_get = function(req, res) {
    res.sendFile(path.join(__dirname, '../views/index.html'));
};