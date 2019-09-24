const { makeTints } = require('./utils');
const cfonts = require('cfonts');
const fs = require('fs');

function build(BRAND) {
	const cwd = `../../brands/${BRAND}`;

	const { COLORS } = require(`${cwd}/tokens/colors`);
	const { SPACING } = require(`${cwd}/tokens/spacing`);
	const { LAYOUT } = require(`${cwd}/tokens/layout`);
	const { TYPE } = require(`${cwd}/tokens/type`);

	// COLORS
	let tints = {};
	Object.keys(COLORS).map(color => (tints = { ...tints, ...makeTints(COLORS[color], color) }));

	// TYPE
	const brandfonts = {};
	TYPE.brandfonts.map(font => {
		if (font.name) {
			if (!brandfonts['']) brandfonts[''] = [];

			brandfonts[''].push({
				'@font-face': {
					fontFamily: font.name,
					src: `url("${font.files.woff2}") format("woff2"), url("${
						font.files.woff
					}") format("woff")`,
					weight: font.weight,
					style: font.style,
				},
			});
		} else if (font.fontFamily) {
			brandfonts['fontFamily'] = font.fontFamily;
		}
	});

	console.log();
	cfonts.say(`${BRAND} TOKENS`, {
		font: 'chrome',
		colors: [COLORS.primary, COLORS.hero, COLORS.borderDark],
		space: false,
	});

	const content = {
		SPACING: SPACING.map(space => `${space / 16}rem`),
		COLORS: {
			tints,
			...COLORS,
		},
		LAYOUT,
		TYPE: {
			brandfonts,
		},
	};

	try {
		fs.mkdirSync('dist/');
	} catch (error) {
		if (error.code !== 'EEXIST') {
			console.error(error);
			process.exit(1);
		}
	}

	try {
		fs.writeFileSync('dist/index.js', `module.exports = ${JSON.stringify(content)}`, {
			encoding: 'utf8',
		});

		cfonts.say('File written successfully', {
			font: 'console',
			colors: ['green'],
			space: false,
		});
		console.log();
	} catch (error) {
		console.error(error);
		process.exit(1);
	}
}

module.exports = build;
