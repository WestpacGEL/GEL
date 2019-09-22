/** @jsx jsx */

import React from 'react';
import PropTypes from 'prop-types';
import { jsx } from '@westpac/core';

// ==============================
// Component
// ==============================

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

Template.propTypes = {};

Template.defaultProps = {};
