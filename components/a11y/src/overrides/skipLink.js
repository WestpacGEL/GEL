import { getLabel, useBrand } from '@westpac/core';

const SkipLink = ({ state: _, ...rest }) => <a {...rest} />;

const skipLinkStyles = () => {
	const { COLORS } = useBrand();

	return {
		label: getLabel('skipLink'),
		position: 'fixed !important',
		top: 0,
		left: 0,
		right: 0,
		zIndex: 2000,
		fontSize: '1.3125rem',
		padding: '1em',
		textAlign: 'center',
		backgroundColor: '#fff',
		outlineOffset: '-2px !important', // override to be inside
		color: COLORS.link,
		textDecoration: 'underline',

		'&:not(:focus)': {
			position: 'absolute !important',
			width: '1px !important',
			height: '1px !important',
			padding: '0 !important',
			margin: '-1px !important',
			overflow: 'hidden !important',
			clip: 'rect(0,0,0,0) !important',
			whiteSpace: 'nowrap !important',
			border: '0 !important',
		},
	};
};

const skipLinkAttributes = (_, { href }) => ({ href });

export const defaultSkipLink = {
	component: SkipLink,
	styles: skipLinkStyles,
	attributes: skipLinkAttributes,
};
