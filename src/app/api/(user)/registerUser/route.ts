import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  // jsonplaceholder APIにPOSTリクエストを送信
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  });

  // jsonplaceholderのレスポンスを受け取る
  const data = await res.json();

  // リダイレクトしないようにして、結果を返す
  return NextResponse.json(data, { status: 200 });
}
