import { Router } from 'express';
const router = Router();

import { get } from '../controllers/mapbuilder_controller.js';

/* GET mapbuilder. */
router.get('/', get);

export default router;