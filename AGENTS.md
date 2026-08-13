# HealthOps UI Test Automation — Agent Bootstrap

This repository contains **Playwright-based UI test automation** for **HealthOps — Healthcare Operations Management System**.

## Canonical guidance

Project rules, architecture, and engineering practices live under **`ai-guidelines/`**. Those documents are the **single source of truth**. Read them before making structural or behavioral changes.

| Document | Purpose |
|----------|---------|
| [ai-guidelines/AI-ASSISTANT-GUIDELINES.md](ai-guidelines/AI-ASSISTANT-GUIDELINES.md) | Agent behavior and change discipline |
| [ai-guidelines/architecture/automation-architecture.md](ai-guidelines/architecture/automation-architecture.md) | Framework layers and boundaries |
| [ai-guidelines/test-strategy/test-strategy.md](ai-guidelines/test-strategy/test-strategy.md) | Test classification and execution strategy |
| [ai-guidelines/test-data/test-data-strategy.md](ai-guidelines/test-data/test-data-strategy.md) | Personas, factories, datasets, setup/cleanup |
| [ai-guidelines/contribution/contribution-guide.md](ai-guidelines/contribution/contribution-guide.md) | Naming, locators, review, and validation expectations |

## Before you change anything

1. **Inspect existing code** — search the repository for related abstractions before adding new ones.
2. **Reuse before creating** — extend page objects, workflows, fixtures, and data helpers that already exist.
3. **Stay in scope** — do not modify unrelated files or expand beyond the requested task.
4. **Preserve working behavior** — do not silently remove or redesign existing functionality.
5. **Validate when applicable** — run relevant Playwright tests, type checks, or linting that the project already supports.

## Out of scope by default

Do not reinitialize Playwright, reinstall dependencies, or implement roadmap functionality unless explicitly requested.
