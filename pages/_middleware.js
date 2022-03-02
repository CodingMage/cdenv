import { NextResponse } from "next/server";
// import redirects from "../../lib/redirects";
import { getCookie } from "cookies-next";
import redirectsAuth from "../lib/redirectsAuth";

export async function middleware(req) {
  const token = getCookie("token", { req });
  const { pathname } = req.nextUrl;
  if (
    token &&
    (pathname === "/authentication/signin" ||
      pathname === "/authentication/signup")
  ) {
    console.log("ssssssssssss");
    return await redirectsAuth(req);
  } else {
    return NextResponse.next();
  }
}
