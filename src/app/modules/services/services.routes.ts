import express from 'express';
import { ServiceController } from './services.controller';

const router = express.Router();

router.post('/', ServiceController.createService);
router.get('/', ServiceController.getAllService);
router.get("/status", ServiceController.getPendingOrOverdueServices);
router.get('/:id', ServiceController.getSingleService);
router.put('/:id', ServiceController.updateService);
export const ServicesRoute = router;
