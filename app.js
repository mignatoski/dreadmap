import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 3000;

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/node_modules/leaflet/'));
app.use(express.json());
app.set('views', './views');
app.set('view engine', 'pug');

// Register Routes
import mapbuilderRouter from './routes/mapbuilder.js';
app.use('/mapbuilder', mapbuilderRouter);

import indexRouter from './routes/index.js';
app.use('/', indexRouter);

// APIs
import markersApiRouter from './routes/api/markers.js';
app.use('/api/markers', markersApiRouter);



// Launch web server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
