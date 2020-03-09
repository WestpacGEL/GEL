/** @jsx jsx */

import { jsx } from '@westpac/core';

const Breadcrumb = ({ state, ...props }) => <nav {...props} />;

const breadcrumbStyles = () => ({});

const breadcrumbAttributes = (_, { assistiveText }) => ({ 'aria-label': assistiveText });

export const defaultBreadcrumb = {
	component: Breadcrumb,
	styles: breadcrumbStyles,
	attributes: breadcrumbAttributes,
};
