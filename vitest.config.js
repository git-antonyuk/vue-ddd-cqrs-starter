import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'node:path'
import tailwindcss from '@tailwindcss/vite'
import { analyzer } from 'vite-bundle-analyzer'

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
    dedupe: ['primevue'],
  },
  plugins: [vue(), tailwindcss(), analyzer()],
  test: {
    reporters: ['default'],
    passWithNoTests: true,
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/tests/vitest.setup.ts'],
    coverage: {
      reporter: ['text', 'json-summary', 'json', 'html'],
      reportsDirectory: './test-results/coverage',
      include: ['**/*.ts', '**/*.vue'],
      exclude: [
        '**/*.spec.ts',
        '**/*.d.ts',
        '**/*.config.ts',
        '**/*.cy.ts',
        'i18n.ts',
        'cypress/**/*.ts',
        '**/*.cy.component.ts',
        'src/test/**/*.ts',
        'node_modules',
        'src/plugins/**/*.ts',
        'src/App.vue',
        'src/main.ts',
      ],
      thresholds: {
        branches: 4,
        lines: 4,
        functions: 4,
        statements: 4,
      },
    },
  },
})
