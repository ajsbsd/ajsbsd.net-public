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
  //console.log(data.data);

  /*
    {
        "inputs": {
            "past_user_inputs": ["Which movie is the best ?"],
            "generated_responses": ["It's Die Hard for sure."],
            "text": "Can you explain why ?",
        },
    }
  */

  const hf_send = {
    inputs: {
      past_user_inputs: ["Which movie is the best ?"],
      generated_responses: ["It is Die Hard for sure."],
      text: data.data,
    },
  };

  const hf_response = await fetch(
    "https://api-inference.huggingface.co/models/microsoft/DialoGPT-large",
    {
      headers: { Authorization: `Bearer ${process.env.HUGGINGFACE_API_KEY}` },
      method: "POST",
      body: JSON.stringify(hf_send),
    }
  );

  const hf_result = await hf_response.json();
  console.log(hf_result);

  return NextResponse.json({
    text: "Added!",
    data: data,
    hf_send: data.data,
    hf_result: hf_result.generated_text,
  });
}
