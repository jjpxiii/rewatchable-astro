import cloudflare from "@astrojs/cloudflare";
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import preact from "@astrojs/preact";
import tailwindcss from "@tailwindcss/vite";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  adapter: cloudflare(),
  site: "https://rewatchable.deno.dev",
  integrations: [mdx(), preact({ compat: true }), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
