import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    let files;
    try {
        files = await prisma.manik_data.findMany()
        console.log("Files: ", files);
    } catch(e) {
        console.log("Unable to get files")
        console.error(e)
    }

    return NextResponse.json({
        message: "Files for manik",
        data: files,
        status: 200
    })
}