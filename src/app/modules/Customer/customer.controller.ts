import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAync";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { CustomerService } from "./customer.service";


const createCustomer = catchAsync(async (req: Request, res: Response) => {
    const result = await CustomerService.CreateCustomerIntoDB(req.body);


    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Customer created successfully",
        data: result
    })
});

export const CustomerController = {
    createCustomer,
};
