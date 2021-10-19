/** @jsx jsx */

import { jsx, useBrand, getLabel } from '@westpac/core';

// ==============================
// Component
// ==============================

const ErrorMessage = ({ state: { tag, isMessages }, ...rest }) => {
	const Tag = isMessages ? 'ul' : tag;
	return <Tag {...rest} />;
};

// ==============================
// Styles
// ==============================

const errorMessageStyles = (_, { isMessages }) => {
	const { COLORS } = useBrand();

	return {
		label: getLabel('form-error-message'),
		fontSize: '0.875rem',
		margin: '0 0 0.75rem',
		color: COLORS.danger,
		...(isMessages && { listStyle: 'none', paddingLeft: 0 }),
	};
};

// ==============================
// Attributes
// ==============================

const errorMessageAttributes = (_, { isMessages }) => ({
	//a11y: as we're using `list-style:none` CSS, we need `role="list"` for VoiceOver to announce this as a list (see https://unfetteredthoughts.net/2017/09/26/voiceover-and-list-style-type-none/)
	role: isMessages ? 'list' : undefined,
});

// ==============================
// Exports
// ==============================

export const defaultErrorMessage = {
	component: ErrorMessage,
	styles: errorMessageStyles,
	attributes: errorMessageAttributes,
};
