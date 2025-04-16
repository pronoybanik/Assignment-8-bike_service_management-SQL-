import express from 'express';
import { CustomerService } from './customer.service';
import { CustomerController } from './customer.controller';

const router = express.Router();

router.post('/', CustomerController.createCustomer);
router.get('/', CustomerController.getAllCustomer)
router.get('/:id', CustomerController.getSingleCustomer)
router.put('/:id', CustomerController.updateCustomer)
router.delete('/:id', CustomerController.deleteCustomer)

export const CustomerRoute = router;