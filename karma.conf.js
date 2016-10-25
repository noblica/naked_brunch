// Karma configuration
// Generated on Mon Jul 18 2016 13:40:28 GMT+0200 (Central Europe Summer Time)

module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],


        // list of files / patterns to load in the browser

        /**
         * The ordering is important here, for some retarded reason.
         * You have to include the templates, AFTER app.js
         */
        files: [
            'public/js/libraries.js',
            'https://code.jquery.com/ui/1.12.1/jquery-ui.min.js',
            'http://cdn-na.infragistics.com/igniteui/2016.1/latest/js/infragistics.core.js',
            'http://cdn-na.infragistics.com/igniteui/2016.1/latest/js/infragistics.lob.js',
            'public/igniteui-angular.js',
            'public/js/app.js',
            'public/js/templates.js',
            'public/js/test.js'
        ],

        // list of files to exclude
        exclude: [],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {},


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress'],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['PhantomJS'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity
    })
};
