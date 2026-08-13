# Project Architecture

## Initial Thinking

A simple:
tests/
pages/
utils/

structure would not be sufficient.

## Why?

The application contains:
- many domains
- multiple roles
- ownership rules
- cross-module workflows
- browser scenarios
- reusable business operations
- dynamic test data

## Architecture Chosen

Test
  ↓
Workflow
  ↓
Page / Component
  ↓
Fixture / Data
  ↓
Assertion / Validator