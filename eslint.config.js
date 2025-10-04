import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{js,jsx}"],
    extends: [
      js.configs.recommended,
      reactHooks.configs["recommended-latest"],
      reactRefresh.configs.vite,
    ],
    theme: {
      extends: {
        colors: {
          "black-dark": "#131212ff",
          "black-dark-100": "#313030ff",
          "blue-symplia": "#07314A",
          "cyan-symplia": "#0DD6B1",
          "yellow-symplia": "#f0e221ff",
          "green-symplia": "#0cd45fff",
          "danger-symplia": "#e01717ff",
          "white-symplia-10": "#f7f2f2ff",
          "white-symplia-100": "#f1ededff",
          "white-symplia-200": "#d6d2d2ff",
        },
      },
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true },
        sourceType: "module",
      },
    },
    rules: {
      "no-unused-vars": ["error", { varsIgnorePattern: "^[A-Z_]" }],
    },
  },
]);
