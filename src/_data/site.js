const yaml = require('node-yaml');

module.exports = async () => {
    const data = yaml.readSync('../../config.yml');
    return data;
};
