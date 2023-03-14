import { defineConfig } from 'tsup'

const config = defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  splitting: false,
  sourcemap: false,
  minify: true,
  clean: true,
  dts: true,
})

export default config
