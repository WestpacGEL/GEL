import { jsx, getLabel } from '@westpac/core';
import { Button } from '@westpac/button';
import { CloseIcon } from '@westpac/icon';

// ==============================
// Component
// ==============================

const CloseBtn = ({ state: _, ...rest }) => (
	<Button look="link" size="large" iconAfter={CloseIcon} assistiveText="Close" {...rest} />
);

// ==============================
// Styles
// ==============================

const closeBtnStyles = () => ({
	label: getLabel('sidebar-close-btn'),
	marginLeft: 'auto',
	padding: 0,
});

// ==============================
// Attributes
// ==============================

const closeBtnAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultCloseBtn = {
	component: CloseBtn,
	styles: closeBtnStyles,
	attributes: closeBtnAttributes,
};
