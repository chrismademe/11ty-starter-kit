const fs = require('fs');
const path = require('path');
const postcss = require('postcss');
const cleanCSS = require('clean-css');

const plugins = [
    require('postcss-import'),
    require('postcss-nested'),
    require('postcss-logical')
];

module.exports = async function(inputPath) {
    let src = fs.readFileSync(inputPath);

    return await postcss(plugins)
        .process(src, { from: inputPath })
        .then((result) => {
            return new cleanCSS({}).minify(result.css).styles;
        });
}