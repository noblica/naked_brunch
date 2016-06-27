module.exports = {
    conventions: {
        ignored: /.+\.spec\.js/
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
                'js/app.js': /^app/,
                'js/libraries.js': /^bower_components/
            },
            order: {
                before: [/^app\/([0-9a-zA-Z]+\/)*[0-9a-zA-Z]+(\.module)?\.js$/]
            }
        },
        stylesheets: {
            joinTo: {
                'css/app.css': /^(app|bower_components)/
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
        }
    }
};