/** @jsx jsx */

import { jsx, getLabel } from '@westpac/core';
import { Fragment } from 'react';

const Content = ({ state, children }) => <Fragment>{children}</Fragment>;

const contentStyles = () => ({
	label: getLabel('button-content'),
});

const contentAttributes = () => null;

export const defaultContent = {
	component: Content,
	styles: contentStyles,
	attributes: contentAttributes,
};
