import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // const { device } = userAgent(request);
  // const url = request.nextUrl.clone();

  // const pathPrivate = ["/checkout", "/blog"];

  // if (
  //   pathPrivate.some((item) => item === url.pathname) &&
  //   device.type !== "mobile"
  // ) {
  //   url.pathname = "/login";
  //   return NextResponse.redirect(url);
  // }

  return NextResponse.next();
}
