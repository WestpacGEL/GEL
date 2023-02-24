import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import PropTypes from 'prop-types';

import { defaultTextInput } from './overrides/textInput';
import pkg from '../package.json';
import React, { ReactNode } from 'react';

export interface TextInputProps {
	/**
	 * Component size
	 */
	size: 'small' | 'medium' | 'large' | 'xlarge';

	/**
	 * Component width (in chars).
	 *
	 * This prop sets a fixed width, measured in characters.
	 */
	width?: 2 | 3 | 4 | 5 | 10 | 20 | 30;

	/**
	 * Inline mode
	 */
	inline: boolean;

	/**
	 * Invalid input mode
	 */
	invalid: boolean;

	/**
	 * ReactNode
	 */
	children: ReactNode;

	/**
	 * Type
	 */
	type?: string;

	/**
	 * The override API
	 */
	overrides?: {
		TextInput?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
	};
}

// ==============================
// Component
// ==============================

export const TextInput = ({
	width,
	children,
	overrides: componentOverrides,
	size = 'medium',
	inline = false,
	invalid = false,
	type = 'text',
	...rest
}: TextInputProps) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		TextInput: defaultTextInput,
	};

	const state = {
		size,
		width,
		inline,
		invalid,
		overrides: componentOverrides,
		...rest,
	};

	const {
		TextInput: { component: TextInput, styles: textInputStyles, attributes: textInputAttributes },
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	return (
		<TextInput
			{...rest}
			state={state}
			{...textInputAttributes(state)}
			css={textInputStyles(state)}
		/>
	);
};

// ==============================
// Types
// ==============================

TextInput.propTypes = {
	// ----------------------------- Warning --------------------------------
	// | These PropTypes are generated from the TypeScript type definitions |
	// |     To update them edit TypeScript types and run "yarn proptypes"  |
	// ----------------------------------------------------------------------
	/**
	 * ReactNode
	 */
	children: PropTypes.node,
	/**
	 * Inline mode
	 */
	inline: PropTypes.bool.isRequired,
	/**
	 * Invalid input mode
	 */
	invalid: PropTypes.bool.isRequired,
	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		TextInput: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
	}),
	/**
	 * Component size
	 */
	size: PropTypes.oneOf(['large', 'medium', 'small', 'xlarge']).isRequired,
	/**
	 * Type
	 */
	type: PropTypes.string,
	/**
	 * Component width (in chars).
	 *
	 * This prop sets a fixed width, measured in characters.
	 */
	width: PropTypes.oneOf([2, 3, 4, 5, 10, 20, 30]),
};

TextInput.defaultProps = { inline: false, invalid: false, size: 'medium', type: 'text' };
