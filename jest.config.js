/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  clearMocks: true,
  moduleFileExtensions: ['ts'],
  roots: ['<rootDir'],
  testEnvironment: 'node',
  preset: 'ts-jest',
  transform: {
    '^.+\\.ts?$': 'ts-jest'
  },
  setupFilesAfterEnv: ['jest-extended'],
  globals: {
    'ts-jest': {
      diagnostics: false
    },
  },
  globalSetup: '<rootDir>/tests/global-setup.ts',
  globalTeardown: '<rootDir>/tests/global-teardown.ts',
};
