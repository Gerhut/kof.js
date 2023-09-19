import { nodeResolve } from "@rollup/plugin-node-resolve";

/** @type {import('rollup').RollupOptions} */
export default [
  {
    external: ["undici"],
    input: "lib/index.js",
    output: {
      file: "dist/index.mjs",
    },
  },
  {
    external: ["undici"],
    input: "lib/index.js",
    output: {
      file: "dist/index.cjs",
      format: "cjs",
    },
  },
  {
    input: "lib/index.js",
    output: {
      file: "dist/browser.js",
      format: "iife",
      name: "KofJS",
    },
    plugins: [nodeResolve({ browser: true })],
  },
];
