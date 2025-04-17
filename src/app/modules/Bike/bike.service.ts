import { Bike } from "@prisma/client";
import prisma from "../../../shared/pisma"


const createBikeIntoDB = async (payload: Bike) => {
    // check that id is exit or not ..?
    const customerValue = await prisma.customer.findUnique({
        where: {
            customerId: payload.customerId
        }
    })

    if (!customerValue) {
        throw new Error("That Customer id is not valid")
    }

    const result = await prisma.bike.create({
        data: payload
    })

    return result;
};

const getAllBikeFromDB = async () => {
    const result = await prisma.bike.findMany({})
    return result;
};

const getSingleBikeFromDB = async (id: string) => {
    const result = await prisma.bike.findUniqueOrThrow({
        where: {
            bikeId: id
        }
    })
    return result;
};



export const BikesService = {
    createBikeIntoDB,
    getAllBikeFromDB,
    getSingleBikeFromDB,

}