// @ts-check

import vue from "@astrojs/vue";
import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

import mdx from "@astrojs/mdx";

export default defineConfig({
    site: "https://the-house-app.com",
    output: "static",
    integrations: [vue(), sitemap(), mdx({
        optimize: false, // allow for custom components https://github.com/withastro/astro/issues/14611
    })],
    experimental: {
        contentIntellisense: true,
    },
    prefetch: true,
});
