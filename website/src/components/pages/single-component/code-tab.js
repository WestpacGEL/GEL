import { jsx } from '@westpac/core';
import { BlocksDocs } from '../../_utils';

export const CodeTab = ({ blocks, item }) => {
	return (
		<div css={{ position: 'relative' }}>
			<BlocksDocs blocks={blocks} item={item} />
		</div>
	);
};
