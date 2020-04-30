import React, { Fragment } from 'react';

import { BlocksDocs, RelatedInformation } from '../../_utils';

export const DesignTab = ({ blocks, item }) => {
	return (
		<div id="design-tab">
			<BlocksDocs blocks={blocks} item={item} />
			<RelatedInformation item={item} />
		</div>
	);
};
