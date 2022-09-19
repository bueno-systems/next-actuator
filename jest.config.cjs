/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  testEnvironment: 'node',
  modulePathIgnorePatterns: ['<rootDir>/dist/'],
  // Enable support for ESM in Jest
  // https://jestjs.io/docs/ecmascript-modules
  transform: {
    '^.+.tsx?$': [
      'ts-jest',
      {
        useESM: true
      }
    ]
  },
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1'
  }
}
