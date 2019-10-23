const path = require('path');
const cfonts = require('cfonts');
const fs = require('fs');

const { makeTints } = require('./utils');

/**
 * Convert a font token object to a styled object for emotion to use
 *
 * @param  {array} fonts - An array or font objects for a font
 *
 * @return {object}      - The styled object for emotion
 */
function convertFonts(fonts) {
	const output = {};
	output[''] = [];

	fonts.map(font => {
		output[''].push({
			'@font-face': {
				fontFamily: font.name,
				src: `url("${font.files.woff2}") format("woff2"), url("${font.files.woff}") format("woff")`,
				weight: font.weight,
				style: font.style,
			},
		});
	});

	return output;
}

/**
 * Transform the tokens into a web specific object that can be used in emotion
 *
 * @param  {string} BRAND - The brand string to find the right brand folder
 * @param  {string} dest - The destination path where the file should be written
 */
function build(BRAND) {
	const cwd = path.resolve(__dirname, `../../brands/${BRAND}`);

	const { COLORS: colors } = require(`${cwd}/tokens/colors`);
	// const { SPACING: spacing } = require(`${cwd}/tokens/spacing`);
	const { LAYOUT: layout } = require(`${cwd}/tokens/layout`);
	const {
		TYPE: { files, ...typeRest },
	} = require(`${cwd}/tokens/type`);
	const { PACKS: packs } = require(`${cwd}/tokens/packs`);

	// spacing
	// const SPACING = {
	// 	minor: spacing.minor.map(space => space / 16 + (space > 0 ? 'rem' : 0)),
	// 	...spacing.major.map(space => space / 16 + (space > 0 ? 'rem' : 0)),
	// };

	// colors
	let tints = {};
	Object.keys(colors).map(color => (tints = { ...tints, ...makeTints(colors[color], color) }));
	const COLORS = {
		tints,
		...colors,
	};

	// layout
	const LAYOUT = layout;

	// type
	const TYPE = {
		files: convertFonts(files),
		...typeRest,
	};

	// packs
	const PACKS = packs;

	console.log();
	cfonts.say(`${BRAND} TOKENS`, {
		font: 'chrome',
		colors: [COLORS.primary, COLORS.hero, COLORS.borderDark],
		space: false,
	});

	return `
		export const SPACING = ( unit, minor ) => {
			return ( unit * 6 - (minor ? 3 : 0) ) / 16 + (unit > 0 ? 'rem' : 0);
		};
		export const COLORS = ${JSON.stringify(COLORS)};
		export const LAYOUT = ${JSON.stringify(LAYOUT)};
		export const TYPE = ${JSON.stringify(TYPE)};
		export const PACKS = ${JSON.stringify(PACKS)};
		export const BRAND = "${BRAND}";
		export default {
			SPACING,
			COLORS,
			LAYOUT,
			TYPE,
			PACKS,
			BRAND,
		};
	`;
}

module.exports = build;
