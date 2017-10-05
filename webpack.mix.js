let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
mix.webpackConfig({
    output: {
        chunkFilename: 'chunk/[name].js',
        publicPath: '/'
    },
});
mix.js('resources/assets/js/admin.js', 'public/js/admin');

mix.js('resources/assets/js/app.js', 'public/js')
	.extract(['vue','jquery','moment'])
   .sass('resources/assets/sass/app.scss', 'public/css')
   .sass('resources/assets/sass/auth.scss', 'public/css');

