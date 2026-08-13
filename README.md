# HealthOps UI Test Automation

Playwright-based UI functional and E2E test automation for **HealthOps — Healthcare Operations Management System**.

## Project structure

| Path | Purpose |
|------|---------|
| `config/` | Environment, runtime, and browser configuration |
| `src/pages/` | Page Object Model — application pages |
| `src/components/` | Reusable UI components shared across pages |
| `src/workflows/` | Cross-page business operations |
| `src/assertions/` | Reusable test assertions |
| `src/validators/` | Domain-level validation logic |
| `src/data/` | Personas, factories, datasets, constants |
| `src/fixtures/` | Playwright fixtures and dependency injection |
| `src/setup/` | Global seeding and cleanup |
| `src/services/` | Lightweight test-support helpers |
| `src/utils/` | Generic utilities |
| `tests/modules/` | Module-level functional UI tests |
| `tests/e2e/` | Cross-module business journey tests |
| `tests/security/` | RBAC, ownership, protected-route tests |
| `tests/browser/` | Browser-specific scenarios (dialogs, downloads, multi-tab, iframe) |
| `tests/portal/` | Patient portal tests |
| `artifacts/` | Generated test output (screenshots, traces, reports) |
| `ai-guidelines/` | Canonical architecture, test strategy, and contribution guidance |
| `AGENTS.md` | Cross-agent bootstrap for AI-assisted development |

## Getting started

1. Copy `.env.example` to `.env` and set `HEALTHOPS_BASE_URL`.
2. Run tests: `npx playwright test`

See `ai-guidelines/` and [AGENTS.md](AGENTS.md) for project rules and architecture.
