import express from 'express';
import { CustomerService } from './customer.service';
import { CustomerController } from './customer.controller';

const router = express.Router();

router.post(
    '/',
    CustomerController.createCustomer
)

export const CustomerRoute = router;