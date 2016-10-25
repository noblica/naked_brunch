module.exports = {
    conventions: {
        ignored: [/^bower_components\/bootstrap-sass\/assets\/javascripts/,
                    /_.+\.scss/],
        assets: /^app\/assets/
    },
    paths: {
        public: 'public/'
    },
    npm: {
        enabled: false
    },
    modules: {
        definition: false,
        wrapper: false
    },
    files: {
        javascripts: {
            joinTo: {
                'js/app.js': ['app/**/*.js', '!app/**/*.spec.js'],
                'js/libraries.js': /^bower_components/,
                'js/test.js': 'app/**/*.spec.js'
            },
            order: {
                before: [/^app\/([0-9a-zA-Z\-]+\/)+[0-9a-zA-Z]+(\.module)\.js$/,
                    /^app\/[0-9a-zA-Z]+(\.module)\.js$/]
            }
        },
        stylesheets: {
                joinTo: {
                    'css/app.css': /^app/
                }
        },
        templates: {
            joinTo: {
                'js/templates.js': /^app\//
            }
        }
    },
    plugins: {

        /**
         * Have to disable it, otherwise browsersync just keeps reloading.
         */
        off: [
            'digest-brunch'],
        angular_templates: {
            module: 'app'
        },
        uglify: {
            ignored: /js\/test\.js/
        }
    }
};