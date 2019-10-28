/** @jsx jsx */

import { jsx } from '@westpac/core';
import PropTypes from 'prop-types';
import { Label } from './Label';
import { Button } from './Button';
import { Select } from './Select';

// ==============================
// Component
// ==============================

export const Left = ({ type, ...props }) => {
	const componentMap = {
		label: Label,
		button: Button,
		select: Select,
	};
	const Component = componentMap[type];

	return <Component position="left" {...props} />;
};

// ==============================
// Types
// ==============================

Left.propTypes = {
	/**
	 * What type this component is
	 */
	type: PropTypes.oneOf(['label', 'button', 'select']).isRequired,

	/**
	 * What size the button-group is
	 */
	size: PropTypes.oneOf(['small', 'medium', 'large', 'xlarge']).isRequired,
};

Left.defaultProps = {
	size: 'medium',
};
