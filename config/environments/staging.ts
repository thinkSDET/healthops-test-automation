/**
 * Staging environment configuration placeholder.
 */
export const stagingEnvironment = {
  name: 'staging',
  baseUrl: process.env.HEALTHOPS_BASE_URL ?? '',
} as const;
