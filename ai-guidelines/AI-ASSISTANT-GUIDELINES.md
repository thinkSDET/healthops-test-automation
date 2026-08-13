# AI Assistant Guidelines

Tool-agnostic behavior rules for any implementation agent working in this repository.

## Purpose

These guidelines ensure that automated changes to the HealthOps UI test automation framework are consistent, scoped, and aligned with the project's architecture and test strategy. They exist so engineering knowledge remains in the repository—not inside a specific AI tool.

## Source of truth

The following are authoritative, in order of precedence:

1. **Implemented repository code** — existing page objects, workflows, fixtures, tests, and configuration.
2. **`ai-guidelines/`** — approved project documentation for architecture, test strategy, test data, and contribution practices.
3. **The HealthOps UI Functional E2E Test Case Catalog** — basis for what the application supports and what should be automated (254 UI test cases; 19 cross-module E2E workflows).

When documentation and code disagree, inspect the implementation and reconcile deliberately. Do not invent application behavior.

## Repository inspection

Before introducing new files or abstractions, the implementation agent must:

- Search for existing page objects, components, workflows, fixtures, factories, assertions, and validators in the relevant domain.
- Read surrounding code to match naming, structure, and patterns already in use.
- Identify whether the requested change belongs in an existing layer or requires a new one per `architecture/automation-architecture.md`.

## Change scope

- Modify only what the task requires.
- Do not refactor unrelated areas opportunistically.
- Do not change `playwright.config.ts`, `package.json`, or Playwright initialization unless the task explicitly requires it.
- Do not add automation implementation (tests, page objects, workflows, factories) unless explicitly requested.

## Reuse before creation

- Prefer extending an existing abstraction over creating a parallel one.
- Do not duplicate page objects, workflows, or fixtures with overlapping responsibility.
- If similar functionality exists under a different name, reuse or consolidate—do not silently fork.

## Architecture compliance

Follow the framework architecture documented in [architecture/automation-architecture.md](architecture/automation-architecture.md).

Respect layer boundaries:

- **Tests** orchestrate scenarios; they should not contain large amounts of low-level UI interaction.
- **Workflows** perform reusable business operations across pages.
- **Pages / components** encapsulate UI interaction.
- **Fixtures / data** provide setup and test inputs.
- **Assertions / validators** verify outcomes and domain state.

Do not invent additional architectural layers without justification.

## Dependency management

- Do not add npm dependencies without a clear, task-specific need.
- Do not reinstall or reinitialize Playwright.
- Keep `src/services/` lightweight; this is a UI automation project, not a general API automation layer.

## Validation

After implementation, run applicable project validation when it exists:

- Playwright tests affected by the change (`npx playwright test …`)
- TypeScript compilation (when `tsconfig.json` and scripts are configured)
- Linting (when configured)

Report what was run and any failures. Do not claim success without evidence when validation is feasible.

## Handling uncertainty

When application behavior, selectors, or business rules are unclear:

- Inspect the HealthOps application or existing automation patterns rather than guessing.
- Prefer stable, user-facing locators over brittle implementation details.
- Ask for clarification when a decision would affect architecture or test strategy.

## Existing functionality

- Do not silently remove, rename, or redesign working code outside the requested scope.
- Preserve the Playwright scaffold and configuration unless migration is explicitly requested.
- When replacing placeholders, explain what was superseded.

## Future functionality

- Do not implement roadmap items, speculative abstractions, or catalog tests unless explicitly requested.
- Placeholder directories and files may exist; fill them only when tasked to do so.

## AI output discipline

Before large architectural changes:

1. Explain the intended impact on tests, layers, and dependencies.
2. Inspect existing code and canonical docs.
3. Propose the smallest change that satisfies the request.

Prefer focused diffs over broad rewrites. Document non-obvious decisions in the appropriate `ai-guidelines/` document or learning note when the team establishes a new convention.
