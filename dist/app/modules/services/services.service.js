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
exports.ServicesService = exports.fetchPendingOrOverdueServices = void 0;
const pisma_1 = __importDefault(require("../../../shared/pisma"));
const createServicesIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    // check that id is exit or not ..?
    const bikeValue = yield pisma_1.default.bike.findUnique({
        where: {
            bikeId: payload.bikeId
        }
    });
    if (!bikeValue) {
        throw new Error("That Bike id is not valid");
    }
    const result = yield pisma_1.default.serviceRecord.create({
        data: payload
    });
    return result;
});
const getAllServicesFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield pisma_1.default.serviceRecord.findMany({});
    return result;
});
const getSingleServicesFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield pisma_1.default.serviceRecord.findUniqueOrThrow({
        where: {
            serviceId: id
        }
    });
    return result;
});
const updateServicesIntoDB = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    yield pisma_1.default.serviceRecord.findUniqueOrThrow({
        where: {
            serviceId: id
        }
    });
    // Update with provided data
    const result = yield pisma_1.default.serviceRecord.update({
        where: {
            serviceId: id
        },
        data
    });
    return result;
});
const fetchPendingOrOverdueServices = () => __awaiter(void 0, void 0, void 0, function* () {
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    const result = pisma_1.default.serviceRecord.findMany({
        where: {
            AND: [
                {
                    OR: [
                        { status: "pending" },
                        { status: "in_progress" }
                    ]
                },
                {
                    serviceDate: {
                        lt: sevenDaysAgo
                    }
                }
            ]
        }
    });
    return result;
});
exports.fetchPendingOrOverdueServices = fetchPendingOrOverdueServices;
exports.ServicesService = {
    createServicesIntoDB,
    getAllServicesFromDB,
    getSingleServicesFromDB,
    updateServicesIntoDB,
    fetchPendingOrOverdueServices: exports.fetchPendingOrOverdueServices
};
