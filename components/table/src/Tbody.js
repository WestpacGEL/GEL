/** @jsx jsx */

import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useBrand } from '@westpac/core';

// ==============================
// Component
// ==============================

export const Tbody = ({ ...props }) => {
	const { COLORS, TYPE } = useBrand();

	return <tbody css={{}} {...props} />;
};

// ==============================
// Types
// ==============================
