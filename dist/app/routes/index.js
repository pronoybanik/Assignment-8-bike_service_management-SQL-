"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const customer_routes_1 = require("../modules/Customer/customer.routes");
const bike_routes_1 = require("../modules/Bike/bike.routes");
const services_routes_1 = require("../modules/services/services.routes");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: '/customers',
        route: customer_routes_1.CustomerRoute
    },
    {
        path: '/bikes',
        route: bike_routes_1.BikesRoute
    },
    {
        path: '/services',
        route: services_routes_1.ServicesRoute
    },
];
moduleRoutes.forEach(route => router.use(route.path, route.route));
exports.default = router;
