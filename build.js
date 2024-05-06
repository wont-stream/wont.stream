const fs = require("node:fs");
const https = require("node:https")

https.get("https://cdn.jsdelivr.net/npm/@material-symbols/font-400@latest/material-symbols-rounded.woff2", async (resp) => {
  resp.pipe(fs.createWriteStream("material-symbols-rounded.woff2"))
})

await Bun.build({
  entrypoints: ["./src/index.js", "./src/reviews.js"],
  outdir: "./dist",
  target: "browser",
  splitting: true,
  sourcemap: "external",
  minify: true,
});