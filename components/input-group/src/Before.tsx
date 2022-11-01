/** @jsx jsx */

import { jsx } from '@westpac/core';
import PropTypes from 'prop-types';

import { Button } from './Button';
import { SelectField } from './SelectField';
import { Text } from './Text';

// ==============================
// Component
// ==============================

export const Before = ({
	inputType,
	overrides: componentOverrides,
	...rest
}: typeof Before.propTypes & typeof Before.defaultProps) => {
	const componentMap = {
		text: Text,
		button: Button,
		select: SelectField,
	};
	const Component = componentMap[inputType];

	return <Component position="before" overrides={componentOverrides} {...rest} />;
};

// ==============================
// Types
// ==============================

Before.propTypes = {
	/**
	 * What input type this component is
	 */
	inputType: PropTypes.oneOf(['text', 'button', 'select']).isRequired,

	/**
	 * What size the button-group is
	 */
	size: PropTypes.oneOf(['small', 'medium', 'large', 'xlarge']).isRequired,
};

Before.defaultProps = {
	size: 'medium',
};

Before.displayName = 'Before';
