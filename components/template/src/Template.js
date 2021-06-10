/** @jsx jsx */

import { jsx } from '@westpac/core';
import PropTypes from 'prop-types';

// ==============================
// Utils
// ==============================

// ==============================
// Component
// ==============================

/**
 * Template: Westpac GEL template component
 */
export const Template = ({ ...props }) => {
	return (
		<div css={{}} {...props}>
			Template
		</div>
	);
};

// ==============================
// Types
// ==============================

Template.propTypes = {
	/**
	 * Describe `someProperty` here
	 */
	someProperty: PropTypes.string,
};

Template.defaultProps = {};
