/** @jsx jsx */

import PropTypes from 'prop-types';
import { jsx, useTheme, paint } from '@westpac/core';

// ==============================
// Utils
// ==============================

// ==============================
// Component
// ==============================

export const Container = props => {
	const { breakpoints, grid } = useTheme();
	const mq = paint(breakpoints);

	return (
		<div
			css={mq({
				marginLeft: 'auto',
				marginRight: 'auto',
				maxWidth: grid.container.maxWidth,
				paddingLeft: grid.container.padding,
				paddingRight: grid.container.padding,
			})}
			{...props}
		/>
	);
};
