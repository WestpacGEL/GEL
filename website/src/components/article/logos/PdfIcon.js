/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';
import { PdfFileIcon } from '@westpac/icon';

export const PdfIcon = () => {
	const {
		GEL: { COLORS },
	} = useBrand();

	return <PdfFileIcon color={COLORS.icon} size={['medium', null, null, null, 'large']} />;
};
