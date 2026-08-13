# AI-Independent Development Rules

## Problem

The project may be developed using different AI coding agents
over time.

Examples:
- Cursor
- Claude
- GitHub Copilot
- Other coding agents

## Decision

Project rules must NOT be tied to a specific AI tool.

## Permanent Source of Truth

docs/

## Agent Bootstrap

An agent-specific instruction mechanism should point the agent
to the canonical project documentation.

## Principle

Tool-specific instruction mechanism
        ↓
Project documentation
        ↓
Implementation