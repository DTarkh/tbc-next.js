// middleware.js
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

// 1. The main middleware function
export function middleware(request) {
  // 2. Checking the request or performing an action
  const isAuthenticated = request.cookies.get("authToken");

  // 3. Conditionally redirecting or responding
  if (!isAuthenticated) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // 4. Allow request to proceed if no action is needed
  return NextResponse.next();
}

// 5. Define paths that will trigger the middleware
export const config = {
  matcher: ["/dashboard/:path*", "/profile/:path*"], // paths to apply the middleware
};