// @ts-check

import vue from "@astrojs/vue";
import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

import mdx from "@astrojs/mdx";

export default defineConfig({
    site: "https://the-house-app.com",
    output: "static",
    integrations: [vue(), sitemap(), mdx()],
    experimental: {
        contentIntellisense: true,
    },
    prefetch: true,
    redirects: {
        "/terms": "https://origamisystems.org/terms",
        "/privacy": "https://origamisystems.org/privacy",
        "/faq": "https://help.origamisystems.org/house/faq",
        "/docs/features-games-cheering":
            "https://help.origamisystems.org/house/features-games-cheering",
        "/docs/install-as-app": "https://help.origamisystems.org/house/installable-app",
        "/docs": "https://help.origamisystems.org/house",
    },
});
