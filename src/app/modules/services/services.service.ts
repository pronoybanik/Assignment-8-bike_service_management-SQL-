import { ServiceRecord } from "@prisma/client";
import prisma from "../../../shared/pisma"


const createServicesIntoDB = async (payload: ServiceRecord) => {
    // check that id is exit or not ..?
    const bikeValue = await prisma.bike.findUnique({
        where: {
            bikeId: payload.bikeId
        }
    })

    if (!bikeValue) {
        throw new Error("That Bike id is not valid")
    }

    const result = await prisma.serviceRecord.create({
        data: payload
    })

    return result;
};

const getAllServicesFromDB = async () => {
    const result = await prisma.serviceRecord.findMany({})
    return result;
};

const getSingleServicesFromDB = async (id: string) => {
    const result = await prisma.serviceRecord.findUniqueOrThrow({
        where: {
            serviceId: id
        }
    })
    return result;
};

const updateServicesIntoDB = async (id: string, data: Partial<ServiceRecord>): Promise<ServiceRecord> => {
    await prisma.serviceRecord.findUniqueOrThrow({
        where: {
            serviceId: id
        }
    })

    // Update with provided data
    const result = await prisma.serviceRecord.update({
        where: {
            serviceId: id
        },
        data
    });

    return result;
};


export const fetchPendingOrOverdueServices = async () => {
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);    
  
    const result = prisma.serviceRecord.findMany({
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
    })

    return result;
  };


export const ServicesService = {
    createServicesIntoDB,
    getAllServicesFromDB,
    getSingleServicesFromDB,
    updateServicesIntoDB,
    fetchPendingOrOverdueServices
}