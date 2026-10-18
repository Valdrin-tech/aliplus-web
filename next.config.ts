import type { NextConfig } from "next";

// Every page lives under /sq/... or /en/.... Requests without a locale prefix
// are redirected: the language cookie wins, then an English browser, else
// Albanian. Plain redirects (no proxy) so the site runs on any host.
const unprefixed = "/:path((?!sq(?:/|$)|en(?:/|$)|_next|api|.*\\..*).*)";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 95],
  },
  async redirects() {
    return [
      { source: "/", has: [{ type: "cookie", key: "NEXT_LOCALE", value: "en" }], destination: "/en", permanent: false },
      { source: "/", has: [{ type: "cookie", key: "NEXT_LOCALE", value: "sq" }], destination: "/sq", permanent: false },
      { source: "/", has: [{ type: "header", key: "accept-language", value: "en.*" }], destination: "/en", permanent: false },
      { source: "/", destination: "/sq", permanent: false },
      { source: unprefixed, has: [{ type: "cookie", key: "NEXT_LOCALE", value: "en" }], destination: "/en/:path", permanent: false },
      { source: unprefixed, destination: "/sq/:path", permanent: false },
    ];
  },
};

export default nextConfig;
