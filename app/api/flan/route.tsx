// Backend Flan-t5-small

import { NextResponse, NextRequest } from "next/server";

export async function GET(req: NextRequest) {
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
  /*
  const hf_send = {
    inputs: {
      past_user_inputs: data.past_user_inputs,
      generated_responses: data.past_user_responses,
      text: data.data,
    },
  };
  */
  /*
  const hf_send = {
    inputs: data.data,
    parameters: {
      max_length: 256,
    },
  };
  */

  const hf_send = {
    inputs: data.data,
  };

  console.log(hf_send);

  // https://api-inference.huggingface.co/models/HuggingFaceH4/zephyr-7b-beta
  // https://api-inference.huggingface.co/models/ajsbsd/flan-t5-base-openbsd-faq
  const hf_response = await fetch(
    "https://api-inference.huggingface.co/models/HuggingFaceH4/zephyr-7b-beta",
    {
      headers: {
        Authorization: `Bearer ${process.env.HUGGINGFACE_API_KEY}`,
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(hf_send),
    }
  );

  const result = await hf_response.json();
  //const textme: String = result[0].generated_text;
  console.log(result);
  let textme = result[0].generated_text;
  //textme = textme.replace(/\n/g, "<br />");
  //textme.replace(/\n/g, "<br />");
  console.log(textme);
  return NextResponse.json({
    text: "Added!",
    data: data,
    hf_send: data.data,
    hf_result: textme,
  });
}
