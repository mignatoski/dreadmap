import { Router } from 'express';
const router = Router();

import index_controller from '../controllers/index_controller.js';

/* GET home page. */
router.get('/', index_controller.index_get);

router.get('/:location', index_controller.getLocation);


export default router;