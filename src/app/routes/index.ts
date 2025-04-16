import express from "express";
import { CustomerRoute } from "../modules/Customer/customer.routes";
import { BikesRoute } from "../modules/Bike/bike.routes";

const router = express.Router()

const moduleRoutes = [
    {
        path: '/customers',
        route: CustomerRoute
    },
    {
        path: '/bikes',
        route: BikesRoute
    },
];

moduleRoutes.forEach(route => router.use(route.path, route.route))

export default router;