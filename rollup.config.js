import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';

export default {
  input: './index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      banner: "'use client'",
    },
    {
      file: pkg.module,
      format: 'es',
      banner: "'use client'",
    },
  ],
  external: [...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.peerDependencies || {})],
  plugins: [
    typescript({
      clean: true,
      tsconfig: 'tsconfig-rollup.json',
      typescript: require('typescript'),
    }),
  ],
};
