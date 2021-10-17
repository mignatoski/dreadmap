import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export function index_get(req, res) {
    res.sendFile(join(__dirname, '../views/index.html'));
};