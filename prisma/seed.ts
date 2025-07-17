import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

async function main() {
    try {
      await prisma.manik_data.create({
        data: {
            file_name: 'test.py',
            size: '100MB',
            uploaded: new Date()
        }
      });
    } catch (error) {
        console.log("Cannot add data to db")
        console.error(error)
    }
}

main();