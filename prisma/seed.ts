import { authService } from "../src/app/service/auth";
import { PrismaClient } from "@prisma/client";
import bcrypt, { hash } from "bcrypt";

const prisma = new PrismaClient();

const main = async () => {
  const anthuan = await prisma.user.upsert({
    where: { username: "anthuan" },
    update: {},
    create: {
      ...(await authService.encryptPassword("Montecristi2022")),
      username: "anthuan",
    },
  });

  const chris = await prisma.user.upsert({
    where: { username: "chris" },
    update: {},
    create: {
        ...(await authService.encryptPassword("Medallo1990")),
      username: "chris",
    },
  });
  
  console.log('Users seeded')
};
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
