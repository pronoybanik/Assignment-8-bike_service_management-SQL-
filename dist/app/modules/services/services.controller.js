"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceController = void 0;
const catchAync_1 = __importDefault(require("../../../shared/catchAync"));
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const http_status_1 = __importDefault(require("http-status"));
const services_service_1 = require("./services.service");
const createService = (0, catchAync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const service = yield services_service_1.ServicesService.createServicesIntoDB(req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Service record created successfully",
        data: service
    });
}));
const getAllService = (0, catchAync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const service = yield services_service_1.ServicesService.getAllServicesFromDB();
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Service records fetched successfully",
        data: service
    });
}));
const getSingleService = (0, catchAync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const service = yield services_service_1.ServicesService.getSingleServicesFromDB(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Service record fetched successfully",
        data: service
    });
}));
const updateService = (0, catchAync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const data = req.body;
    const service = yield services_service_1.ServicesService.updateServicesIntoDB(id, data);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Service marked as completed",
        data: service
    });
}));
const getPendingOrOverdueServices = (0, catchAync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const services = yield services_service_1.ServicesService.fetchPendingOrOverdueServices();
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Service marked as completed",
        data: services
    });
}));
exports.ServiceController = {
    createService,
    getAllService,
    getSingleService,
    updateService,
    getPendingOrOverdueServices
};
