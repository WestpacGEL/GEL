/** @jsx jsx */

import React from 'react';
import PropTypes from 'prop-types';
import { jsx } from '@westpac/core';

// ==============================
// Component
// ==============================

export const AlertHeading = ({ tag: Tag, ...props }) => (
	<Tag css={{ marginTop: 0, marginBottom: '0.75rem' }} {...props} />
);

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
