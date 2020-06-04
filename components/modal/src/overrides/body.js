/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';
import { Body } from '@westpac/body';

const ModalBody = ({ state, ...rest }) => <Body {...rest} />;

const bodyStyles = () => {
	const { TYPE, COLORS } = useBrand();
	return {
		padding: '1.125rem 1.5rem',
	};
};

const bodyAttributes = () => null;

export const defaultBody = {
	component: ModalBody,
	styles: bodyStyles,
	attributes: bodyAttributes,
};
