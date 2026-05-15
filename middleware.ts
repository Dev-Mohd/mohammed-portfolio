import { auth } from "@/lib/auth";
import { NextResponse } from "next/server";

export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;
  const isAdmin = req.auth?.user?.role === "admin";

  const isApiAuthRoute = nextUrl.pathname.startsWith("/api/auth");
  const isPublicRoute = nextUrl.pathname === "/" || 
                        nextUrl.pathname.startsWith("/projects") ||
                        nextUrl.pathname.startsWith("/about") ||
                        nextUrl.pathname.startsWith("/contact") ||
                        nextUrl.pathname.startsWith("/api/public");
  const isAdminRoute = nextUrl.pathname.startsWith("/admin") && !nextUrl.pathname.startsWith("/admin/login");

  if (isApiAuthRoute) {
    return NextResponse.next();
  }

  if (isAdminRoute) {
    if (!isLoggedIn || !isAdmin) {
      return NextResponse.redirect(new URL("/admin/login", nextUrl));
    }
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|public).*)"],
};
