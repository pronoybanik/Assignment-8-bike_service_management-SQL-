import express from "express";
import { CustomerRoute } from "../modules/Customer/customer.routes";

const router = express.Router()

const moduleRoutes = [
    {
        path: '/customers',
        route: CustomerRoute
    },
];

moduleRoutes.forEach(route => router.use(route.path, route.route))

export default router;