import React, { Fragment } from 'react';

import { BlocksDocs, RelatedInformation } from './_utils';

export const DesignTab = ({ blocks, item }) => {
	return (
		<Fragment>
			<BlocksDocs blocks={blocks} item={item} />
			<RelatedInformation />
		</Fragment>
	);
};
