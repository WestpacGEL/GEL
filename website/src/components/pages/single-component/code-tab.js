import React, { Fragment } from 'react';
import { Cell, Container, Grid } from '@westpac/grid';
import { Heading } from '@westpac/heading';
import { BlocksDocs } from '../../_utils';

export const CodeTab = ({ blocks, item }) => {
	return (
		<Fragment>
			<BlocksDocs blocks={blocks} item={item} />
		</Fragment>
	);
};
