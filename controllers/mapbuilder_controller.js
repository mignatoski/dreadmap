import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export function get (req, res) {
    res.sendFile(join(__dirname, '../views/mapbuilder.html'));
}