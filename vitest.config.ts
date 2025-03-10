import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: false,
    passWithNoTests: true,
    include: ['src/**/*.spec.ts'],
  },
})
