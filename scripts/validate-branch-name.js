#!/usr/bin/env node

/**
 * Validate Branch Name
 * Enforces branch naming conventions
 *
 * Format: <type>/<description>
 * Example: feat/add-authentication
 *
 * Types: feat, fix, docs, style, refactor, perf, test, chore, ci, build, hotfix, release
 */

const { execSync } = require('child_process');

// Get current branch name
let branchName;
try {
  branchName = execSync('git rev-parse --abbrev-ref HEAD', {
    encoding: 'utf-8',
  }).trim();
} catch (error) {
  console.error('❌ Failed to get branch name');
  process.exit(1);
}

// Skip validation for main/master/develop branches
const protectedBranches = ['main', 'master', 'develop'];
if (protectedBranches.includes(branchName)) {
  process.exit(0);
}

// Branch name pattern
const BRANCH_PATTERN =
  /^(feat|fix|docs|style|refactor|perf|test|chore|ci|build|hotfix|release)\/[a-z0-9-]+$/;

// Validate branch name
if (!BRANCH_PATTERN.test(branchName)) {
  console.error('\n❌ Invalid branch name!\n');
  console.error('Branch name must follow the format:\n');
  console.error('  <type>/<description>\n');
  console.error('Types:');
  console.error('  feat:     New feature branch');
  console.error('  fix:      Bug fix branch');
  console.error('  docs:     Documentation changes');
  console.error('  style:    Code style changes');
  console.error('  refactor: Code refactoring');
  console.error('  perf:     Performance improvements');
  console.error('  test:     Test additions or updates');
  console.error('  chore:    Maintenance tasks');
  console.error('  ci:       CI/CD changes');
  console.error('  build:    Build system changes');
  console.error('  hotfix:   Urgent production fix');
  console.error('  release:  Release preparation\n');
  console.error('Rules:');
  console.error('  - Use lowercase letters');
  console.error('  - Use hyphens to separate words');
  console.error('  - No spaces or special characters\n');
  console.error('Examples:');
  console.error('  feat/add-authentication');
  console.error('  fix/resolve-login-bug');
  console.error('  docs/update-readme');
  console.error('  chore/update-dependencies\n');
  console.error('Your branch name:');
  console.error(`  "${branchName}"\n`);
  process.exit(1);
}

console.log(`✅ Branch name is valid: ${branchName}`);
process.exit(0);
