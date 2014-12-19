// Karma configuration

module.exports = function(config) {


  // Browsers to run on Sauce Labs
  // var customLaunchers = {
    // 'SL_Chrome': {
    //   base: 'SauceLabs',
    //   browserName: 'chrome'
    // }
    // 'SL_Firefox': {
    //   base: 'SauceLabs',
    //   browserName: 'firefox',
    //   version: '26'
    // },
    // 'SL_Safari': {
    //   base: 'SauceLabs',
    //   browserName: 'safari',
    //   platform: 'OS X 10.9',
    //   version: '7'
    // },

    // DO NOT USE IE THERE IS A BUG WITH SINON
    // see: https://github.com/cjohansen/Sinon.JS/issues/335
    // 'SL_IE_8': {
    //   base: 'SauceLabs',
    //   browserName: 'internet explorer',
    //   platform: 'Windows 2008',
    //   version: '8'
    // },
  // };


  // process.env.SAUCE_USERNAME = 'replace with username';
  // process.env.SAUCE_ACCESS_KEY = 'replace with api key';


  config.set({


    // Build Number Prodived by CI Server or assume Local, ex:
    // build: '${jenkins.buildNumber}' || 'LOCAL',

    // Title for Build appear in Sauce Labs UI
    // sauceLabs: {
    //     testName: 'replace with some name',
    //     recordVideo: true
    // },

    // Required by Karma Sauce Launcher
    // see: https://github.com/saucelabs/karma-sauce-example/blob/master/karma.conf-ci.js
    // customLaunchers: customLaunchers,

    // Start these browsers, currently available:
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    // browsers: Object.keys(customLaunchers),


    // base path, that will be used to resolve files and exclude
    basePath: '',


    // frameworks to use
    frameworks: ['mocha', 'chai', 'sinon'],


    // list of files / patterns to load in the browser
    files: [
        {pattern: 'node_modules/js-fixtures/fixtures.js', watched: false, included: true, served: true},
        {pattern: 'test/*.html', watched: true, included: false, served: true},
        {pattern: 'test/*.js', watched: true, included: true, served: true},
        {pattern: 'src/*.js', watched: true, included: false, served: true}
    ],



    // list of files to exclude
    exclude: [
      '**/*.min*'
    ],


    // test results reporter to use
    // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
    reporters: ['progress', 'coverage'],

    // the default configuration
    // junitReporter: {
    //   outputFile: 'test-results.xml',
    //   suite: ''
    // },

    preprocessors: {
      // source files, that you wanna generate coverage for
      // do not include tests or libraries
      // (these files will be instrumented by Istanbul)
    'src/*.js': ['coverage']
    },

    // optionally, configure the reporter
    coverageReporter: {
      type : 'html',
      dir : 'coverage/'
    },

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_DISABLE,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera (has to be installed with `npm install karma-opera-launcher`)
    // - Safari (only Mac; has to be installed with `npm install karma-safari-launcher`)
    // - PhantomJS
    // - IE (only Windows; has to be installed with `npm install karma-ie-launcher`)
    browsers: ['Chrome'],


    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000,


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false


  });
};
