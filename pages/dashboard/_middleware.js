import { NextResponse } from "next/server";
import redirects from "../../lib/redirects";

export async function middleware(req) {
  const isLoggedIn = !true;
  const { pathname } = req.nextUrl;

  if (isLoggedIn) {
    return NextResponse.next();
  } else if (
    !isLoggedIn &&
    pathname !== "/authentication/signin" &&
    pathname !== "/authentication/signup"
  ) {
    return await redirects(req);
  }
}
