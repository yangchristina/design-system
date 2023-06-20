// import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json' assert { type: 'json' };
import typescript from '@rollup/plugin-typescript';
import preserveDirectives from "rollup-plugin-preserve-directives";

export default {
  input: './index.ts',
  output: {
    dir: 'dist',
    preserveModules: true,
    // banner: "'use client'",
  },
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
    typescript(),
    preserveDirectives()
    // typescript({
    //   clean: true,
    //   tsconfig: 'tsconfig.json',
    //   typescript: import('typescript'),
    // }),
  ],
};
