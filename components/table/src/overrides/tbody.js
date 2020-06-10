/** @jsx jsx */

import { jsx, getLabel } from '@westpac/core';

const Tbody = ({ state, ...rest }) => <tbody {...rest} />;

const tbodyStyles = () => ({ label: getLabel('tbody') });

const tbodyAttributes = () => null;

export const defaultTBody = {
	component: Tbody,
	styles: tbodyStyles,
	attributes: tbodyAttributes,
};
