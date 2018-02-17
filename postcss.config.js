const clearfix = require('postcss-clearfix');
const autoprefixer = require('autoprefixer');
const preccs = require('precss');
// const cssnano = require('cssnano');
// import clearfix from 'postcss-clearfix';
// import autoprefixer from 'autoprefixer';
// import preccs from 'precss';
module.exports = ( { file, options, env } ) => ({
    sourceMap: true,
    plugins: [
        preccs,
        clearfix,
        autoprefixer,
        env === 'production' ? console.log('------ yes') : console.log('------ no'),
        // env === 'production' ? cssnano : false,
    ]
});