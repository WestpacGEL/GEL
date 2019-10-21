// @codegen
const build = require('../../../helpers/transformers/web');
const Brand = require('../package.json')
	.name.replace('@westpac/', '')
	.toUpperCase();

const TOKENS = build(Brand);
const SPACING = JSON.stringify(TOKENS.SPACING);
const COLORS = JSON.stringify(TOKENS.COLORS);
const LAYOUT = JSON.stringify(TOKENS.LAYOUT);
const TYPE = JSON.stringify(TOKENS.TYPE);

module.exports = `
export const SPACING = ${SPACING};
export const COLORS = ${COLORS};
export const LAYOUT = ${LAYOUT};
export const TYPE = ${TYPE};
export default {
	SPACING,
	COLORS,
	LAYOUT,
	TYPE,
};
`;
