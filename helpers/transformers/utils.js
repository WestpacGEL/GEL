const Color = require('color');

const tinting = (color, amount) =>
	Color('white')
		.mix(Color(color), amount / 100)
		.hex();

<<<<<<< HEAD
const tint = color => {
	const tints = {};
	[5, 10, 20, 30, 40, 50, 60, 70, 80, 90].map(tint => (tints[tint] = tinting(color, tint)));
=======
const makeTints = (color, name) => {
	const tints = {};
	[5, 10, 20, 30, 40, 50, 60, 70, 80, 90].map(tint => (tints[name + tint] = tinting(color, tint)));
>>>>>>> gel-develop

	return tints;
};

module.exports = {
<<<<<<< HEAD
	tint,
=======
	makeTints,
>>>>>>> gel-develop
};
