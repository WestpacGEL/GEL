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
	const {
		LAYOUT: { breakpoints },
	} = useTheme();
	const mq = paint(breakpoints);

	return (
		<div
			css={mq({
				marginLeft: 'auto',
				marginRight: 'auto',
				maxWidth: '132rem',
				paddingLeft: ['1.2rem', '3.6rem', '4.8rem', '6rem'],
				paddingRight: ['1.2rem', '3.6rem', '4.8rem', '6rem'],
			})}
			{...props}
		/>
	);
};
