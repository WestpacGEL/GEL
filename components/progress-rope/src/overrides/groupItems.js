/** @jsx jsx */

import { jsx } from '@westpac/core';

export const GroupItems = ({ groupItemsId, index, text, active, complete, ...rest }) => (
	<ol {...rest} />
);

export const groupItemsStyles = () => ({
	position: 'relative',
	listStyle: 'none',
	paddingLeft: 0,
	margin: 0,
});
