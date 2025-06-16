module.exports = config => {
  config.set({
    basePath: './.',
    files: [
      './node_modules/sinon/pkg/sinon.js',
      './node_modules/chai/chai.js',
      'index.js',
      './test/index.spec.js'
    ],
    frameworks: ['mocha'],
    reporters: [],
    browsers: ['Chrome'],
    logLevel: config.LOG_INFO,
    singleRun: false,
    port: 9876
  });
};
// ./node_modules/karma/bin/karma start