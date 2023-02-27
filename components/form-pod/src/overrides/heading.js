import { jsx, useBrand, getLabel, useMediaQuery } from '@westpac/core';

// ==============================
// Component
// ==============================

const Heading = ({ state: _, ...rest }) => <h1 {...rest} />;

// ==============================
// Styles
// ==============================

const headingStyles = (_, { icon }) => {
	const mq = useMediaQuery();
	const { TYPE } = useBrand();
	return mq({
		label: getLabel('formPod-heading'),
		fontSize: ['1.5rem', '1.875rem'],
		margin: 0,
		...TYPE.bodyFont[300],
		...(icon && { marginRight: [null, '4.125rem'], paddingRight: [null, '0.75rem'] }),
	})[0];
};

// ==============================
// Attributes
// ==============================

const headingAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultHeading = {
	component: Heading,
	styles: headingStyles,
	attributes: headingAttributes,
};
