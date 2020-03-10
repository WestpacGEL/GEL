/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import { defaultTextarea } from './overrides/textarea';
import PropTypes from 'prop-types';
import pkg from '../package.json';

// ==============================
// Component
// ==============================

export const Textarea = ({
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
		TextareaRoot: defaultTextarea,
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
		TextareaRoot: {
			component: TextareaRoot,
			styles: textareaRootStyles,
			attributes: textareaRootAttributes,
		},
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	return (
		<TextareaRoot
			{...rest}
			state={state}
			{...textareaRootAttributes(state)}
			css={textareaRootStyles(state)}
		/>
	);
};

// ==============================
// Types
// ==============================

Textarea.propTypes = {
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
		Textarea: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
	}),
};

Textarea.defaultProps = {
	size: 'medium',
	inline: false,
	invalid: false,
};
