/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';

const Caption = ({ state, ...rest }) => <caption {...rest} />;

const captionStyles = () => {
	const { TYPE } = useBrand();

	return {
		fontSize: '1.125rem',
		textAlign: 'left',
		marginBottom: '0.75rem',
		...TYPE.bodyFont[300],
	};
};

const captionAttributes = () => null;

export const defaultCaption = {
	component: Caption,
	styles: captionStyles,
	attributes: captionAttributes,
};
