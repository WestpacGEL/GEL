/** @jsx jsx */

import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme, useMediaQuery } from '@westpac/core';

// ==============================
// Component
// ==============================

export const FooterIcon = ({ icon: Icon, ...props }) => {
	const { COLORS } = useTheme();
	const mq = useMediaQuery();

	return (
		<Icon
			css={mq({
				float: 'left',
				marginRight: ['0.375rem', '0.75rem'],
			})}
			color={COLORS.tints.muted60}
			{...props}
		/>
	);
};

// ==============================
// Types
// ==============================

FooterIcon.propTypes = {
	/**
	 * Component icon
	 */
	icon: PropTypes.func,
};

FooterIcon.defaultProps = {};
