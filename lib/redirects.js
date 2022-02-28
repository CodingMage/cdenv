import { NextResponse } from "next/server";

export default async function redirects(req) {
  const url = req.nextUrl.clone();

  // Find the redirect from the local JSON file, do note this JSON shouldn't be
  // large, as the space in Edge Functions is quite limited
  const localRedirect = {
    destination: "/authentication/signin",
  };
  if (localRedirect) {
    url.pathname = `${localRedirect.destination}`;
    return NextResponse.redirect(url);
  }
}
