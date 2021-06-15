/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';
import { PadlockIcon } from '@westpac/icon/PadlockIcon';

export const ExternalLinkIcon = (props) => {
	const { COLORS } = useBrand();

	return (
		<PadlockIcon
			size="xsmall"
			color="inherit"
			assistiveText=", opens in a new tab"
			css={{ position: 'relative', marginLeft: '0.2em', top: '-0.125rem' }}
			{...props}
		/>
	);
};
