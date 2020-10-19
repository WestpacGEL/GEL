/** @jsx jsx */

import { jsx, getLabel } from '@westpac/core';

// ==============================
// Component
// ==============================

const Breadcrumb = ({ state: _, ...rest }) => <nav {...rest} />;

// ==============================
// Styles
// ==============================

const breadcrumbStyles = () => ({
	label: getLabel('breadcrumb'),
});

// ==============================
// Attributes
// ==============================

const breadcrumbAttributes = (_, { assistiveText }) => ({
	//a11y: as we're using `list-style:none` CSS, we need `role="list"` for VoiceOver to announce this as a list (see https://unfetteredthoughts.net/2017/09/26/voiceover-and-list-style-type-none/)
	role: 'list',
	'aria-label': assistiveText,
});

// ==============================
// Exports
// ==============================

export const defaultBreadcrumb = {
	component: Breadcrumb,
	styles: breadcrumbStyles,
	attributes: breadcrumbAttributes,
};
