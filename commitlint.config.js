module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      ERROR,
      'always',
      ['build', 'chore', 'deploy', 'docs', 'feat', 'fix', 'perf', 'refactor', 'revert', 'test']
    ]
  }
};
