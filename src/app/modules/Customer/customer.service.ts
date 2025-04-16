import { Customer } from "../../../generated/prisma";
import prisma from "../../../shared/pisma"


const createCustomerIntoDB = async (payload: Customer) => {

    const result = await prisma.customer.create({
        data: payload
    })

    return result;
};

const getAllCustomerFromDB = async () => {
    const result = await prisma.customer.findMany({})
    return result;
};

const getSingleCustomerFromDB = async (id: string) => {
    const result = await prisma.customer.findUniqueOrThrow({
        where: {
            customerId: id
        }
    })
    return result;
};

const updateCustomerIntoDB = async (id: string, data: Partial<Customer>): Promise<Customer> => {
    await prisma.customer.findUniqueOrThrow({
        where: {
            customerId: id
        }
    })

    // Update with provided data
    const result = await prisma.customer.update({
        where: {
            customerId: id
        },
        data
    });

    return result;
};

const deleteCustomerFromDB = async (id: string): Promise<Customer | null> => {
    // Ensure the admin exists
    await prisma.customer.findUniqueOrThrow({
        where: {
            customerId: id
        }
    });

    // delete data into DB
    const result = await prisma.customer.delete({
        where: {
            customerId: id
        }
    });

    return result;
};


export const CustomerService = {
    createCustomerIntoDB,
    getAllCustomerFromDB,
    getSingleCustomerFromDB,
    updateCustomerIntoDB,
    deleteCustomerFromDB
}