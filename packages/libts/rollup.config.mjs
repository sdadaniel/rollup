import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import typescript from "@rollup/plugin-typescript";

export default {
  input: "src/main.ts",
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
  plugins: [commonjs(), json(), typescript()],
};
