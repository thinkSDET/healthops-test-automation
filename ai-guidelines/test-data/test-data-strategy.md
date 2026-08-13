# Test Data Strategy

How test data is defined, generated, seeded, and cleaned up in the HealthOps UI automation framework.

## Responsibility separation

```text
Data        → What data does the test need?
Factory     → How is dynamic data generated?
Assertion   → What result does the test expect?
Validator   → How is domain state validated?
```

Keep these concerns in separate files and layers. Do not embed assertion logic in factories or business rules in raw JSON datasets.

## Personas (`src/data/personas/`)

**Purpose:** Reusable application users and roles.

Represent authenticated identities with known permissions. Current application personas include:

| Persona | Typical use |
|---------|-------------|
| **ADMIN** | Full or elevated administrative access |
| **DOCTOR** | Clinical workflows, prescriptions, appointments |
| **PHARMACIST** | Pharmacy, dispensing, inventory-related UI |
| **PATIENT** | Patient portal and self-service flows |
| **VIEWER** | Read-only or limited access scenarios |
| **SUPPORT** | Support-style operational access |

Personas should expose credentials and role metadata needed by fixtures—not full test scenarios.

## Factories (`src/data/factories/`)

**Purpose:** Generate **dynamic** data at runtime.

**Examples:**

- Unique emails and usernames
- Medical IDs, order numbers, prescription identifiers
- SKUs and inventory line items
- Any entity that must not collide under parallel execution

Factories produce data shapes; they do not assert UI outcomes.

## Datasets (`src/data/datasets/`)

**Purpose:** **Predefined** values when static data is genuinely appropriate.

**Examples:** reference lists, standard form templates, readonly catalog entries.

Use datasets sparingly. Prefer factories when uniqueness or isolation matters.

## Constants (`src/data/constants/`)

**Purpose:** Stable, shared values.

**Examples:**

- Role names and permission labels
- Status enums (e.g., appointment status, order status)
- Route paths and module identifiers
- Repeated timeout or label strings tied to the application

Constants are not a substitute for personas or factories.

## Setup / seeding (`src/setup/seed/`)

**Purpose:** Controlled creation of prerequisites before or during tests.

**Examples:** ensure a doctor exists, seed minimum inventory for a SKU, create baseline patient for a module suite.

Seeding must be idempotent or scoped where possible. Document assumptions when seed data depends on environment state.

## Cleanup (`src/setup/cleanup/`)

**Purpose:** Responsible removal or reset of test-created data.

**Goals:**

- Reduce cross-test pollution
- Support repeatability in shared environments

When application or environment constraints prevent deletion, document the limitation and prefer isolated identifiers from factories.

## Ownership and multi-entity scenarios

RBAC and ownership tests require **distinct entities**:

- PatientA vs PatientB
- User A must not access User B's records

Factories and personas should make it straightforward to create two non-overlapping owners without hardcoded fragile numeric IDs.

## Anti-patterns

- Hardcoded database primary keys that break across environments
- Shared mutable "global test patient" written by parallel tests
- Mixing factory generation with assertion helpers in one file
- Storing large scenario scripts inside dataset JSON

## Environment variables

Use `.env` / `config/environments/` for base URLs and environment flags—not for embedding secrets in source control. See `.env.example` for supported variables.

## Pending decisions

- Central registry of seed data vs per-module seed helpers — **pending**
- Shared test database vs UI-only setup — **pending** (UI automation phase defaults to UI-visible setup unless API helpers are approved)
