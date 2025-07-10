import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  console.log("Recieved request: ", req.body);

  await fetch('http://localhost:8080/upload',{
    method: "POST",
    data: req.body,
    headers: {
      'Content-Type': 'multipart/form-data',
    }
  })

  
  return new Response("Successful request", { status: 200 });
}
