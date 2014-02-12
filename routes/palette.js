var palettes = require('../palettes.json');

exports.randomPalette = function(req, res) {
	// get a random palette from the top ones
	var randomPalette = palettes[Math.floor(palettes.length * Math.random())];
	//console.log('Your random palette is called: ' + randomPalette['title']);
	//console.log('Hex Arr: ' + randomPalette['colors']);

	res.json(randomPalette['colors']);
}