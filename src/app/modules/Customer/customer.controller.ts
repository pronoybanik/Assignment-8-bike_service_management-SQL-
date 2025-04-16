import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAync";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { CustomerService } from "./customer.service";


const createCustomer = catchAsync(async (req: Request, res: Response) => {
    const result = await CustomerService.createCustomerIntoDB(req.body);


    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Customer created successfully",
        data: result
    })
});

const getAllCustomer = catchAsync(async (req: Request, res: Response) => {
    const result = await CustomerService.getAllCustomerFromDB();


    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Customers fetched successfully",
        data: result
    })
});

const getSingleCustomer = catchAsync(async (req: Request, res: Response) => {

    const { id } = req.params;
    const result = await CustomerService.getSingleCustomerFromDB(id);


    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Customers fetched successfully",
        data: result
    })
});

const updateCustomer = catchAsync(async (req: Request, res: Response) => {

    const { id } = req.params;
    const data = req.body;
    const result = await CustomerService.updateCustomerIntoDB(id, data);


    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Customer updated successfully",
        data: result
    })
});

const deleteCustomer = catchAsync(async (req: Request, res: Response) => {

    const { id } = req.params;

    const result = await CustomerService.deleteCustomerFromDB(id);


    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Customer deleted successfully",
        data: result
    })
});

export const CustomerController = {
    createCustomer,
    getAllCustomer,
    getSingleCustomer,
    updateCustomer,
    deleteCustomer
};
