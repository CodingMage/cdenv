import { NextResponse } from "next/server";
import redirects from "../../lib/redirects";
import { getCookie } from "cookies-next";

export async function middleware(req) {
  const token = getCookie("token", { req });
  const { pathname } = req.nextUrl;
  if (token) {
    return NextResponse.next();
  } else if (
    !token &&
    pathname !== "/authentication/signin" &&
    pathname !== "/authentication/signup"
  ) {
    return await redirects(req);
  }
}
