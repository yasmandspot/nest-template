module.exports = {
  // Use conventional commit rules as base configuration
  extends: ['@commitlint/config-conventional'],
  rules: {
    // Enforce specific commit message types
    // Level 2 means "error" (0 = disabled, 1 = warning, 2 = error)
    // "always" means the rule is always enforced
    'type-enum': [
      2,
      'always',
      [
        'build', // Changes that affect the build system or external dependencies
        'chore', // Regular maintenance tasks and minor updates
        'ci', // Changes to CI configuration files and scripts
        'docs', // Documentation only changes
        'feat', // A new feature
        'fix', // A bug fix
        'perf', // A code change that improves performance
        'refactor', // A code change that neither fixes a bug nor adds a feature
        'revert', // Reverts a previous commit
        'style', // Changes that do not affect the meaning of the code
        'test', // Adding missing tests or correcting existing tests
      ],
    ],
  },
};

/*
  Example commit messages:
  feat: add user authentication
  fix: resolve memory leak in dashboard
  docs: update API documentation
  style: format code according to style guide
  test: add unit tests for user service
  refactor: restructure authentication logic
  perf: optimize database queries
  ci: update gitlab pipeline configuration
  build: update dependencies
  chore: clean up deprecated code
  revert: revert commit "add user authentication"
  */
