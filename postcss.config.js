const clearfix = require('postcss-clearfix');
const autoprefixer = require('autoprefixer');
const preccs = require('precss');
const cssnano = require('cssnano');
module.exports = ( { file, options, env } ) => ({
    sourceMap: true,
    plugins: [
        preccs,
        clearfix,
        autoprefixer,
        env === 'production' ? cssnano : false,
    ]
});