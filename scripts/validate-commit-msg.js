#!/usr/bin/env node

/**
 * Validate Commit Message
 * Enforces conventional commit format
 *
 * Format: <type>(<scope>): <subject>
 * Example: feat(auth): add login functionality
 *
 * Types: feat, fix, docs, style, refactor, perf, test, chore, ci, build, revert
 */

const fs = require('fs');
const path = require('path');

// Get commit message file path
const msgPath = process.argv[2] || '.git/COMMIT_EDITMSG';
const commitMsg = fs.readFileSync(msgPath, 'utf-8').trim();

// Skip validation for merge commits
if (commitMsg.startsWith('Merge')) {
  process.exit(0);
}

// Commit message pattern
const COMMIT_PATTERN =
  /^(feat|fix|docs|style|refactor|perf|test|chore|ci|build|revert)(\(.+\))?: .{1,100}/;

// Validate commit message
if (!COMMIT_PATTERN.test(commitMsg)) {
  console.error('\n❌ Invalid commit message format!\n');
  console.error('Commit message must follow conventional commits format:\n');
  console.error('  <type>(<scope>): <subject>\n');
  console.error('Types:');
  console.error('  feat:     A new feature');
  console.error('  fix:      A bug fix');
  console.error('  docs:     Documentation changes');
  console.error('  style:    Code style changes (formatting, etc.)');
  console.error('  refactor: Code refactoring');
  console.error('  perf:     Performance improvements');
  console.error('  test:     Adding or updating tests');
  console.error('  chore:    Maintenance tasks');
  console.error('  ci:       CI/CD changes');
  console.error('  build:    Build system changes');
  console.error('  revert:   Revert a previous commit\n');
  console.error('Examples:');
  console.error('  feat(auth): add login functionality');
  console.error('  fix(api): resolve timeout issue');
  console.error('  docs: update README with setup instructions');
  console.error('  chore(deps): update dependencies\n');
  console.error('Your commit message:');
  console.error(`  "${commitMsg}"\n`);
  process.exit(1);
}

console.log('✅ Commit message is valid');
process.exit(0);
