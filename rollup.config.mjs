import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import terser from "@rollup/plugin-terser";

export default {
  input: "src/main.js",
  output: [
    {
      dir: "lib/cjs",
      format: "cjs",
    },
    {
      dir: "lib/ejs",
      format: "esm",
    },
  ],
  plugins: [commonjs(), json()],
};
