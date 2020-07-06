/** @jsx jsx */

import { jsx, getLabel } from '@westpac/core';

const Page = ({ state, ...rest }) => <li {...rest} />;

const pageStyles = () => ({
	label: getLabel('pagination-page'),
});

const pageAttributes = () => null;

export const defaultPage = {
	component: Page,
	styles: pageStyles,
	attributes: pageAttributes,
};
