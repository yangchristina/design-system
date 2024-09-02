// import typescript from 'rollup-plugin-typescript2';
// If using node-22, use with instead of assert
import pkg from './package.json' with { type: 'json' };
import typescript from '@rollup/plugin-typescript';
// import commonjs from '@rollup/plugin-commonjs';
// import resolve from '@rollup/plugin-node-resolve';
// import babel from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';

const plugins = [
  // resolve(),
  // typescript({
    terser({ sourceMap: true }),
  // }),
]

const commonConfig = {
  input: './src/index.ts',
  external: [...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.peerDependencies || {})],

}

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
      minifyInternalExports: true,
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
      minifyInternalExports: true,
      }
    ],
    plugins: [typescript({ declaration: false }), ...plugins]
  }
];