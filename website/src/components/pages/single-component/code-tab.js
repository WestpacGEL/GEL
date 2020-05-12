import React, { Fragment } from 'react';
import { BlocksDocs } from '../../_utils';

export const CodeTab = ({ blocks, item }) => {
	return (
		<Fragment>
			<BlocksDocs blocks={blocks} item={item} />
		</Fragment>
	);
};
