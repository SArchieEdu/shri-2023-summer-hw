import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export async function GET(request) {
  const tag = request.nextUrl.searchParams.get("tag");

  if (tag) {
    revalidateTag(tag);
    return NextResponse.json({ revalidated: true });
  }

  return NextResponse.json({ revalidated: false });
}
