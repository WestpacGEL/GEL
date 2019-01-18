/** @jsx jsx */

import PropTypes from 'prop-types';
import { jsx, useTheme } from '@westpac/core';
import { paint } from './utils';

export const Container = props => {
	const theme = useTheme();
	const arrayValues = paint(theme.breakpoints);
	const padding = [12, 36, 48, 60]; // TODO: sholud come from `theme`
	const maxWidth = 1320; // TODO: move to "local token"

	return (
		<div
			css={arrayValues({
				marginLeft: 'auto',
				marginRight: 'auto',
				maxWidth: maxWidth,
				paddingLeft: padding,
				paddingRight: padding,
			})}
			{...props}
		/>
	);
};
