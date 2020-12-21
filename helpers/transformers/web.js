const path = require('path');
const fs = require('fs');

const { makeTints } = require('./_utils');

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

	fonts.map((font) => {
		output[''].push({
			'@font-face': {
				fontFamily: font.name,
				src: `url("_PATH_${font.files.woff2}") format("woff2"), url("_PATH_${font.files.woff}") format("woff")`,
				fontWeight: font.weight,
				fontStyle: font.style,
			},
		});
	});

	return output;
}

/**
 * Transform the tokens into a web specific object that can be used in emotion
 *
 * @param  {string} BRAND_CODE - The brand string to find the right brand folder
 * @param  {string} dest - The destination path where the file should be written
 */
function build(BRAND_CODE) {
	const cwd = path.resolve(__dirname, `../../brands/${BRAND_CODE}`);

	const { COLORS: colors } = require(`${cwd}/tokens/colors`);
	// const { SPACING: spacing } = require(`${cwd}/tokens/spacing`);
	const { LAYOUT: layout } = require(`${cwd}/tokens/layout`);
	const {
		TYPE: { files, bodyFont, brandFont, ...typeRest },
	} = require(`${cwd}/tokens/type`);
	const { PACKS: packs } = require(`${cwd}/tokens/packs`);
	const { BRAND: brand } = require(`${cwd}/tokens/brand`);

	// brand
	const BRAND = {
		code: BRAND_CODE,
		...brand,
	};

	// colors
	let tints = {};
	Object.keys(colors).map((color) => (tints = { ...tints, ...makeTints(colors[color], color) }));
	const COLORS = {
		tints,
		...colors,
	};

	// spacing
	// const SPACING = {
	// 	minor: spacing.minor.map(space => space / 16 + (space > 0 ? 'rem' : 0)),
	// 	...spacing.major.map(space => space / 16 + (space > 0 ? 'rem' : 0)),
	// };

	// layout
	const LAYOUT = layout;

	// type
	const weights = ['100', '200', '300', '400', '500', '600', '700', '800', '900'];
	const errors = [];
	const TYPE = `
	{
		files: ${JSON.stringify(convertFonts(files))},
		bodyFont: {
			fontFamily: bodyFontFamily,
			headingWeight: bodyHeadingWeight,
			${weights.map((weight, i) => {
				if (typeof bodyFont.weights[i] !== 'string' || !weights.includes(bodyFont.weights[i])) {
					errors.push(
						`The weights array in the brand token for "${BRAND_CODE}" contains a wrong item "${bodyFont.weights[i]}"`
					);
				}

				return `${weight}: {
						fontFamily: bodyFontFamily,
						fontWeight: ${bodyFont.weights[i]},
					}`;
			})}
		},
		brandFont: {
			fontFamily: brandFontFamily,
			headingWeight: brandHeadingWeight,
			${weights.map((weight, i) => {
				if (typeof brandFont.weights[i] !== 'string' || !weights.includes(brandFont.weights[i])) {
					errors.push(
						`The weights array in the brand token for "${BRAND_CODE}" contains a wrong item "${brandFont.weights[i]}"`
					);
				}

				return `${weight}: {
						fontFamily: brandFontFamily,
						fontWeight: ${brandFont.weights[i]},
					}`;
			})}
		},
	};`;

	if (errors.length > 0) {
		throw errors.join('\n');
	}

	// packs
	const PACKS = packs;

	return `
		import { OVERRIDES as _OVERRIDES } from '../overrides/index';

		const bodyFontFamily = ${JSON.stringify(bodyFont.fontFamily)};
		const bodyHeadingWeight = ${JSON.stringify(bodyFont.headingWeight)};
		const brandFontFamily = ${JSON.stringify(brandFont.fontFamily)};
		const brandHeadingWeight = ${JSON.stringify(brandFont.headingWeight)};
		export const SPACING = ( i, minor, unit = 'rem' ) => {
			return ( i * 6 - (minor && i !== 0 ? 3 : 0) ) / 16 + (unit ? (i > 0 ? unit : 0) : 0);
		};
		export const COLORS = ${JSON.stringify(COLORS)};
		export const LAYOUT = ${JSON.stringify(LAYOUT)};
		export const TYPE = ${TYPE};
		export const PACKS = ${JSON.stringify(PACKS)};
		export const BRAND = ${JSON.stringify(BRAND)};
		export const OVERRIDES = _OVERRIDES({
			SPACING,
			COLORS,
			LAYOUT,
			TYPE,
			PACKS,
			BRAND,
		});
		export default {
			SPACING,
			COLORS,
			LAYOUT,
			TYPE,
			PACKS,
			BRAND,
			OVERRIDES,
		};
	`;
}

module.exports = build;
