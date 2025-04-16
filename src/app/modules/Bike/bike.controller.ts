import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAync";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { BikesService } from "./bike.service";


const createBikes = catchAsync(async (req: Request, res: Response) => {
    const result = await BikesService.createBikeIntoDB(req.body);


    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Bikes added successfully",
        data: result
    })
});

const getAllBikes = catchAsync(async (req: Request, res: Response) => {
    const result = await BikesService.getAllBikeFromDB();


    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Bikes fetched successfully",
        data: result
    })
});

const getSingleBikes = catchAsync(async (req: Request, res: Response) => {

    const { id } = req.params;
    const result = await BikesService.getSingleBikeFromDB(id);


    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Bikes fetched successfully",
        data: result
    })
});



export const BikesController = {
    createBikes,
    getAllBikes,
    getSingleBikes
};
