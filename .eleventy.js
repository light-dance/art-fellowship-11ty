module.exports = function(eleventyConfig) {
	/* Watch css files for changes
	~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
	eleventyConfig.setServerOptions({
		watch: ['./public/css/**/*.css'],
		showAllHosts: true
	})
	/* Passthrough JavaScript folder
	~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
	eleventyConfig.addPassthroughCopy({
		"source/_assets/js": "js"
	})
	
	/* SHORTCODE: Static Assets Linking
	~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
	eleventyConfig.addShortcode("asset", function ( path ) {
		// Would be better if we could read the url from the /_data/site.json file
		const host = 'https://assets.artfellowship.space'
		return host + path
	})	
	
	/* Set input/output
	~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
	return {
		dir: {
			input: "source",
			output: "public"
		}
	}
}