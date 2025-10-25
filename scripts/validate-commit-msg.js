#!/usr/bin/env node

/**
 * Commit Message Validation Script
 * Enforces Conventional Commits specification
 *
 * Format: <type>(<scope>): <subject>
 * Example: feat(auth): add login functionality
 *
 * Types: feat, fix, docs, style, refactor, perf, test, chore, ci, build, revert
 */

const fs = require('fs');

// Get commit message file path
const msgPath = process.argv[2] || '.git/COMMIT_EDITMSG';
const commitMsg = fs.readFileSync(msgPath, 'utf-8').trim();

// Skip merge commits (they start with "Merge")
if (commitMsg.startsWith('Merge')) {
  console.log('✅ Merge commit - skipping validation');
  process.exit(0);
}

// Extract only the first line (subject) for validation
// Conventional Commits allows multi-line messages with body and footer
const commitSubject = commitMsg.split('\n')[0];

// Regex for Conventional Commits: <type>(<scope>): <subject>
// Types: feat, fix, docs, style, refactor, perf, test, chore, ci, build, revert
// Scope: Optional, any alphanumeric string, kebab-case recommended
// Subject: Concise description, imperative mood, no period at the end
const commitRegex =
  /^(feat|fix|docs|style|refactor|perf|test|chore|ci|build|revert)(\(.+\))?: .{1,50}(?<!\.)$/;

if (!commitRegex.test(commitSubject)) {
  console.error(`
❌ Invalid commit message format!

Your commit message:
------------------------------------------------------------------------
${commitMsg}
------------------------------------------------------------------------

Please follow the Conventional Commits specification:
<type>(<scope>): <subject>

Examples:
  feat(auth): add login functionality
  fix(api): resolve timeout issue
  docs: update README
  chore(deps): upgrade react-native to 0.82.1

Valid types:
  feat: A new feature
  fix: A bug fix
  docs: Documentation only changes
  style: Changes that do not affect the meaning of the code (white-space, formatting, missing semicolons, etc)
  refactor: A code change that neither fixes a bug nor adds a feature
  perf: A code change that improves performance
  test: Adding missing tests or correcting existing tests
  chore: Changes to the build process or auxiliary tools and libraries such as documentation generation
  ci: Changes to our CI configuration files and scripts
  build: Changes that affect the build system or external dependencies (e.g. yarn, npm)
  revert: Reverts a previous commit

Subject rules:
  - Use imperative mood in the subject line (e.g., "add", "fix", "change" instead of "added", "fixed", "changed")
  - Max 50 characters for the subject line
  - Do not end the subject line with a period

For more details, see: https://www.conventionalcommits.org/en/v1.0.0/
`);
  process.exit(1);
}

console.log('✅ Commit message is valid');
process.exit(0);
