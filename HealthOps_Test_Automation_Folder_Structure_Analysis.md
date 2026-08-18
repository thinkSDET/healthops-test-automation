# HealthOps Test Automation — Folder Structure & Segregation Analysis

## 1. Executive Summary

The current `tests`, `src`, and `scripts` structure is already well organized and follows a scalable domain-oriented automation architecture.

**Verdict: No urgent restructuring is required.**

The main recommendation is to keep the existing structure stable and populate currently empty folders only when a real responsibility emerges. Avoid creating abstractions just for the sake of having a complete folder structure.

---

## 2. Current Structure Assessment

### `tests/` — KEEP AS-IS

The current organization provides a clear separation by test purpose and business domain:

- `tests/modules/{domain}/` — Functional/module-level tests
- `tests/e2e/{journey}/` — Cross-module end-to-end journeys
- `tests/security/` — Security, RBAC, and ownership scenarios
- `tests/browser/` — Browser-specific scenarios
- `tests/portal/` — Portal-specific scenarios

### Recommendation

**No restructuring needed.**

Continue organizing new module tests by business domain. Keep cross-module journeys under `e2e/` rather than placing them inside an individual module.

---

## 3. `src/pages/` — KEEP AS-IS

Page Objects are organized by business domain, which scales well as the application grows.

Examples include domains such as:

- Auth
- Patients
- Appointments
- Prescriptions
- Orders
- Doctors

### Recommendation

Continue the domain-based structure.

Avoid putting multi-page business flows inside Page Objects. Page Objects should primarily represent page-level UI behavior.

---

## 4. `src/components/` — KEEP AS-IS

Shared UI components are separated from domain-specific Page Objects.

The current component organization by UI concern is a good abstraction because components can be reused across multiple modules.

### Important Boundary

Keep reusable cross-domain components in:

```text
src/components/
```

Do not duplicate the same shared component inside multiple domain folders under `pages/`.

### Watch For

If the same component starts appearing in multiple domain-specific folders, centralize it under `components/`.

---

## 5. `src/data/` — KEEP AS-IS

The current data separation is strong:

```text
src/data/
├── datasets/
├── factories/
├── personas/
└── constants/
```

This creates a clear distinction between:

- **Datasets** — Static/base test data
- **Factories** — Dynamic/generated test data
- **Personas** — Reusable user identities or role-based data
- **Constants** — Shared fixed values

### Example

A registration factory can combine JSON data with generated values such as unique email and phone numbers.

This is a good pattern for parallel-safe test execution.

---

## 6. `src/fixtures/` — KEEP AS-IS

Fixtures are being used for dependency injection and can expose:

- Page Objects
- Test data
- Shared test dependencies

This keeps tests concise and avoids repeatedly constructing dependencies inside individual test cases.

### Recommended Boundary

A fixture should primarily **provide** a dependency.

The actual creation logic should remain in the appropriate layer:

```text
Factory  → creates test data
Fixture  → provides test data
Page     → performs UI interaction
Test     → verifies behavior
```

---

# 7. `src/workflows/` — POPULATE WHEN NEEDED

### Current State

The folder is currently scaffolded but does not contain active TypeScript implementations.

### When Should It Be Used?

Introduce workflows when a business operation spans multiple Page Objects or multiple UI steps.

For example:

```text
src/workflows/
└── appointments/
    └── book-appointment.workflow.ts
```

Another example:

```text
src/workflows/
└── orders/
    └── place-order.workflow.ts
```

### Responsibility

A workflow should orchestrate a business journey.

It should **not** become another Page Object.

### Rule

If a method starts doing:

```text
Page A → Page B → Page C → verification/setup
```

consider moving that orchestration into a workflow.

**Recommendation:**

Do not populate this folder until actual cross-page orchestration appears.

---

# 8. `src/services/` — CLARIFY BEFORE USING

### Current State

The folder exists but currently contains little or no implementation.

This is the folder that needs the most responsibility clarification before it starts growing.

### Potential Responsibilities

A service could represent reusable non-UI operations such as:

- API-based setup
- Authentication/session operations
- Storage/session helpers
- Backend/test-environment interactions

### Main Risk

`services/` can easily become a dumping ground for code that does not clearly belong elsewhere.

For example, avoid putting generic code there simply because it does not fit another folder.

### Recommendation

Only introduce a service when there is a clearly identifiable service-level responsibility.

Do not create services preemptively.

---

# 9. `src/validators/` — DEFER

### Current State

Currently empty/scaffolded.

### Appropriate Use

Validators should validate data or application state.

For example:

```text
src/validators/
└── patients/
    └── patient.validator.ts
```

Possible responsibility:

```text
Validate that patient registration data
contains all required fields.
```

### Do Not Use It For

- Test data generation
- Page interactions
- Business workflows
- Simple assertions that are only used once

### Recommendation

