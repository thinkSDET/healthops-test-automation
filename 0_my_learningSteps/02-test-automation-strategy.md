# Test Automation Strategy

## Initial Question

How should the HealthOps UI automation project be organized?

## Decision

We separated:

1. Module-level tests
2. Security/RBAC/ownership tests
3. Cross-module E2E workflows
4. Browser-specific scenarios

## Why?

The application has different types of testing concerns.
Putting everything into module folders would mix business workflows
and cross-cutting security/browser behavior.

## Result

tests/
├── modules/
├── security/
├── e2e/
└── browser/