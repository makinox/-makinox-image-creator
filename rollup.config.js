import typescript from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

import packageJson from './package.json';

const config = {
  input: './src/index.ts',

  output: [
    { file: packageJson.main, name: '@makinox/image-creator', format: 'umd', sourcemap: true },
    { file: packageJson.module, format: 'es', sourcemap: true },
  ],
  plugins: [typescript({ tsconfigOverride: { compilerOptions: { module: 'es2015' } } }), commonjs(), resolve({ browser: true })],
};

export default config;
