# Contribution Guide

Conventions for adding and changing code in the HealthOps UI test automation framework.

When a rule has not been decided, it is marked **pending**—do not invent team policy silently.

## General principles

- Match existing patterns in the target folder before introducing new ones.
- Keep changes scoped to the task.
- Prefer reuse over duplication (see [AI-ASSISTANT-GUIDELINES.md](../AI-ASSISTANT-GUIDELINES.md)).
- Update canonical docs when establishing a new cross-cutting convention.

## Naming conventions

### Files

| Layer | Pattern | Example |
|-------|---------|---------|
| Page object | `{feature}.page.ts` or `{screen}.page.ts` | `login.page.ts`, `patient-list.page.ts` |
| Component | `{name}.component.ts` | `data-table.component.ts` |
| Workflow | `{operation}.workflow.ts` | `book-appointment.workflow.ts` |
| Fixture | `{concern}.fixture.ts` | `authenticated.fixture.ts` |
| Factory | `{entity}.factory.ts` | `patient.factory.ts` |
| Assertion | `{domain}.assertions.ts` | `appointments.assertions.ts` |
| Validator | `{domain}.validator.ts` | `prescription.validator.ts` |
| Module spec | `{feature}.spec.ts` | `login.spec.ts` |
| E2E spec | `{journey}.e2e.spec.ts` or `{journey}.spec.ts` | **pending** — pick one suffix and apply consistently |
| Security spec | descriptive `*.spec.ts` | `rbac.spec.ts` |

Use kebab-case for file names unless the repository already establishes a different pattern in that folder.

### Classes / exports

| Layer | Pattern | Example |
|-------|---------|---------|
| Page object | `{Name}Page` | `LoginPage` |
| Component | `{Name}Component` | `ConfirmDialogComponent` |
| Workflow | `{Name}Workflow` | `BookAppointmentWorkflow` |
| Factory | `{entity}Factory` or `{Entity}Factory` | `patientFactory` — **pending** final export style |

## Locator practices

- Prefer user-facing locators: `getByRole`, `getByLabel`, `getByText`, accessible names.
- Use `data-testid` only when stable test IDs exist in the application—do not ask the app team to add IDs without agreement.
- Avoid brittle selectors: deep CSS chains, index-only XPath, auto-generated class names tied to build hashes.
- Keep locators in page objects or components, not scattered through specs.

## Waits and timing

- Use Playwright auto-waiting and explicit expectations (`expect(...).toBeVisible()`).
- Avoid `page.waitForTimeout()` except rare debugging; remove before merge.
- Use `waitForResponse` / navigation waits when waiting for specific network or route completion.

## Test independence

- No shared mutable state between tests.
- Each test obtains data via factory, fixture, or documented dataset.
- Avoid `@test.describe.serial` unless a documented environment constraint requires it.

## Data isolation

- Generate unique identifiers for create flows when parallel workers are enabled.
- Use separate personas and entities for ownership tests.
- Clean up created data when feasible via `src/setup/cleanup/`.

## Tagging and suites

Conventions for tags such as `@smoke`, `@regression`, `@critical` — **pending**.

When adopted, document tag meanings in this file and wire them in CI.

## Documentation expectations

- Non-obvious workflow or data assumptions: short comment or note in the relevant `ai-guidelines/` doc.
- Learning decisions: add or update a note under `learning/` (learning notes are **not** project policy).
- Do not duplicate architecture content in test files or README fragments.

## Review expectations

Reviewers should verify:

- Correct layer (page vs workflow vs test)
- No duplicated UI blocks that belong in a workflow
- Stable locators and no arbitrary timeouts
- Data isolation suitable for parallel runs
- Security-sensitive tests in `tests/security/` when cross-cutting

## Validation expectations

Before marking work complete:

1. Run affected Playwright specs.
2. Run TypeScript check when configured — **pending** (`tsconfig.json` not yet established).
3. Run lint/format when configured — **pending**.

Report commands run and results in the change description.

## Branch and commit conventions

**Pending** — follow team Git practices when defined.

## What not to do

- Do not add npm packages without justification.
- Do not reinitialize Playwright or overwrite `playwright.config.ts` casually.
- Do not put business journeys in page objects.
- Do not use `utils/` for domain-specific orchestration.
- Do not hardcode environment-specific IDs in specs.
