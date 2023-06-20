// import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json' assert { type: 'json' };
import typescript from '@rollup/plugin-typescript';

export default {
  input: './index.ts',
  output: {
    dir: 'dist',
    banner: "'use client'",
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
    // typescript({
    //   clean: true,
    //   tsconfig: 'tsconfig.json',
    //   typescript: import('typescript'),
    // }),
  ],
};
