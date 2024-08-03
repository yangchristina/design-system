// import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json' assert { type: 'json' };
import typescript from '@rollup/plugin-typescript';
import preserveDirectives from 'rollup-plugin-preserve-directives';
import postcss from 'rollup-plugin-postcss';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';

export default {
  input: './src/index.ts',
  output: {
    dir: 'dist',
    preserveModules: true,
    format: 'cjs',
    // banner: "'use client'",
  },
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
    typescript(),
    postcss({
      extract: false,
      modules: true,
      use: ['sass'],
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
