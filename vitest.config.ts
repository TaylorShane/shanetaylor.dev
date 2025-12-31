import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    exclude: ['**/*models.ts', '**/*github-backup-data.ts'],
    globals: true,
    environment: 'jsdom',
    setupFiles: ['src/test-setup.ts'],
    include: ['src/**/*.spec.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html', 'lcov'],
      exclude: ['**/*github-backup-data.ts']
    }
  }
});
