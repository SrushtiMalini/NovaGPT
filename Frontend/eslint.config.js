import js from "@eslint/js";
import globals from "globals";
import { globalIgnores } from "eslint/config";

export default [
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [js.configs.recommended],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  },
];