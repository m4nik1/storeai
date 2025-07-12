import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  console.log("Recieved request: ", req.body);

  const response = await fetch('http://localhost:8080/upload',{
    method: "POST",
    body: req.body,
    headers: {
      'Content-Type': 'multipart/form-data',
    }
  })

  console.log("Response: ", response)

  
  return response
}
