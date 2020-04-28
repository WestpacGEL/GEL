/** @jsx jsx */

import { jsx, getLabel } from '@westpac/core';

const Breadcrumb = ({ state, ...rest }) => <nav {...rest} />;

const breadcrumbStyles = () => ({
	label: getLabel('breadcrumb'),
});

const breadcrumbAttributes = (_, { assistiveText }) => ({ 'aria-label': assistiveText });

export const defaultBreadcrumb = {
	component: Breadcrumb,
	styles: breadcrumbStyles,
	attributes: breadcrumbAttributes,
};
