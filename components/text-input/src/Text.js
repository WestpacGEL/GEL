/** @jsx jsx */

import { jsx, useBrand, overrideReconciler2 as overrideReconciler } from '@westpac/core';
import { TextComponent, textStyles } from './overrides/text';
import PropTypes from 'prop-types';
import pkg from '../package.json';

// ==============================
// Component
// ==============================
export const Text = ({
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
		Text: {
			styles: textStyles,
			component: TextComponent,
			attributes: (_, a) => a,
		},
	};

	const state = {
		size,
		width,
		inline,
		invalid,
		overrides: componentOverrides,
		...rest,
	};

	const overrides = overrideReconciler(
		defaultOverrides,
		tokenOverrides,
		brandOverrides,
		componentOverrides
	);

	return (
		<overrides.Text.component
			{...overrides.Text.attributes(state)}
			css={overrides.Text.styles(state)}
		/>
	);
};

// ==============================
// Types
// ==============================

Text.propTypes = {
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
		Text: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
	}),
};

Text.defaultProps = {
	size: 'medium',
	inline: false,
	invalid: false,
	type: 'text',
};
