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
feature/my new feature      # No spaces
```

## Commit Message Convention

All commit messages must follow the [Conventional Commits specification](https://www.conventionalcommits.org/en/v1.0.0/):

```
<type>(<scope>): <subject>
```

### Commit Types

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation only changes
- `style`: Changes that do not affect the meaning of the code (white-space, formatting, missing semicolons, etc)
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `perf`: A code change that improves performance
- `test`: Adding missing tests or correcting existing tests
- `chore`: Changes to the build process or auxiliary tools and libraries such as documentation generation
- `ci`: Changes to our CI configuration files and scripts
- `build`: Changes that affect the build system or external dependencies (e.g. yarn, npm)
- `revert`: Reverts a previous commit

### Commit Message Rules

- **Subject line:**
  - Use imperative mood (e.g., "add", "fix", "change" instead of "added", "fixed", "changed")
  - Max 50 characters
  - Do not end with a period
- **Body (optional):**
  - Provide more detailed explanatory text, if necessary.
  - Wrap at 72 characters.
- **Footer (optional):**
  - Reference issues by their ID (e.g., `Fixes #123`, `Refs #456`).
  - Breaking changes should be noted in the footer with `BREAKING CHANGE:`.

### Examples

✅ **Good:**

```
feat(auth): add login functionality
fix(api): resolve timeout issue
docs: update README
chore(deps): upgrade react-native to 0.82.1
```

❌ **Bad:**

```
added login functionality       # Not imperative mood
Fix: login bug.                 # Subject too long, ends with period
update dependencies             # Missing type prefix
```

## Pull Request Guidelines

- **Open PRs early:** Even if your work is not complete, open a draft PR to get early feedback.
- **Descriptive titles:** Use a clear and concise title that summarizes the PR's purpose.
- **Detailed description:** Provide a detailed description of the changes, including:
  - What problem it solves
  - How it was solved
  - Any relevant screenshots or GIFs
  - Testing instructions
- **Link issues:** Link your PR to relevant issues (e.g., `Closes #123`).
- **Request reviews:** Request reviews from the appropriate code owners.
- **Address feedback:** Respond to all review comments and make necessary changes.
- **Keep PRs small:** Aim for small, focused PRs that are easy to review.

## Local Development

### Pre-commit Hooks

We use Husky to run pre-commit checks:

1. **Branch name validation** - Ensures your branch follows the naming convention
2. **Lint-staged** - Runs ESLint and Prettier on staged files
3. **TypeScript type check** - Ensures no type errors
4. **Tests** - Runs all tests

### Commit Message Validation

Husky also validates commit messages to ensure they follow the Conventional Commits specification.

If your commit message is invalid, you'll see an error with examples of valid formats.

## CI/CD Pipeline

Our GitHub Actions CI pipeline runs on every PR and push to `main`:

1. **Validate** - Validates branch names and commit messages
2. **Lint & Type Check** - Runs ESLint and TypeScript type checking
3. **Test** - Runs all tests with coverage
4. **Build Android** - Builds Android debug APK
5. **Build iOS** - Builds iOS app for simulator

All checks must pass before a PR can be merged.
