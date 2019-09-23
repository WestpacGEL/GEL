const pkg = require('../package.json');
const { tint } = require('./utils');
const cfonts = require('cfonts');
const fs = require('fs');

const { COLORS } = require('../tokens/colors');
const { SPACING } = require('../tokens/spacing');
const { LAYOUT } = require('../tokens/layout');
const { TYPE } = require('../tokens/type');

// COLORS
const tints = {};
Object
	.keys( COLORS )
	.map( color => tints[ color ] = { ...tint( COLORS[ color ] ) } )

// TYPE
// TODO
// const brandfonts = {};
// TYPE
// 	.brandfonts
// 	.map( font => {
// 		brandfonts[ font.name ]
// 	});


// '@font-face': {
// 	fontFamily: name,
// 	src: 'url("myfont.woff2") format("woff2"), url("myfont.woff") format("woff")',
// }

function build() {
	console.log();
	cfonts.say(`${ pkg.name.replace('@westpac/', '') } TOKENS`, {
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
		TYPE,
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
