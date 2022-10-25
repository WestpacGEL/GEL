/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';
import { EmailIcon } from '@westpac/icon';

export const MailIcon = () => {
	const {
		GEL: { COLORS },
	} = useBrand();

	return <EmailIcon color={COLORS.icon} size={['medium', null, null, null, 'large']} />;
};
