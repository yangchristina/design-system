// import typescript from 'rollup-plugin-typescript2';
// If using node-22, use with instead of assert
import pkg from './package.json' with { type: 'json' };
import typescript from '@rollup/plugin-typescript';
import preserveDirectives from 'rollup-plugin-preserve-directives';
import postcss from 'rollup-plugin-postcss';
// import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
// import babel from '@rollup/plugin-babel';

const plugins = [
  resolve(),
  // typescript({
  // }),
  postcss({
    minimize: true,
    extract: false,
    modules: true,
    // use: ['sass'],
  }),
  preserveDirectives(),
  // commonjs(),
  // babel({
  //   include: 'src/**',
  //   exclude: 'node_modules/**', // Only transpile our source code
  //   babelHelpers: 'bundled',
  // }),
]

const commonConfig = {
  input: './src/index.ts',
  external: [...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.peerDependencies || {})],

}

// console.log( '\n\n\n\n\n', dirname(pkg.main), '\n\n\n\n\n')
// export default {
//   input: './src/index.ts',
//   output:
//   [
//     {
//       file: pkg.main,
//       format: 'cjs',
//       exports: 'named',
//       sourcemap: true,
//     },
//     {
//       dir: 'dist',
//       format: 'esm',
//       exports: 'named',
//       sourcemap: true,
//       preserveModules: true,
//       preserveModulesRoot: 'src',
//     },
// ],

//   external: [...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.peerDependencies || {})],
//   plugins: [
//     resolve(),
//     typescript({
//     }),
//     postcss({
//       minimize: true,
//       extract: false,
//       modules: true,
//       // use: ['sass'],
//     }),
//     preserveDirectives(),
//     // commonjs(),
//     // babel({
//     //   include: 'src/**',
//     //   exclude: 'node_modules/**', // Only transpile our source code
//     //   babelHelpers: 'bundled',
//     // }),
//   ],
// };


export default [
  {
    ...commonConfig,
    output: [
      {
      dir: 'dist',
      format: 'esm',
      exports: 'named',
      sourcemap: true,
      preserveModules: true,
      preserveModulesRoot: 'src',
      }
    ],
    plugins: [typescript({ declaration: true }), ...plugins]
  },
  {
    ...commonConfig,
    output: [
      {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
      }
    ],
    plugins: [typescript({ declaration: false }), ...plugins]
  }
];