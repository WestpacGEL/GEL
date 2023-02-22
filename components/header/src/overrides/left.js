import { jsx, useMediaQuery, getLabel } from '@westpac/core';

// ==============================
// Component
// ==============================

const Left = ({ state: _, ...rest }) => <div {...rest} />;

// ==============================
// Styles
// ==============================

const leftStyles = (_, { leftIcon }) => {
	const mq = useMediaQuery();

	return mq({
		label: getLabel('header-Left'),
		display: 'flex',
		alignItems: 'center',
		...(leftIcon === 'hamburger' && { display: ['flex', null, 'none'] }),
	})[0];
};

// ==============================
// Attributes
// ==============================

const leftAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultLeft = {
	component: Left,
	styles: leftStyles,
	attributes: leftAttributes,
};
