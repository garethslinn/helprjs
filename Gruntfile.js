module.exports = function (grunt) {
    grunt.initConfig({
        typescript: {
            base: {
                 src: ['**/*.ts'],
                 dest: './dist/index.js',
                 options: {
                     module: 'amd',
                     sourcemap: true,
                     declaration: false
                 }
             }

        
    });

    grunt.loadNpmTasks('grunt-typescript');

    grunt.file.setBase('../ts');

    grunt.registerTask('default', ['typescript:base', 'uglify:dist']);
};