// src/middleware.ts
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

// const protectedRoutes = ["/home", "/operation"];
const protectedRoutes = ["/operation"];

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;

  if (protectedRoutes.includes(req.nextUrl.pathname) && !token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/:path*",
};
