import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export function get(req, res) {
    res.sendFile(join(__dirname, '../data/markers.json'));
};

export function getLocation(req, res) {
    res.sendFile(join(__dirname, `../data/${req.params.location}.json`));
};

export function setLocation(req, res) {
    fs.write(join(__dirname, `../data/${req.params.location}.json`), req.body, err => {
        res.sendStatus(500);
        return;
    });
    res.sendStatus(200);
};