import type { Config } from "@react-router/dev/config";

export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
  ssr: true,

  // Static pre-rendering HTML files for the listed routes.
  // async prerender() {
  //   return ["/", "/about", "/contact"];
  // }
} satisfies Config;
