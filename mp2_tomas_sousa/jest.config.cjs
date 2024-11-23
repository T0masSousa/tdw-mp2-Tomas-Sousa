module.exports = {
  setupFilesAfterEnv: ['./jest.setup.js'],
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['js', 'jsx'],
  transform: {
    '^.+\\.jsx?$': ['esbuild-jest', { loaders: { '.js': 'jsx' } }],
  },
  testMatch: ['**/?(*.)+(spec|test).[tj]s?(x)'],
};
