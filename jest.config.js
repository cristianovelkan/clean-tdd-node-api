module.exports = {
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  testEnvironment: 'node',
  collectCoverageFrom: ['**/src/**/*.js', '!**/src/main/**'],
  preset: '@shelf/jest-mongodb',
  watchPathIgnorePatterns: ['globalConfig']
}
