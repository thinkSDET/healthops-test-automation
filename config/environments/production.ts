/**
 * Production environment configuration placeholder.
 * Use read-only personas and dedicated test tenants only.
 */
export const productionEnvironment = {
  name: 'production',
  baseUrl: process.env.HEALTHOPS_BASE_URL ?? '',
} as const;