Introduce validators only when the same validation logic starts repeating across tests or framework code.

---

# 10. `src/assertions/` — DEFER

### Current State

Currently empty/scaffolded.

### Appropriate Use

Assertions should provide reusable, meaningful domain-level expectations.

For example:

```text
src/assertions/
└── patients/
    └── patient.assertions.ts
```

Instead of repeatedly writing complex expectations for the same business outcome, a semantic assertion could encapsulate them.

### Important Boundary

Do not create an assertion wrapper for every simple:

```ts
expect(locator).toHaveText(...)
```

Only extract assertions when there is meaningful repetition or domain-level behavior.

### Recommendation

Keep this folder empty until repeated assertion patterns appear.

---

# 11. `src/setup/` — DEFER

### Current State

Currently empty/scaffolded.

### Potential Future Responsibilities

This could eventually contain reusable environment/test setup such as:

- Pre-test environment setup
- Shared initialization
- Test-state preparation
- Cleanup coordination

However, do not move ordinary per-test setup here just to fill the folder.

### Recommendation

Continue using fixtures and test hooks where they are sufficient.

Introduce dedicated setup abstractions only when setup becomes complex or repeated.

---

# 12. `src/utils/` — USE SPARINGLY

### Current State

Currently empty/scaffolded.

### Appropriate Use

Generic helpers that genuinely have no domain ownership, such as:

- Date formatting
- String formatting
- Number utilities
- Generic file helpers

### Main Risk

`utils/` becoming a dumping ground.

Avoid putting:

- Patient-specific logic
- Authentication workflows
- Page interactions
- Test-data factories
- Business rules

inside `utils/`.

### Recommendation

Before adding a utility, ask:

> "Does this logic belong to a specific domain or responsibility?"

If yes, place it there instead of `utils/`.

---

# 13. `scripts/` — KEEP EMPTY UNTIL NEEDED

### Current State

The folder currently contains only `.gitkeep`.

That is completely fine.

### Potential Future Use

Scripts can support tasks outside normal test execution, such as:

```text
scripts/
├── seed-test-data.ts
├── validate-environment.ts
└── generate-report.ts
```

### Recommendation

Keep scripts small and purpose-specific.

Complex reusable logic should remain in `src/` rather than being hidden inside scripts.

---

# 14. Structural Risks to Monitor

| Risk | Warning Sign | Recommended Action |
|---|---|---|
| Page Object creep | Page Objects become large and orchestrate multiple pages | Move orchestration to `workflows/` |
| Component duplication | Same UI component appears in multiple domains | Centralize it under `components/` |
| Data collisions | Parallel tests fail due to duplicate records | Use factories for unique data |
| Fixture complexity | Fixtures start containing business logic | Move creation/orchestration to the correct layer |
| Services becoming a dumping ground | Many unrelated helpers inside `services/` | Define service boundaries |
| Utils becoming a dumping ground | Domain logic appears in `utils/` | Move logic to its owning domain |
| Too many abstractions | Simple logic has multiple wrappers | Prefer the simplest existing layer |

---

# 15. Recommended Responsibility Map

Use this as the quick reference when deciding where new code belongs:

```text
tests/
    What should be tested?
            ↓

pages/
    How do I interact with this page?
            ↓

components/
    How do I interact with this shared UI component?
            ↓

workflows/
    How do I perform this multi-page business journey?
            ↓

data/datasets/
    What static/base data do I need?
            ↓

data/factories/
    How do I generate dynamic test data?
            ↓

fixtures/
    How do I provide reusable dependencies to tests?
            ↓

services/
    How do I perform reusable non-UI/service-level operations?
            ↓

validators/
    How do I validate data/state?
            ↓

assertions/
    How do I express reusable domain-level expectations?
            ↓

setup/
    What shared environment/test setup is required?
            ↓

utils/
    What truly generic helper does not belong elsewhere?
            ↓

scripts/
    What standalone project/CI utility needs to run outside tests?
```

---

# 16. Final Recommendation

### Keep

- `tests` domain/test-type organization
- `pages` domain organization
- `components` shared UI organization
- `data` separation between datasets, factories, personas, and constants
- `fixtures` for dependency injection

### Introduce Later

- `workflows` when cross-page journeys grow
- `services` when a clear service-level responsibility appears
- `validators` when validation logic becomes reusable
- `assertions` when domain-level expectations repeat
- `setup` when shared setup becomes complex
- `utils` only for genuinely generic helpers
- `scripts` when standalone automation/CI utilities are required

## Final Verdict

**No major restructuring is required right now.**

The current architecture is healthy and scalable. The biggest improvement is not adding more folders; it is maintaining **clear responsibility boundaries** as the framework grows.

The guiding principle should be:

> **Do not create an abstraction because a folder exists. Create it when the implementation has a real responsibility that belongs there.**

This keeps the framework clean, maintainable, and easier for another automation engineer to understand.
