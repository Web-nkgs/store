import { NextResponse } from "next/server"
// Filesystem is for NodeJS not for edge, so you have to look for it here:
// https://nextjs.org/docs/pages/api-reference/edge
export const runtime = "edge"


export async function GET() {
  return NextResponse.json({status: "ok"})
}
