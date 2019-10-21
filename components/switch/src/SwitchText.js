/** @jsx jsx */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { VisuallyHidden } from '@westpac/a11y';
import { jsx, useTheme } from '@westpac/core';

// ==============================
// Utils
// ==============================

// ==============================
// Component
// ==============================

/**
 * Switch: Switch component for the Westpac GEL
 */
export const SwitchText = ({ srOnlyText, children }) => {
	return (
		<span
			css={{
				whiteSpace: 'normal',
				position: 'relative',
				paddingRight: '6px',
			}}
		>
			{srOnlyText ? <VisuallyHidden>children</VisuallyHidden> : children}
		</span>
	);
};

// ==============================
// Types
// ==============================

SwitchText.propTypes = {
	/**
	 * Describe `someProperty` here
	 */
	someProperty: PropTypes.string,
};

SwitchText.defaultProps = {};
