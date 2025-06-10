import { NextRequest } from "next/server";

export default function POST(req: NextRequest) {
  console.log(req);
  return new Response("Successful request", { status: 200 });
}
