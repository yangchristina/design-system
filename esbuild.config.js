const esbuild = require('esbuild');
const { nodeExternalsPlugin } = require('esbuild-node-externals');
const { dependencies, peerDependencies } = require('./package.json');
const react18Plugin = require('esbuild-plugin-react18');
const esbuildPluginTsc = require('esbuild-plugin-tsc');
const CssModulesPlugin = require('esbuild-css-modules-plugin');

esbuild
  .build({
    entryPoints: ['src/index.ts'],
    outdir: 'dist',
    bundle: true,
    minify: true,
    treeShaking: true,
    // sourcemap: true,
    format: 'cjs',
    target: ['es6'],
    loader: {
      '.module.css': 'local-css',
    },
    plugins: [
      CssModulesPlugin({
        // @see https://github.com/indooorsman/esbuild-css-modules-plugin/blob/main/index.d.ts for more details
        force: false,
        // emitDeclarationFile: true,
        // localsConvention: 'camelCase',
        // namedExports: true,
        // inject: true,
      }),
      nodeExternalsPlugin(),
      react18Plugin(),
      // esbuildPluginTsc({ tsx: true }),
    ],
    external: [].concat.apply(
      [],
      [Object.keys(dependencies || {}), Object.keys(peerDependencies || {})]
    ),
  })
  .then(async (result) => {
    console.log('Build complete');
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });

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
