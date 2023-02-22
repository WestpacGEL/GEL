import { jsx } from '@westpac/core';

import { BlocksDocs } from '../../_utils';
import { RelatedInformation } from '../../related-information';

export const DesignTab = ({ blocks, item }) => {
	return (
		<div css={{ position: 'relative' }}>
			<BlocksDocs blocks={blocks} item={item} />
			<RelatedInformation item={item} />
		</div>
	);
};
