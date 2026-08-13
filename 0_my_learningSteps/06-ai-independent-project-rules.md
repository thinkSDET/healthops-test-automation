# 06 — AI-Independent Project Rules

## Objective

Design the automation repository so its engineering rules remain useful even if the AI coding tool changes.

## Problem

The project may be developed using Cursor today and another AI coding agent in the future.

If the important architecture rules exist only inside one tool's configuration, those rules become coupled to that tool.

That creates unnecessary dependency.

## Decision

Keep the permanent project knowledge inside the repository.

The framework itself should remain independent of any AI coding tool.

## Final Architecture

```text
                    ai-guidelines/
                 Canonical Knowledge
                         │
             ┌───────────┴───────────┐
             │                       │
         AGENTS.md              Tool Adapter
      Cross-agent entry          e.g. Cursor
             │                       │
             └───────────┬───────────┘
                         ↓
                  AI Implementation
```

## `ai-guidelines/`

This is the canonical source of truth.

It contains:

* AI assistant behavior guidelines
* Automation architecture
* Test strategy
* Test-data strategy
* Contribution rules

These documents describe the project's engineering system.

They are not tied to any specific AI tool.

## `AGENTS.md`

`AGENTS.md` is the repository-level bootstrap.

Its purpose is to point an implementation agent toward the canonical project guidance and establish high-level repository behavior.

It should remain concise and should not duplicate the complete architecture documentation.

## Tool-Specific Adapter

A tool-specific adapter may exist when required by an AI coding tool.

For Cursor, this is:

```text
.cursor/rules/project-guidelines.mdc
```

The adapter is not the source of truth.

Its purpose is only to connect Cursor's native instruction mechanism to the repository's canonical guidance.

## Why Both Are Needed

`AGENTS.md` and the Cursor rule have different responsibilities.

```text
AGENTS.md
→ repository-level bootstrap

.cursor/rules/
→ Cursor-specific discovery/application mechanism

ai-guidelines/
→ actual project knowledge
```

The important principle is:

**One source of truth. Multiple lightweight adapters.**

## What We Avoided

We deliberately avoided:

* Duplicating the same rules in multiple AI configuration files.
* Making the automation architecture Cursor-specific.
* Creating a permanent archive of every AI prompt.
* Reinitializing Playwright.
* Introducing unnecessary dependencies.
* Writing automation implementation before the framework rules were established.

## Key Learning

AI tools should consume the project's knowledge.

The project should not depend on the AI tool that happens to be used to build it.

The repository remains the source of truth, while AI tools act as implementation interfaces.
