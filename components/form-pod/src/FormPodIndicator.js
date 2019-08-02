/** @jsx jsx */

import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme } from '@westpac/core';

// ==============================
// Utils
// ==============================

// ==============================
// Component
// ==============================

export const FormPodIndicator = ({ icon: Icon, text, ...props }) => {
	const { colors } = useTheme();

	return (
		<div css={{ color: colors.muted }}>
			{text && <span css={{ verticalAlign: 'middle' }}>{text}</span>}
			{Icon && <Icon size="medium" css={{ marginLeft: '1.2rem' }} />}
		</div>
	);
};

// ==============================
// Types™
// ==============================

FormPodIndicator.propTypes = {
	/**
	 * Indicator icon.
	 */
	icon: PropTypes.func.isRequired,

	/**
	 * Indicator text.
	 *
	 * Defaults to "Saving"
	 */
	text: PropTypes.string.isRequired,
};

FormPodIndicator.defaultProps = {
	text: 'Saving',
};
