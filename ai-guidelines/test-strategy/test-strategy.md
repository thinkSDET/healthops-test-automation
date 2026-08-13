# Test Strategy

Testing approach for HealthOps UI automation, derived from the **UI Functional E2E Test Case Catalog** (254 UI cases; 19 cross-module E2E workflows).

Design tests around **application domains and risk**, not catalog markdown IDs.

## Test classification

```text
Module Testing          → tests/modules/
RBAC / Ownership        → tests/security/
Workflow E2E            → tests/e2e/
Negative / Validation   → primarily tests/modules/ (and targeted e2e where journey-specific)
Browser Scenarios       → tests/browser/
Patient Portal          → tests/portal/
```

## Module tests (`tests/modules/`)

**Purpose:** Verify functional UI behavior within a single application module or closely related screen flow.

**Examples:** login, dashboard widgets, patient CRUD, appointment scheduling, prescription list, inventory adjustment.

**Boundaries:**

- Focus on one module (or natural sub-flow such as patient → dependent).
- Use page objects and components for UI steps.
- Use workflows only when a module test genuinely reuses a shared business operation.
- Negative and validation cases for a screen belong here unless they are explicitly cross-cutting security or browser tests.

**Independence:** Each test should set up or obtain the data it needs via fixtures, factories, or documented datasets. Avoid order-dependent suites.

## Security tests (`tests/security/`)

**Purpose:** Cross-cutting **RBAC**, **ownership**, and **protected-route** behavior.

**Examples:**

- Role X cannot access module Y
- User A cannot view or edit User B's patient record
- Unauthenticated access redirects or denies correctly

**Boundaries:** Not a substitute for every negative module test; focus on permission and data-boundary concerns called out in the catalog.

## Browser tests (`tests/browser/`)

**Purpose:** Scenarios where browser mechanics are the primary concern.

**Examples:**

- Confirm/cancel dialogs
- File download behavior
- Multi-tab / new window flows
- iframe-embedded payment
- localStorage / sessionStorage / cookie behavior

**Boundaries:** Do not place ordinary CRUD happy paths here just because they use a dialog—only when the browser behavior is what is under test.

## Cross-module E2E (`tests/e2e/`)

**Purpose:** End-to-end **business journeys** spanning multiple modules.

**Catalog:** 19 defined cross-module workflows (appointments, prescriptions, commerce, inventory, lab, documents, clinical themes).

**Critical rule:** E2E specs **orchestrate** reusable workflows. They should read as journey scripts, not as copies of page object methods.

```text
// Preferred shape (conceptual)
test('patient books appointment and receives confirmation', async ({ flows }) => {
  await flows.appointment.completeBooking({ persona: 'patient' });
  await expectAppointmentConfirmed(...);
});
```

Avoid duplicating large UI interaction blocks that already exist in workflows or module tests.

## Execution tiers

These tiers describe **how suites are selected and run**, not separate folder structures unless tagging is introduced later.

| Tier | Purpose | Typical scope |
|------|---------|----------------|
| **Smoke** | Fast confidence after deploy or major change | Critical auth, dashboard load, one path per core module |
| **Sanity** | Targeted check after a focused change | Module(s) touched by the change plus dependent security checks |
| **Regression** | Broad functional coverage | Module tests across catalog domains |
| **Critical Workflow** | Highest business risk | Selected `tests/e2e/` journeys + essential security paths |

**Tagging / suite selection:** Convention for `@smoke`, `@regression`, etc. is **pending**—define in CI and contribution guide when execution pipelines are established.

## Test independence and data isolation

- Tests must not depend on execution order.
- Prefer unique data from factories over shared static records when parallel workers may collide.
- Use personas for role-appropriate setup; use distinct entities (e.g., PatientA / PatientB) for ownership scenarios.
- Seeding and cleanup live in `src/setup/`; tests should not leave orphaned data when cleanup is feasible.

## Fixtures

Use Playwright fixtures in `src/fixtures/` for:

- Authenticated contexts per persona
- Injected page objects and workflows
- Shared environment configuration

Fixtures provide dependencies; scenario logic stays in tests and workflows.

## Negative and validation testing

Validation messages, required fields, and invalid input flows are primarily **module tests**. Escalate to E2E only when the validation is part of a multi-step journey under test.

## Out of scope (per catalog)

API-only, performance, penetration, and other non-UI-functional areas are excluded unless the project scope explicitly expands.

## What we do not do in this document

This strategy does not implement tests. Refer to the catalog and existing code when authoring specs.
