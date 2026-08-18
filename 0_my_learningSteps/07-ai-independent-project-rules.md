# AI-Independent Project Rules

Learning record — **not** project policy. Canonical rules live in `ai-guidelines/`.

## Problem

The AI coding tool used to implement this repository may change over time (Cursor today; Claude, Copilot, or another agent tomorrow).

If engineering rules live only inside one tool's configuration, the project becomes dependent on that tool and knowledge is lost when switching.

## Initial concern

An earlier learning note (`0_my_learningSteps/04-ai-independent-rules.md`) pointed permanent documentation at `docs/`. That folder was placeholder scaffolding. **Permanent engineering knowledge now lives in `ai-guidelines/`**, with lightweight entry points for agents and tools.

## Decision

Keep permanent engineering knowledge **inside the repository**, tool-agnostically, under `ai-guidelines/`.

Tool-specific files are **adapters only**—they bootstrap agents to the canonical docs; they do not restate them.

## Architecture

```text
Canonical project knowledge
        ↓
    ai-guidelines/

Cross-agent bootstrap
        ↓
      AGENTS.md

Tool-specific adapters
        ↓
Cursor / Claude / Copilot / others
        ↓
   AI implementation
```

## Why we keep both AGENTS.md and a Cursor adapter

| File | Role |
|------|------|
| **`AGENTS.md`** | Repository-level bootstrap any agent can read; lists canonical docs and core discipline |
| **`.cursor/rules/project-guidelines.mdc`** | Cursor's native mechanism for automatic rule discovery (`alwaysApply: true`) |

They serve **different purposes**:

- `AGENTS.md` is cross-agent and lives at the repo root.
- The Cursor rule ensures the IDE agent is directed to canonical guidance without copying full architecture into Cursor config.

**Neither file duplicates the canonical documentation.**

## Key learning

- **One source of truth:** `ai-guidelines/`
- **Multiple lightweight adapters:** `AGENTS.md`, `.cursor/rules/`, future tools as needed
- **Do not put framework architecture inside any AI tool's config**

## What we deliberately avoided

- No prompt archive
- No duplicated rule documents across `AGENTS.md`, Cursor rules, and `ai-guidelines/`
- No Cursor-specific architecture decisions embedded in the framework
- No Playwright reinitialization
- No automation implementation in this step
- No unnecessary dependencies

## Related notes

- `0_my_learningSteps/04-ai-independent-rules.md` — early decision (superseded location: use `ai-guidelines/`)
- `0_my_learningSteps/05-project-skeleton.md` — folder structure created for domains and layers

## Human decisions still pending

- Test tag conventions (`@smoke`, `@regression`, etc.)
- E2E file suffix convention (`.e2e.spec.ts` vs `.spec.ts`)
- TypeScript / ESLint project configuration
- Whether to retire or redirect `0_my_learningSteps/` vs `learning/` long term
