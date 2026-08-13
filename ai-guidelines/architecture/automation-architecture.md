# Automation Architecture

Framework structure for HealthOps UI test automation. Organize by **application domain and responsibility**, not by test-case IDs.

## Conceptual dependency model

```text
Test
  ↓
Workflow
  ↓
Page / Component
  ↓
Fixture / Data
  ↓
Assertion / Validator
```

Higher layers orchestrate; lower layers provide interaction, setup, and verification. Avoid inverting this flow (for example, page objects driving full business journeys, or tests duplicating workflow logic).

## Source layout (`src/`)

### `src/pages/`

**Purpose:** UI interaction for application pages.

**Responsibilities:**

- Navigation to and within a page
- Locators and user actions for that page's primary UI
- Thin helpers that belong naturally to the page

**Boundaries:**

- Pages must **not** contain large cross-module business workflows.
- Shared UI sections used by multiple pages belong in `src/components/`.
- Domain folders mirror application areas: `auth/`, `dashboard/`, `patients/`, `doctors/`, `appointments/`, `prescriptions/`, `refills/`, `orders/`, `pharmacy/`, `inventory/`, `audit/`, `lab/`, `portal/`, `common/`.

Patient sub-areas (details, dependents, emergency contact, medical profile, documents) live under `patients/` unless a separate page object file is warranted by complexity.

### `src/components/`

**Purpose:** Reusable UI sections shared across pages.

**Examples:** forms, tables, dialogs, dropdowns, notifications, navigation chrome.

**Boundaries:** Components encapsulate UI fragments, not end-to-end business processes.

### `src/workflows/`

**Purpose:** Reusable business operations that may span multiple pages or modules.

**Examples:** book appointment, fulfill prescription, place order, replenish inventory, upload document, clinical handoff.

**Boundaries:**

- Workflows compose pages/components and may use fixtures/data.
- Workflows must not embed test assertions; verification belongs in tests via assertions/validators.

### `src/fixtures/`

**Purpose:** Playwright fixtures and dependency injection.

**Responsibilities:**

- Authenticated sessions by persona
- Shared browser/context setup
- Wiring page objects and workflows into tests

**Boundaries:** Fixtures provide dependencies; they must not become a home for business logic.

### `src/data/`

**Purpose:** Test data definitions.

| Subfolder | Role |
|-----------|------|
| `personas/` | Reusable role/user definitions (Admin, Doctor, Pharmacist, Patient, Viewer, Support) |
| `factories/` | Dynamic data generation (emails, IDs, SKUs, unique entities) |
| `datasets/` | Predefined static data when fixed values are appropriate |
| `constants/` | Stable values: roles, statuses, permissions, routes |

See [test-data/test-data-strategy.md](../test-data/test-data-strategy.md) for data lifecycle rules.

### `src/assertions/`

**Purpose:** Reusable expectations about test outcomes.

**Examples:** toast message visible, table row count, order status on screen.

**Boundaries:** Assertions express *what the test expects*; they are not data generators.

### `src/validators/`

**Purpose:** Reusable domain or state validation logic.

**Examples:** validate appointment payload shape, verify ownership boundary before acting.

**Boundaries:** Validators check *domain state*; keep them separate from factories and raw test data.

### `src/setup/`

**Purpose:** Global seeding and cleanup (`seed/`, `cleanup/`).

Controlled prerequisite creation and responsible teardown of test-created data.

### `src/services/`

**Purpose:** Lightweight helpers needed to support UI tests.

**Boundaries:**

- Not a full API automation layer during the current UI-focused phase.
- Add service helpers only when legitimately required for setup or support (e.g., auth token retrieval, storage inspection).

### `src/utils/`

**Purpose:** Generic, reusable utilities (dates, strings, file helpers).

**Boundaries:** Do not use `utils/` as a dumping ground for application-specific business logic—that belongs in workflows, pages, or validators.

### `src/types/`

**Purpose:** Shared TypeScript types for the automation framework.

## Test layout (`tests/`)

### `tests/modules/`

**Purpose:** Module-level functional UI tests aligned to application domains.

One spec (or small group) per feature area within a module. Examples: auth login, patient list, prescription create.

**Catalog mapping:** Most of the 254 UI test cases belong here, organized by domain folder—not by case ID filename.

### `tests/security/`

**Purpose:** Cross-cutting RBAC, ownership, and protected-route tests.

Examples: `rbac.spec.ts`, `ownership.spec.ts`, `protected-routes.spec.ts`.

Security concerns must not be scattered only inside module folders; they are first-class here.

### `tests/e2e/`

**Purpose:** Cross-module business journeys only.

**Catalog mapping:** The 19 cross-module E2E workflows.

**Rules:**

- E2E tests orchestrate workflows; they should not repeat large blocks of page-level UI code.
- Lower layers (workflows, pages) should be reused.

Subfolders: `appointments/`, `prescriptions/`, `commerce/`, `inventory/`, `lab/`, `documents/`, `clinical/`.

### `tests/browser/`

**Purpose:** Browser-specific scenarios.

Examples: confirm dialogs, downloads, multi-tab behavior, iframe payment flows, storage/session behavior.

Navigation edge cases that are browser-mechanism focused also belong here.

### `tests/portal/`

**Purpose:** Patient portal tests (distinct from staff/admin modules where behavior differs).

## Configuration (`config/`)

Environment, runtime, and browser settings that complement—not duplicate—`playwright.config.ts`.

- `config/environments/` — per-environment base URLs and flags
- `config/browser.config.ts`, `config/runtime.config.ts` — shared defaults

Playwright projects, reporters, workers, and trace settings remain in `playwright.config.ts` unless integration is explicitly planned.

## Artifacts (`artifacts/`)

Generated output only: screenshots, videos, traces, downloads, reports. Not source code. Gitignored except structure placeholders.

## What we deliberately avoid

- Flat `tests/` + `pages/` + `utils/` only structure
- Organizing solely by test-case ID
- Duplicating workflow logic inside every spec
- Building an API automation framework before UI needs justify it
- Extra layers (e.g., "managers", "facades") without clear boundary benefit
