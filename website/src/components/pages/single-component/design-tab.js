/** @jsx jsx */

import { jsx } from '@westpac/core';

import { BlocksDocs, RelatedInformation } from '../../_utils';

export const DesignTab = ({ blocks, item }) => {
	return (
		<div id="design-tab" css={{ position: 'relative' }}>
			<BlocksDocs blocks={blocks} item={item} />
			<RelatedInformation item={item} />
		</div>
	);
};
