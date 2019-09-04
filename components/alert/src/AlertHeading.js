/** @jsx jsx */

import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme } from '@westpac/core';

// ==============================
// Component
// ==============================

export const AlertHeading = ({ tag: Tag, ...props }) => {
	const {
		alert: { heading },
	} = useTheme();

	return <Tag css={{ marginTop: 0, ...heading }} {...props} />;
};

// ==============================
// Types
// ==============================

AlertHeading.propTypes = {
	/**
	 * Component tag
	 */
	tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

AlertHeading.defaultProps = {
	tag: 'h3',
};
