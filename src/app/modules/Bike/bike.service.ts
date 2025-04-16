import { Bike } from "../../../generated/prisma";
import prisma from "../../../shared/pisma"


const createBikeIntoDB = async (payload: Bike) => {

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