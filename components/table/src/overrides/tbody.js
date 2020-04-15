/** @jsx jsx */

import { jsx } from '@westpac/core';

const Tbody = ({ state, ...rest }) => <tbody {...rest} />;

const tbodyStyles = () => ({});

const tbodyAttributes = () => null;

export const defaultTBody = {
	component: Tbody,
	styles: tbodyStyles,
	attributes: tbodyAttributes,
};
