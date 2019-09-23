const { tint } = require('./utils');
const cfonts = require('cfonts');
const fs = require('fs');

function build( BRAND ) {
	const cwd = `../../brands/${ BRAND }`;

	const { COLORS } = require(`${ cwd }/tokens/colors`);
	const { SPACING } = require(`${ cwd }/tokens/spacing`);
	const { LAYOUT } = require(`${ cwd }/tokens/layout`);
	const { TYPE } = require(`${ cwd }/tokens/type`);

	// COLORS
	const tints = {};
	Object
		.keys( COLORS )
		.map( color => tints[ color ] = { ...tint( COLORS[ color ] ) } )

	// TYPE
	const brandfonts = { '@font-face': [] };
	TYPE
		.brandfonts
		.map( font => {
			brandfonts['@font-face'].push({
				fontFamily: font.name,
				src: `url("${ font.files.woff2 }") format("woff2"), url("${ font.files.woff }") format("woff")`,
				weight: font.weight,
				style: font.style,
			});
	});

	console.log();
	cfonts.say(`${ BRAND } TOKENS`, {
		font: 'chrome',
		colors: [ COLORS.primary, COLORS.hero, COLORS.borderDark ],
		space: false,
	});

	const content = {
		SPACING: SPACING.map( space => `${ space / 16 }rem` ),
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
		fs.writeFileSync( 'dist/index.js', JSON.stringify( content ), { encoding: 'utf8' });

		cfonts.say('File written successfully', {
			font: 'console',
			colors: [ 'green' ],
			space: false,
		});
		console.log();
	}
	catch( error ) {
		console.error( error );
	}
}

module.exports = build;
