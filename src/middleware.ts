import createMiddleware from "next-intl/middleware";
import { NextResponse, type NextRequest } from "next/server";

import { localePrefix, locales } from "./app/navigation";

export default createMiddleware({
  locales,
  defaultLocale: "en",
  localePrefix,
});

export const config = {
  matcher: ["/", "/(en|uk)/:path*", "/((?!api|_next|_vercel|.*\\..*).*)"],
};
