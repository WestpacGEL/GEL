/** @jsx jsx */

import { jsx } from '@westpac/core';

const Body = ({ state, ...rest }) => <div {...rest} />;

const bodyStyles = (_, {}) => {
	return {
		padding: '1.125rem 1.5rem',
	};
};

const bodyAttributes = () => null;

export const defaultBody = {
	component: Body,
	styles: bodyStyles,
	attributes: bodyAttributes,
};
