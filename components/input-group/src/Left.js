/** @jsx jsx */

import { jsx } from '@westpac/core';
import PropTypes from 'prop-types';

import { Button } from './Button';
import { SelectField } from './SelectField';
import { Text } from './Text';

// ==============================
// Component
// ==============================

export const Left = ({ type, instanceId, overrides: componentOverrides, ...rest }) => {
	const componentMap = {
		text: Text,
		button: Button,
		select: SelectField,
	};
	const Component = componentMap[type];

	return (
		<Component instanceId={instanceId} position="left" overrides={componentOverrides} {...rest} />
	);
};

// ==============================
// Types
// ==============================

Left.propTypes = {
	/**
	 * What type this component is
	 */
	type: PropTypes.oneOf(['text', 'button', 'select']).isRequired,

	/**
	 * The instance ID for the label and add-on
	 */
	instanceId: PropTypes.string.isRequired,

	/**
	 * What size the button-group is
	 */
	size: PropTypes.oneOf(['small', 'medium', 'large', 'xlarge']).isRequired,
};

Left.defaultProps = {
	size: 'medium',
};

Left.displayName = 'Left';
