Package.describe({
    name: 'CyberCyclone:framework7',
    version: '3.5.1',
    summary: 'Framework7 v3.5.1 for Meteor using the bundle JS',
    git: 'https://github.com/CyberCyclone/meteor-framework7',
    documentation: 'README.md'
});

Package.onUse(function (api) {
    api.addFiles('framework7/packages/core/framework7.esm.bundle.js', 'client');

    api.addFiles([
        'framework7/packages/core/css/framework7.css',
    ], 'client');
});
