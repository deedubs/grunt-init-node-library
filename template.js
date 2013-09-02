exports.description = 'Create a nodejs project';

exports.template = function(grunt, init, done) {

    init.process({}, [
        init.prompt('username'),
        init.prompt('name'),
        init.prompt('description')
    ], function(err, props) {

        var files = init.filesToCopy(props);
        init.copyAndProcess(files, props);

        init.writePackageJSON('package.json', {
            name: props.name,
            decription: props.description,
            version: '0.0.1',
            repository: 'git://github.com/' + props.username + ' /' + props.name,
            main: 'lib/index',
            node_version: '0.10.x',
            scripts: {
                test: 'NODE_ENV=test mocha test/index.js test/**/*.js',
                lint: 'jshint lib'
            },
            peerDependencies: {
            },
            dependencies: {
            },
            devDependencies: {
                'mocha': '*',
                'expect.js': '*',
                'blanket': '*',
                'jshint': '*',
                'sinon': '*',
                'flatten-json': '*'
            }
        });

        done();
    });
};
