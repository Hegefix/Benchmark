# Contributing Guidelines

## Branch Naming Convention

All branch names must follow this format:

```
<type>/<description>
```

### Branch Types

- `feat` - New feature branch
- `fix` - Bug fix branch
- `docs` - Documentation changes
- `style` - Code style changes (formatting, etc.)
- `refactor` - Code refactoring
- `perf` - Performance improvements
- `test` - Test additions or updates
- `chore` - Maintenance tasks
- `ci` - CI/CD changes
- `build` - Build system changes
- `hotfix` - Urgent production fix
- `release` - Release preparation

### Branch Naming Rules

- Use lowercase letters only
- Use hyphens to separate words
- No spaces or special characters
- Keep it concise and descriptive

### Examples

✅ **Good:**

```
feat/add-authentication
fix/resolve-login-bug
docs/update-readme
chore/update-dependencies
refactor/simplify-navigation
perf/optimize-images
```

❌ **Bad:**

```
Add_Authentication          # No underscores, no capitals
fix-bug                     # Missing type prefix
feat/Add Authentication     # No spaces, no capitals
my-feature-branch           # Missing type prefix
```

### Protected Branches

The following branches are protected and don't require the naming convention:

- `main`
- `master`
- `develop`

---

## Commit Message Convention

All commit messages must follow the [Conventional Commits](https://www.conventionalcommits.org/) format:

```
<type>(<scope>): <subject>
```

### Commit Types

- `feat` - A new feature
- `fix` - A bug fix
- `docs` - Documentation changes
- `style` - Code style changes (formatting, missing semicolons, etc.)
- `refactor` - Code refactoring (neither fixes a bug nor adds a feature)
- `perf` - Performance improvements
- `test` - Adding or updating tests
- `chore` - Maintenance tasks (updating dependencies, etc.)
- `ci` - CI/CD changes
- `build` - Build system changes
- `revert` - Revert a previous commit

### Commit Message Rules

- Subject must be 1-100 characters
- Use lowercase for the subject
- Use imperative mood ("add" not "added" or "adds")
- Don't end the subject with a period
- Scope is optional but recommended

### Examples

✅ **Good:**

```
feat(auth): add login functionality
fix(api): resolve timeout issue
docs: update README with setup instructions
chore(deps): update dependencies
refactor(navigation): simplify route structure
perf(images): optimize image loading
test(auth): add login component tests
ci: add branch name validation
```

❌ **Bad:**

```
Added login                          # Missing type and scope
fix: Fixed the bug.                  # Don't end with period, use imperative
Update README                        # Missing type
feat(auth): Added login feature      # Use imperative mood
FEAT: add feature                    # Use lowercase
```

### Scope Examples

Common scopes in this project:

- `auth` - Authentication related
- `nav` or `navigation` - Navigation related
- `ui` - UI components
- `api` - API related
- `storage` - Storage/persistence
- `theme` - Theming
- `deps` - Dependencies
- `config` - Configuration

---

## Pre-commit Checks

Before each commit, the following checks will run automatically:

1. **Branch name validation** - Ensures branch follows naming convention
2. **Commit message validation** - Ensures commit message follows conventional commits
3. **Linting** - ESLint checks on staged files
4. **Formatting** - Prettier formatting on staged files
5. **Type checking** - TypeScript type validation
6. **Tests** - Jest test suite

If any check fails, the commit will be blocked.

---

## Pull Request Guidelines

### PR Title

PR titles should follow the same format as commit messages:

```
<type>(<scope>): <subject>
```

Example:

```
feat(auth): add OAuth authentication
```

### PR Description

Include:

1. **What** - What changes were made
2. **Why** - Why these changes were necessary
3. **How** - How the changes were implemented
4. **Testing** - How the changes were tested
5. **Screenshots** - If UI changes, include before/after screenshots

### PR Checklist

Before submitting a PR, ensure:

- [ ] Branch name follows convention
- [ ] All commits follow conventional commits format
- [ ] Code is linted and formatted
- [ ] TypeScript compiles without errors
- [ ] All tests pass
- [ ] Test coverage is maintained (80%+)
- [ ] Documentation is updated if needed
- [ ] PR description is complete

---

## CI/CD Pipeline

The CI pipeline will automatically:

1. **Validate** branch name and commit messages
2. **Lint** code with ESLint
3. **Type check** with TypeScript
4. **Test** with Jest (including coverage)
5. **Build** Android and iOS apps

All checks must pass before a PR can be merged.

---

## Getting Help

If you have questions about:

- **Branch naming** - Run `node scripts/validate-branch-name.js`
- **Commit messages** - Run `node scripts/validate-commit-msg.js <commit-msg-file>`
- **Setup** - See [README.md](./README.md)
- **Testing** - See test files in `__tests__` directories

---

## Examples Workflow

### Creating a Feature

```bash
# Create a new branch
git checkout -b feat/add-dark-mode

# Make changes and commit
git add .
git commit -m "feat(theme): add dark mode support"

# Push and create PR
git push -u origin feat/add-dark-mode
```

### Fixing a Bug

```bash
# Create a new branch
git checkout -b fix/login-error

# Make changes and commit
git add .
git commit -m "fix(auth): resolve login timeout issue"

# Push and create PR
git push -u origin fix/login-error
```

---

Thank you for contributing! 🎉
