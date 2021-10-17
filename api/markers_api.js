import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const api = {};

api.get = function (req, res) {
    res.sendFile(join(__dirname, '../data/markers.json'));
};

api.getLocation = function (req, res) {
    console.log(req.params.location);
    res.sendFile(join(__dirname, `../data/${req.params.location}.json`));
};

api.setLocation = function (req, res) {
    try {
        fs.writeFileSync(join(__dirname, `../data/${req.params.location}.json`), JSON.stringify(req.body));
        res.sendStatus(200);
    } catch (err) {
        res.sendStatus(500);
    }
};

export default api;