import { defineConfig } from "vite-plus";

export default defineConfig({
    staged: { "*": "vp check --fix" },
    fmt: {
        bracketSpacing: true,
        // insertFinalNewline: false,
        indentSize: 4,
        vueIndentScriptAndStyle: false,
        singleAttributePerLine: false,
        bracketSameLine: true,
        ignorePatterns: [".github/**"],
    },
    lint: {
        plugins: ["typescript", "oxc", "vue", "import"],
        jsPlugins: [{ name: "vite-plus", specifier: "vite-plus/oxlint-plugin" }],
        ignorePatterns: [".github/**"],
        rules: {
            "vite-plus/prefer-vite-plus-imports": "error",
            "no-unused-vars": "error",
            "@typescript-eslint/ban-types": "off",
            "@typescript-eslint/no-empty-object-type": "off",
            "@typescript-eslint/no-explicit-any": "off",
            "vue/no-export-in-script-setup": "error",
            "@typescript-eslint/no-unused-vars": "error",
        },
        options: { typeAware: true, typeCheck: true },
    },
});
