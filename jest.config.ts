module.exports={
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: ['**/tests/**/*.test.ts'],
    moduleFileExtensions: ['ts', 'js'],
    collectCoverage: true,
    coverageDirectory: 'coverage',
    coverageReporters: ['text', 'lcov'],
    globals: {
      'ts-jest': {
        tsConfig: 'tsconfig.json',
      },
    },
    setupFilesAfterEnv: ['jest-extended'],
    moduleNameMapper: {
        '@/(.*)': '<rootDir>/src/$1',
        '\\.(css|less|scss)$': 'identity-obj-proxy',
    },
}