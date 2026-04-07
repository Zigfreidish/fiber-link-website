import { NextResponse } from "next/server";

const supportedLocales = ["en", "zh", "ja", "ko"];
const defaultLocale = "en";

export function middleware(request) {
  const { pathname } = request.nextUrl;

  const hasLocale = supportedLocales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );

  if (hasLocale) return NextResponse.next();

  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next|api|favicon\\.ico|brand|images|og|.*\\.(?:png|jpg|jpeg|svg|ico|webp)).*)"],
};
