import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import svelte from "rollup-plugin-svelte";
import copy from "rollup-plugin-copy";

export default [
  {
    input: ["src/renderer.js", "src/main.js"],
    output: {
      dir: "dist",
      format: "cjs",
      sourcemap: true
    },
    plugins: [
      svelte(),
      resolve(),
      commonjs(),
      copy({
        targets: [{ src: "src/index.html", dest: "dist" }]
      })
    ],
    external: ["electron", "child_process", "fs", "path", "url", "module", "os"]
  }
];
