module.exports = {
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['js', 'jsx'],
  transform: {
    '^.+\\.jsx?$': ['esbuild-jest', { loaders: { '.js': 'jsx' } }],
  },
  testMatch: ['**/?(*.)+(spec|test).[tj]s?(x)'],
};
