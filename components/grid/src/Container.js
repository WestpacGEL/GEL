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
	const theme = useTheme();
	const arrayValues = paint(theme.breakpoints);
	// const padding = [12, 36, 48, 60]; // TODO: sholud come from `theme`
	// const maxWidth = 1320; // TODO: move to "local token"

	return (
		<div
			css={arrayValues({
				marginLeft: 'auto',
				marginRight: 'auto',
				maxWidth: theme.grid.container.maxWidth, //maxWidth,
				paddingLeft: theme.grid.container.padding, //padding
				paddingRight: theme.grid.container.padding, //padding
			})}
			{...props}
		/>
	);
};
