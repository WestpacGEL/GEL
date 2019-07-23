import Color from 'color';

export const tint = (color, amount) =>
	Color('white')
		.mix(Color(color), amount)
		.hex();
