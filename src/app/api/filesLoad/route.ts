import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export default async function GET(req: NextRequest) {
    try {
        const files = await prisma.manik_data.findMany()
        console.log("Files: ", files);
    } catch(e) {
        console.log("Unable to get files")
        console.error(e)
    }

    return NextResponse.json({
        message: "Files for manik",
        data: { "test": "test" },
        status: 200
    })
}