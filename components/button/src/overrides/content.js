/** @jsx jsx */

import { jsx } from '@westpac/core';
import { Fragment } from 'react';

const Content = ({ state, children }) => <Fragment>{children}</Fragment>;

const contentStyles = () => ({});

const contentAttributes = () => null;

export const defaultContent = {
	component: Content,
	styles: contentStyles,
	attributes: contentAttributes,
};
