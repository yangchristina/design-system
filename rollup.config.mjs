// import typescript from 'rollup-plugin-typescript2';
// If using node-22, use with instead of assert
import pkg from './package.json' with { type: 'json' };
import typescript from '@rollup/plugin-typescript';
import preserveDirectives from 'rollup-plugin-preserve-directives';
import postcss from 'rollup-plugin-postcss';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';

// console.log( '\n\n\n\n\n', dirname(pkg.main), '\n\n\n\n\n')
export default {
  input: './src/index.ts',
  output:
  [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
    },
    {
      dir: 'dist',
      format: 'esm',
      exports: 'named',
      sourcemap: true,
      preserveModules: true,
      preserveModulesRoot: 'src',
    },
    // {
    //     format: 'esm', // set ES modules
    //     // dir: 'dist',
    //     dir: `dist/${dirname(pkg.main)}`,
    //     preserveModules: true, // indicate not create a single-file
    //     preserveModulesRoot: 'src', // optional but useful to create a more plain folder structure
    //     sourcemap: true, //optional
    //     entryFileNames: '[name].js',
    // },
    // {
    //   format: 'cjs',
    //   // dir: 'dist',
    //   dir: `dist/${dirname(pkg.module)}`,
    //   preserveModules: true,
    //   preserveModulesRoot: 'src', // optional but useful to create a more plain folder structure
    //   entryFileNames: '[name].mjs',
    // },
],
  // exports: 'named',
  // [
  //   {
  //     file: pkg.main,
  //     format: 'cjs',
  //     banner: "'use client'",
  //   },
  //   {
  //     file: pkg.module,
  //     format: 'es',
  //     banner: "'use client'",
  //   },
  // ],
  external: [...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.peerDependencies || {})],
  plugins: [
    resolve(),
    typescript({

    }),
    postcss({
      minimize: true,
      extract: false,
      modules: true,
      // use: ['sass'],
    }),
    preserveDirectives(),
    commonjs(),
    babel({
      include: 'src/**',
      exclude: 'node_modules/**', // Only transpile our source code
      babelHelpers: 'bundled',
    }),
    // typescript({
    //   clean: true,
    //   tsconfig: 'tsconfig.json',
    //   typescript: import('typescript'),
    // }),
  ],
};
