import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useBrand, overrideReconciler } from '@westpac/core';

import { defaultText } from './overrides/text';

import { useInputGroupContext } from './InputGroup';
import pkg from '../package.json';

export interface TextProps {
	/**
	 * Define an id for internal elements
	 */
	instanceId?: string;
	/**
	 * What position this component is at
	 * note: 'none' is only for blender use
	 */
	position: 'before' | 'after' | 'none';
	/**
	 * What size the button-group is
	 */
	size: 'small' | 'medium' | 'large' | 'xlarge';
	/**
	 * The content of the component
	 */
	data: string;
	/**
	 * The override API
	 */
	overrides?: {
		Text?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
	};
}

// ==============================
// Component
// ==============================

export const Text = ({
	instanceId,
	position,
	size = 'medium',
	data,
	overrides,
	...rest
}: TextProps) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const context = useInputGroupContext();

	const defaultOverrides = {
		Text: defaultText,
	};

	const componentOverrides = overrides || context.state.overrides;

	const state = {
		position,
		size,
		data,
		context: context.state,
		overrides: componentOverrides,
		...rest,
	};

	const {
		Text: { component: Text, styles: textStyles, attributes: textAttributes },
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	return (
		<Text {...rest} state={state} {...textAttributes(state)} css={textStyles(state)}>
			{data}
		</Text>
	);
};

Text.propTypes = {
	// ----------------------------- Warning --------------------------------
	// | These PropTypes are generated from the TypeScript type definitions |
	// |     To update them edit TypeScript types and run "yarn prop-types"  |
	// ----------------------------------------------------------------------
	/**
	 * The content of the component
	 */
	data: PropTypes.string.isRequired,
	/**
	 * Define an id for internal elements
	 */
	instanceId: PropTypes.string,
	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		Text: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
	}),
	/**
	 * What position this component is at
	 * note: 'none' is only for blender use
	 */
	position: PropTypes.oneOf(['after', 'before', 'none']).isRequired,
	/**
	 * What size the button-group is
	 */
	size: PropTypes.oneOf(['large', 'medium', 'small', 'xlarge']).isRequired,
};

Text.defaultProps = { size: 'medium' };
