import { jsx, useBrand, getLabel } from '@westpac/core';

// ==============================
// Component
// ==============================

const Content = ({ state: _, ...rest }) => <div {...rest} />;

// ==============================
// Styles
// ==============================

const contentStyles = (_, { open }) => {
	const { LAYOUT } = useBrand();

	return {
		label: getLabel('sidebar-content'),
		position: 'relative',
		display: 'flex',
		flexDirection: 'column',
		height: '100%',
		backgroundColor: '#fff',

		[`@media (max-width: ${LAYOUT.breakpoints.md}px)`]: {
			zIndex: 1030,
			position: 'fixed',
			top: 0,
			bottom: 0,
			right: 0,
			transform: open ? 'translateX(0)' : 'translateX(100%)',
			transition:
				'transform .5s cubic-bezier(.23, 1, .32, 1), -webkit-transform .5s cubic-bezier(.23, 1, .32, 1)',
			width: '100%',
			willChange: 'transform',
			maxWidth: '300px',
		},
	};
};

// ==============================
// Attributes
// ==============================

const contentAttributes = (_, { open }) => ({
	'aria-hidden': !open,
});

// ==============================
// Exports
// ==============================

export const defaultContent = {
	component: Content,
	styles: contentStyles,
	attributes: contentAttributes,
};
