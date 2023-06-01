import { jsx, useMediaQuery, getLabel, useBrand } from '@westpac/core';

// ==============================
// Component
// ==============================

const Content = ({ state: _, ...rest }) => <div {...rest} />;

// ==============================
// Styles
// ==============================

const contentStyles = () => {
	const mq = useMediaQuery();
	const { COLORS } = useBrand();
	return mq({
		label: getLabel('compacta-content'),
		padding: '0 1.125rem 1.875rem',
		paddingLeft: [null, null, '3.375rem'],
		backgroundColor: COLORS.white,
	})[0];
};

// ==============================
// Attributes
// ==============================

const contentAttributes = (_, { open }) => ({ 'aria-hidden': !open });

// ==============================
// Exports
// ==============================

export const defaultContent = {
	component: Content,
	styles: contentStyles,
	attributes: contentAttributes,
};
