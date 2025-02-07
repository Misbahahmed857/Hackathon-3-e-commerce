import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

// Resolve directory paths
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Initialize FlatCompat for extending ESLint configurations
const compat = new FlatCompat({
  baseDirectory: __dirname, // ✅ Ensures correct path resolution
});

const eslintConfig = [
  ...compat.extends(
    "eslint-config-next/core-web-vitals", // ✅ Ensure correct path
    "eslint-config-next"
  ),
];

export default eslintConfig;

