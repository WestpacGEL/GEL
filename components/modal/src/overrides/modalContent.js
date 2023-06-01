import { jsx, getLabel, formatClassName, useBrand } from '@westpac/core';

// ==============================
// Component
// ==============================

const ModalContent = ({ state: _, ...rest }) => <div {...rest} />;

const BlenderModalContent = ({ state, className, ...rest }) => (
	<div className={formatClassName(className)} {...rest} />
);

// ==============================
// Styles
// ==============================

const modalContentStyles = () => {
	const { COLORS } = useBrand();
	return {
		label: getLabel('modal-content'),
		position: 'relative',
		backgroundColor: COLORS.white,
		borderRadius: '0.1875rem',
		boxShadow: '0 5px 15px rgba(0,0,0,0.5)',
		pointerEvents: 'auto',
		overflow: 'hidden',
	};
};

// ==============================
// Attributes
// ==============================

const modalContentAttributes = () => null;

const blenderAttributes = () => ({
	'data-js': 'modal-content__version__',
});

// ==============================
// Exports
// ==============================

export const defaultModalContent = {
	component: ModalContent,
	styles: modalContentStyles,
	attributes: modalContentAttributes,
};

export const blenderModalContent = {
	component: BlenderModalContent,
	styles: modalContentStyles,
	attributes: blenderAttributes,
};
