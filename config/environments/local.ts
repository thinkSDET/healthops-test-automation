/**
 * Local environment configuration placeholder.
 */
export const localEnvironment = {
  name: 'local',
  baseUrl: process.env.HEALTHOPS_BASE_URL ?? 'http://localhost:3000',
} as const;
