// @ts-check

import js from "@eslint/js";
import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";

export default defineConfig({
  files: ["**/*.{js,ts}"],
  extends: [js.configs.recommended, tseslint.configs.recommendedTypeChecked],
  languageOptions: {
    parser: tseslint.parser,
    parserOptions: {
      projectService: true,
    },
  },
  ignores: ["**/node_modules/**", "dist/**", "eslint.config.mjs"],
  rules: {
    // "no-console": "error",
  }
});