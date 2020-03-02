/** @jsx jsx */

import { jsx } from '@westpac/core';

export const List = ({ current, instanceIdPrefix, headingsTag, assistiveText, data, ...rest }) => (
	<ol {...rest} />
);

export const listStyles = () => ({
	position: 'relative',
	listStyle: 'none',
	paddingLeft: 0,
	margin: 0,
});
