import { Router } from 'express';
const router = Router();

import { index_get } from '../controllers/index_controller.js';

/* GET home page. */
router.get('/', index_get);

export default router;