const yaml = require('node-yaml');

// Read data from site.yml and make it available globally
module.exports = async () => {
    const data = yaml.readSync('../../site.yml');
    return data;
};
