import prisma from "../../../shared/pisma"


const CreateCustomerIntoDB = async (payload: any) => {

    const result = await prisma.customer.create({
        data: payload
    })

    return result;
}

export const CustomerService = {
    CreateCustomerIntoDB
}