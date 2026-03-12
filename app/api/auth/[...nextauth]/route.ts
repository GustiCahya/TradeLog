import { NextRequest } from "next/server";
import { handlers } from "@/auth";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export async function GET(req: NextRequest) {
  const res = await handlers.GET(req);
  return new Response(res.body, {
    status: res.status,
    headers: {
      ...Object.fromEntries(res.headers),
      ...corsHeaders,
    },
  });
}

export async function POST(req: NextRequest) {
  const res = await handlers.POST(req);
  return new Response(res.body, {
    status: res.status,
    headers: {
      ...Object.fromEntries(res.headers),
      ...corsHeaders,
    },
  });
}

export async function OPTIONS() {
  return new Response(null, {
    status: 200,
    headers: corsHeaders,
  });
}