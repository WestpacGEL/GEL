import { jsx } from '@westpac/core';
import { BlocksDocs } from '../../_utils';

export const AccessibilityTab = ({ blocks, item }) => {
	return (
		<div css={{ position: 'relative' }}>
			<BlocksDocs blocks={blocks} item={item} />
		</div>
	);
};
