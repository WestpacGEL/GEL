/** @jsx jsx */

import { jsx } from '@westpac/core';

export const GroupItems = ({ text, active, overrides, ...props }) => <ol {...props} />;

export const groupItemsStyles = (_, {}) => {
	return {
		position: 'relative',
		listStyle: 'none',
		paddingLeft: 0,
		margin: 0,
	};
};
