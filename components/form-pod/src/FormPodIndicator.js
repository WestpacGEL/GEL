/** @jsx jsx */

import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme } from '@westpac/core';
import { RefreshIcon } from '@westpac/icon';

// ==============================
// Component
// ==============================

export const FormPodIndicator = ({ icon: Icon, text, ...props }) => {
	const { colors } = useTheme();

	return (
		<div css={{ color: colors.muted }} {...props}>
			{text && <span css={{ verticalAlign: 'middle' }}>{text}</span>}
			{Icon && <Icon size="medium" css={{ marginLeft: '1.2rem' }} />}
		</div>
	);
};

// ==============================
// Types
// ==============================

FormPodIndicator.propTypes = {
	/**
	 * Indicator icon
	 */
	icon: PropTypes.func,

	/**
	 * Indicator text
	 */
	text: PropTypes.string,
};

FormPodIndicator.defaultProps = {
	icon: RefreshIcon,
	text: 'Saving',
};
