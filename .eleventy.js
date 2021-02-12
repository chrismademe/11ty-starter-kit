const fs = require('fs');
const eleventyNavigationPlugin = require('@11ty/eleventy-navigation');

module.exports = (config) => {

    // Navigation Plugin
    config.addPlugin(eleventyNavigationPlugin);

    // Passthrough Files/Directories
    [
        'assets'
    ].forEach((item) => {
        config.addPassthroughCopy(item);
    });

    // Handle 404 locally
    config.setBrowserSyncConfig({
        callbacks: {
            ready: (err, browserSync) => {
                const content404 = fs.readFileSync('_site/404.html');

                browserSync.addMiddleware('*', (req, res) => {
                    // Provides the 404 content without redirect.
                    res.write(content404);
                    res.end();
                });
            },
        },
    });

    return {
        dir: {
            input: 'templates',
            layouts: '_layouts',
        },
    };
};
