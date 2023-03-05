import { jsx, useMediaQuery, getLabel } from '@westpac/core';
import { Grid } from '@westpac/grid';

// ==============================
// Component
// ==============================

const Inner = ({ state: _, ...rest }) => <Grid columnGap={['6px', null, '12px']} {...rest} />;

// ==============================
// Styles
// ==============================

const innerStyles = () => {
	const mq = useMediaQuery();
	return mq({
		label: getLabel('footer-inner'),
		padding: ['1.125rem .75rem', null, '1.125rem 1.5rem 1.5rem'],
	})[0];
};

// ==============================
// Attributes
// ==============================

const innerAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultInner = {
	component: Inner,
	styles: innerStyles,
	attributes: innerAttributes,
};
