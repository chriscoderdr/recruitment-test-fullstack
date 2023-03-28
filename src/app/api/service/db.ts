import { Prisma, PrismaClient } from "@prisma/client";

let prismaClient: PrismaClient;

const getDB = () => {
    if (!prismaClient) {
        prismaClient = new PrismaClient();
        prismaClient.$connect();
        prismaClient.$on = (event) => {
            console.log(event);
        }
    }
    return prismaClient;
}

export const dbService = {
    getDB
}