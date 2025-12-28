// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightThemeRapide from "starlight-theme-rapide";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      plugins: [starlightThemeRapide()],
      title: "asoji's homelab docs",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/asoji/Homelab",
        },
      ],
      sidebar: [
        {
          label: "What is this?",
          link: "what-is-this",
        },
        {
          label: "Home / Local Network",
          autogenerate: { directory: "home" },
        },
        {
          label: "Tailscale",
          autogenerate: { directory: "tailscale" },
        },
        {
          label: "External",
          autogenerate: { directory: "external" },
        },
      ],
    }),
  ],
});
