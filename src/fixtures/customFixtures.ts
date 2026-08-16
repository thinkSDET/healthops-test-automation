/**
 * Custom Fixtures Aggregator
 * 
 * PURPOSE:
 * Single entry point that combines all fixture modules (page objects + test data).
 * Tests import from this file, not directly from @playwright/test.
 * 
 * RESPONSIBILITY:
 * - Merges page object fixtures (from pageObjectFixture.ts) and data fixtures (from dataFixture.ts)
 * - Exports a unified `test` object with all fixtures available
 * - Re-exports `expect` for assertions
 * - Provides a clean, centralized import path for test files
 * 
 * HOW IT WORKS:
 * 1. Imports the test object from pageObjectFixture (page objects like loginPage, registerPage)
 * 2. Imports the test object from dataFixture (test data like patientRegistration, login)
 * 3. Uses mergeTests() to combine both into a single test runner
 * 4. Exports the merged test so specs can request ALL fixtures with one import
 * 
 * USAGE IN TESTS:
 * Instead of:
 *   import { test } from '@playwright/test'
 *   const loginPage = new LoginPage(page)
 * 
 * Tests do:
 *   import { test } from './customFixtures'
 *   test('...', async ({ loginPage, login, page }) => { ... })
 */

import { mergeTests } from "@playwright/test";
/** Import page object fixtures (LoginPage, DashboardHeaderComponent, RegisterPage) */
import{test as pageObjectFixture} from '../fixtures/pageObjectFixture'
/** Import data fixtures (patientRegistration, login test data) */
import{test as dataFixture} from '../fixtures/dataFixture'

/**
 * Merged test object combining both fixture modules.
 * WHAT IT PROVIDES:
 * - All page object fixtures: loginPage, dashboardHeaderComponent, registerPage
 * - All data fixtures: patientRegistration, login
 * - All standard Playwright fixtures: page, browser, context, etc.
 */
export const test = mergeTests(pageObjectFixture,dataFixture)

/** Re-export expect for assertions (same as @playwright/test) */
export {expect} from '@playwright/test'