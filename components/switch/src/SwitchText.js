/** @jsx jsx */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { VisuallyHidden } from '@westpac/a11y';
import { jsx } from '@westpac/core';

// ==============================
// Utils
// ==============================

// ==============================
// Component
// ==============================

/**
 * Switch: Switch component for the Westpac GEL
 */
export const SwitchText = ({ srOnlyText, flipped, block, children }) => {
	return (
		<span
			css={{
				flex: block && 1,
				display: 'flex',
				alignItems: 'center',
				whiteSpace: 'normal',
				position: 'relative',
				...(flipped ? { paddingLeft: '0.375rem' } : { paddingRight: '0.375rem' }),
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
