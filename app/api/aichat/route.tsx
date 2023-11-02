import { NextResponse, NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  //const { token } = req.body;
  const secret = req.nextUrl.searchParams.get("secret");

  if (secret !== process.env.AJSBSD_API_KEY) {
    return Response.json({ message: "Invalid secret" }, { status: 401 });
  }

  return NextResponse.json({ text: "Hello" });
}

export async function POST(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get("secret");

  if (secret !== process.env.AJSBSD_API_KEY) {
    return Response.json({ message: "Invalid secret" }, { status: 401 });
  }

  const data = await req.json();

  return NextResponse.json({ text: "Added!", data: data });
}
