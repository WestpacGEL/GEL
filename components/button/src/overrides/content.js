/** @jsx jsx */

import { jsx, getLabel } from '@westpac/core';
import { Fragment } from 'react';

const Content = ({ state, children }) => <Fragment>{children}</Fragment>;

const contentStyles = (_, { hasChildren }) => ({
	label: getLabel('button-content', { hasChildren }),
});

const contentAttributes = () => null;

export const defaultContent = {
	component: Content,
	styles: contentStyles,
	attributes: contentAttributes,
};
