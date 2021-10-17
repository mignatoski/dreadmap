import { Router } from 'express';
const router = Router();

import markers_api from '../../api/markers_api.js';

/* List default markers */
router.get('/', markers_api.get);

/* List markers for a location */
router.get('/:location', markers_api.getLocation);

router.post('/:location', markers_api.setLocation);

export default router;