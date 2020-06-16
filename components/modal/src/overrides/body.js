/** @jsx jsx */

import { jsx, useBrand, getLabel } from '@westpac/core';
import { Body } from '@westpac/body';

const ModalBody = ({ state, ...rest }) => <Body {...rest} />;

const bodyStyles = () => {
	return {
		label: getLabel('modal-body'),
		padding: '1.125rem 1.5rem',
	};
};

const bodyAttributes = () => null;

export const defaultBody = {
	component: ModalBody,
	styles: bodyStyles,
	attributes: bodyAttributes,
};
