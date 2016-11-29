module.exports = function(grunt) {

	grunt.initConfig({
		responsive_images: {
			dev: {
				options: {
					engine: 'gm',
					sizes: [{
						width: 550,
						height: 300,
						suffix: '-2',
						quality: 60,
						aspectRatio: false
					}, {
						width: 1000,
						height: 350,
						suffix: '-2',
						quality: 50,
						aspectRatio: false
					}],
				},
				files: [{
					expand: true,
					src: ['*.{gif,jpg,jpeg,png}'],
					cwd: 'images_src/',
					dest: 'images/'
				}]
			}
		},
	});

	grunt.loadNpmTasks('grunt-responsive-images');
	grunt.registerTask('default', ['responsive_images']);

};