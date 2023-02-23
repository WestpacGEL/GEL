import React from 'react';
import PropTypes from 'prop-types';
import { jsx } from '@westpac/core';

import { Button } from './Button';
import { SelectField } from './SelectField';
import { Text } from './Text';

export interface BeforeProps {
	/**
	 * Disable all Form check options
	 */
	disabled?: boolean;
	/**
	 * The look of the component
	 */
	look?: 'primary' | 'hero' | 'faint';
	/**
	 * Define an id for internal elements
	 */
	instanceId?: string;
	/**
	 * What input type this component is
	 */
	inputType: 'text' | 'button' | 'select';
	/**
	 * What size the button-group is
	 */
	size: 'small' | 'medium' | 'large' | 'xlarge';
	/**
	 * The override API
	 */
	overrides?: Record<
		string,
		{
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		}
	>;
}

// ==============================
// Component
// ==============================

export const Before = ({
	inputType,
	overrides: componentOverrides,
	size = 'medium',
	...rest
}: BeforeProps) => {
	const componentMap = {
		text: Text,
		button: Button,
		select: SelectField,
	};
	const Component = componentMap[inputType];

	return <Component position="before" overrides={componentOverrides} size={size} {...rest} />;
};

Before.displayName = 'Before';

Before.propTypes = {
	// ----------------------------- Warning --------------------------------
	// | These PropTypes are generated from the TypeScript type definitions |
	// |     To update them edit TypeScript types and run "yarn proptypes"  |
	// ----------------------------------------------------------------------
	/**
	 * What input type this component is
	 */
	inputType: PropTypes.oneOf(['button', 'select', 'text']).isRequired,
	/**
	 * The override API
	 */
	overrides: PropTypes.object,
	/**
	 * What size the button-group is
	 */
	size: PropTypes.oneOf(['large', 'medium', 'small', 'xlarge']).isRequired,
};

Before.defaultProps = { size: 'medium' };
