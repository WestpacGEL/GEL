/** @jsx jsx */

import { jsx } from '@westpac/core';
import PropTypes from 'prop-types';

import { Button } from './Button';
import { Select } from './Select';
import { Label } from './Label';

// ==============================
// Component
// ==============================
export const Left = ({ type, overrides: componentOverrides, ...rest }) => {
	const componentMap = {
		label: Label,
		button: Button,
		select: Select,
	};
	const Component = componentMap[type];

	return <Component position="left" overrides={componentOverrides} {...rest} />;
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
