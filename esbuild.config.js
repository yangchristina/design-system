const esbuild = require('esbuild');
const { nodeExternalsPlugin } = require('esbuild-node-externals');
const { dependencies, peerDependencies } = require('./package.json');

esbuild
  .build({
    entryPoints: ['index.ts'],
    outdir: 'dist',
    bundle: true,
    // minify: true,
    treeShaking: true,
    sourcemap: true,
    format: 'esm',
    target: ['es6'],
    plugins: [nodeExternalsPlugin()],
    external: [].concat.apply(
      [],
      [Object.keys(dependencies || {}), Object.keys(peerDependencies || {})]
    ),
  })
  .then(async (result) => {
    console.log('Build complete');
  })
  .catch(() => process.exit(1));

// const { nodeExternalsPlugin } = require("esbuild-node-externals");
// esbuild
//   .build({
//     entryPoints: ["./src/index.ts"],
//     outfile: "dist/index.js",
//     bundle: true,
//     minify: true,
//     treeShaking: true,
//     platform: "node",
//     format: "cjs",
//     target: "node14",
//     plugins: [nodeExternalsPlugin()],
//   })
//   .catch(() => process.exit(1));
