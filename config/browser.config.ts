/**
 * Browser-level defaults for HealthOps UI automation.
 * Playwright project/browser settings remain in playwright.config.ts.
 */
export const browserConfig = {
  defaultTimeout: 30_000,
  navigationTimeout: 30_000,
  actionTimeout: 15_000,
} as const;
