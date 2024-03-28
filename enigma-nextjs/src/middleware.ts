import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  let isPublicRoute = false;
  if (
    request.nextUrl.pathname === "/auth/login" ||
    request.nextUrl.pathname === "/auth/register"
  ) {
    isPublicRoute = true;
  }

  //if the token is not present and the route is not public then redirect to the login
  const token = request.cookies.get("token")?.value || "";
//   console.log(isPublicRoute);
//   console.log(token);
  if (!token && !isPublicRoute) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

//if the token is present and the route is not public then should redirect it to the home page

if(token && isPublicRoute){
    return NextResponse.redirect(new URL("/", request.url));
}

  return NextResponse.next();
}

export const config = {
  matcher: ["/auth/login", "/auth/registration", "/"],
};
