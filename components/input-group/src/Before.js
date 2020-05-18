/** @jsx jsx */

import { jsx } from '@westpac/core';
import PropTypes from 'prop-types';

import { Button } from './Button';
import { SelectField } from './SelectField';
import { Text } from './Text';

// ==============================
// Component
// ==============================

export const Before = ({ type, overrides: componentOverrides, ...rest }) => {
	const componentMap = {
		text: Text,
		button: Button,
		select: SelectField,
	};
	const Component = componentMap[type];

	return <Component position="before" overrides={componentOverrides} {...rest} />;
};

// ==============================
// Types
// ==============================

Before.propTypes = {
	/**
	 * What type this component is
	 */
	type: PropTypes.oneOf(['text', 'button', 'select']).isRequired,

	/**
	 * What size the button-group is
	 */
	size: PropTypes.oneOf(['small', 'medium', 'large', 'xlarge']).isRequired,
};

Before.defaultProps = {
	size: 'medium',
};

Before.displayName = 'Before';
