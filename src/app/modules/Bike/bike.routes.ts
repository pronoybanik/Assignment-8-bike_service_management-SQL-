import express from 'express';
import { BikesController } from './bike.controller';

const router = express.Router();

router.post('/', BikesController.createBikes);
router.get('/', BikesController.getAllBikes);
router.get('/:id', BikesController.getSingleBikes);

export const BikesRoute = router;