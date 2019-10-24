/** @jsx jsx */

import PropTypes from 'prop-types';
import { jsx, useMediaQuery } from '@westpac/core';

// ==============================
// Component
// ==============================

export const Container = props => {
	const mq = useMediaQuery();

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
