/** @jsx jsx */

import { jsx } from '@westpac/core';

const Page = ({ state, ...rest }) => <li {...rest} />;

const pageStyles = () => ({});

const pageAttributes = () => null;

export const defaultPage = {
	component: Page,
	styles: pageStyles,
	attributes: pageAttributes,
};
