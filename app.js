import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 3000;

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/node_modules/leaflet/'));

// Register Routes
import indexRouter from './routes/index.js';
app.use('/', indexRouter);

import mapbuilderRouter from './routes/mapbuilder.js';
app.use('/mapbuilder', mapbuilderRouter);


// Launch web server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
