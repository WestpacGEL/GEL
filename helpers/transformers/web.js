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

	const { COLORS } = require(`${cwd}/tokens/colors`);
	const { SPACING } = require(`${cwd}/tokens/spacing`);
	const { LAYOUT } = require(`${cwd}/tokens/layout`);
	const { TYPE } = require(`${cwd}/tokens/type`);

	// COLORS
	let tints = {};
	Object.keys(COLORS).map(color => (tints = { ...tints, ...makeTints(COLORS[color], color) }));

	// TYPE
	const fonts = {
		bodyFont: TYPE.bodyFont,
		brandFont: TYPE.brandFont,
		files: convertFonts(TYPE.files),
	};

	console.log();
	cfonts.say(`${BRAND} TOKENS`, {
		font: 'chrome',
		colors: [COLORS.primary, COLORS.hero, COLORS.borderDark],
		space: false,
	});

	return {
		SPACING: {
			minor: SPACING.minor.map(space => space / 16 + (space > 0 ? 'rem' : 0)),
			...SPACING.major.map(space => space / 16 + (space > 0 ? 'rem' : 0)),
		},
		COLORS: {
			tints,
			...COLORS,
		},
		LAYOUT,
		TYPE: { ...fonts },
	};

	// try {
	// 	fs.mkdirSync(path.join(cwd, 'dist'));
	// } catch (error) {
	// 	if (error.code !== 'EEXIST') {
	// 		console.error(error);
	// 		process.exit(1);
	// 	}
	// }

	// try {
	// 	fs.writeFileSync(
	// 		path.join(cwd, 'dist/index.js'),
	// 		`module.exports = ${JSON.stringify(content)}`,
	// 		{
	// 			encoding: 'utf8',
	// 		}
	// 	);

	// 	cfonts.say('File written successfully', {
	// 		font: 'console',
	// 		colors: ['green'],
	// 		space: false,
	// 	});
	// 	console.log();
	// } catch (error) {
	// 	console.error(error);
	// 	process.exit(1);
	// }
}

module.exports = build;
