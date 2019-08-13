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

/**
 * List Group: List groups are a flexible and powerful component for displaying not only simple lists of elements, but complex ones with custom content. Ideal for settings pages or preferences.
 */
export const ListGroup = ({ ...props }) => {
	return (
		<div css={{}} {...props}>
			ListGroup
		</div>
	);
};

// ==============================
// Types
// ==============================

ListGroup.propTypes = {
	/**
	 * Describe `someProperty` here
	 */
	someProperty: PropTypes.string,
};

ListGroup.defaultProps = {};
