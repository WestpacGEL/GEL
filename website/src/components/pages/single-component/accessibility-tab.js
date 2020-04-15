import React, { Fragment } from 'react';

import { Badge } from '@westpac/badge';

import { BlocksDocs } from '../../_utils';

export const AccessibilityTab = ({ blocks, item }) => {
	return (
		<Fragment>
			<BlocksDocs blocks={blocks} item={item} />
		</Fragment>
	);
};
