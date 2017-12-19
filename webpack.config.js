
const path = require('path');
const public = path.resolve('./public');
module.exports = {
    devtool: 'source-map',
    entry: path.join(__dirname, '/src/scripts.js'),
    output: {
        path: path.resolve(public, './js/'),
        filename: 'bundle.js'
    },
    watch:true

}