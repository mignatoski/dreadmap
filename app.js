const express = require('express');
const app = express();
const port = 3000;


app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/node_modules/leaflet/'));

// Register Routes
var indexRouter = require('./routes/index');
app.use('/', indexRouter);

// Launch web server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
