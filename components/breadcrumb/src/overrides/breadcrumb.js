/** @jsx jsx */

import { jsx } from '@westpac/core';

const Breadcrumb = ({ state, ...rest }) => <nav {...rest} />;

const breadcrumbStyles = () => ({});

const breadcrumbAttributes = (_, { assistiveText }) => ({ 'aria-label': assistiveText });

export const defaultBreadcrumb = {
	component: Breadcrumb,
	styles: breadcrumbStyles,
	attributes: breadcrumbAttributes,
};
