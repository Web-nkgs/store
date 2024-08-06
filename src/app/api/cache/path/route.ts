import { env } from "app/config/env";
import { revalidatePath, revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { path, token } = body;

  if (!path || !token) {
    return NextResponse.json(
      { error: "Missing path or token" },
      { status: 400 }
    );
  }

  if (token !== env.CACHE_TOKEN) {
    return NextResponse.json({ error: "Invalid token" }, { status: 401 });
  }

  revalidatePath(path);

  return NextResponse.json({ success: true });
}
