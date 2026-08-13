/**
 * Runtime configuration for test execution (environment, timeouts, feature flags).
 * Environment-specific values live under config/environments/.
 */
export const runtimeConfig = {
  defaultEnvironment: process.env.HEALTHOPS_ENV ?? 'local',
  headless: process.env.HEADLESS !== 'false',
} as const;
