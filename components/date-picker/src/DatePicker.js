/** @jsx jsx */

import { jsx } from '@westpac/core';
import PropTypes from 'prop-types';

// ==============================
// Component
// ==============================

export const DatePicker = ({ ...props }) => {
	return (
		<div css={{}} {...props}>
			DatePicker
		</div>
	);
};

// ==============================
// Types
// ==============================

DatePicker.propTypes = {
	/**
	 * Describe `someProperty` here
	 */
	someProperty: PropTypes.string,
};

DatePicker.defaultProps = {};
