const Color = require('color');

const tinting = (color, amount) =>
	Color('white')
		.mix(Color(color), ( amount / 100 ))
		.hex();

const tint = ( color ) => {
	const tints = {};
	[ 5, 10, 20, 30, 40, 50, 60, 70, 80, 90 ].map( tint => tints[ tint ] = tinting( color, tint ) );

	return tints;
}

module.exports = {
	tint,
}
