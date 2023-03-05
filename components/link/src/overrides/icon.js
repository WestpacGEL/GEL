import { jsx } from '@westpac/core';

// ==============================
// Component
// ==============================

const Icon = ({ icon: Icon, before, after, state: _, ...rest }) => (
	<Icon color="primary" {...rest} />
);

// ==============================
// Styles
// ==============================

const iconStyles = (_, { type, before, after }) => ({
	label: 'link-icon',
	...(before && { marginRight: '0.4em' }),
	...(after && { marginLeft: '0.4em' }),
	...(type === 'inline' && { alignSelf: 'center' }),
});

// ==============================
// Attributes
// ==============================

const iconAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultIcon = {
	component: Icon,
	styles: iconStyles,
	attributes: iconAttributes,
};
