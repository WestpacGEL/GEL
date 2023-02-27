import { jsx, useBrand } from '@westpac/core';
import { WriteIcon } from '@westpac/icon';

export const WritingIcon = () => {
	const {
		GEL: { COLORS },
	} = useBrand();

	return <WriteIcon color={COLORS.icon} size={['medium', null, null, null, 'large']} />;
};
