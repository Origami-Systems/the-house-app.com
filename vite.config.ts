import { defineConfig } from "vite-plus";
import { staged, fmt, lint } from "@origami-systems/dev-config/vite";

export default defineConfig({
    staged,
    fmt,
    lint,
});
