/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import PropTypes from 'prop-types';

import { defaultTextInput } from './overrides/textInput';
import pkg from '../package.json';

// ==============================
// Component
// ==============================

export const TextInput = ({
	size,
	width,
	inline,
	invalid,
	children,
	overrides: componentOverrides,
	...rest
}) => {
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

export const propTypes = {
	/**
	 * Component size
	 */
	size: PropTypes.oneOf(['small', 'medium', 'large', 'xlarge']).isRequired,

	/**
	 * Component width (in chars).
	 *
	 * This prop sets a fixed width, measured in characters.
	 */
	width: PropTypes.oneOf([2, 3, 4, 5, 10, 20, 30]),

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
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
	}),
};
TextInput.propTypes = propTypes;

export const defaultProps = {
	size: 'medium',
	inline: false,
	invalid: false,
	type: 'text',
};

TextInput.defaultProps = defaultProps;
