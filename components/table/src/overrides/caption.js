/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';

export const CaptionComponent = props => <caption {...props} />;

export const captionStyles = (_, {}) => {
	const { TYPE } = useBrand();

	return {
		fontSize: '1.125rem',
		textAlign: 'left',
		marginBottom: '0.75rem',
		...TYPE.bodyFont[300],
	};
};
