import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAync";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { ServicesService } from "./services.service";


const createService = catchAsync(async (req: Request, res: Response) => {
    const service = await ServicesService.createServicesIntoDB(req.body);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Service record created successfully",
        data: service
    })
});

const getAllService = catchAsync(async (req: Request, res: Response) => {
    const service = await ServicesService.getAllServicesFromDB();

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Service records fetched successfully",
        data: service
    })
});

const getSingleService = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const service = await ServicesService.getSingleServicesFromDB(id);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Service record fetched successfully",
        data: service
    })
});

const updateService = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const data = req.body;
    const service = await ServicesService.updateServicesIntoDB(id, data);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Service marked as completed",
        data: service
    })
});

const getPendingOrOverdueServices  = catchAsync(async (req: Request, res: Response) => {
    const services = await ServicesService.fetchPendingOrOverdueServices();

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Service marked as completed",
        data: services
    })
});


export const ServiceController = {
    createService,
    getAllService,
    getSingleService,
    updateService,
    getPendingOrOverdueServices
};
