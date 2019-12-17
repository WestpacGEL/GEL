/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
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
	overrides: componentOverrides,
	children,
	...props
}) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		subComponent: {
			Text: {
				styles: textStyles,
				component: TextComponent,
				attributes: state => state,
			},
		},
	};

	const state = {
		size,
		width,
		inline,
		invalid,
		overrides: componentOverrides,
		...props,
	};

	const overrides = overrideReconciler(
		defaultOverrides,
		tokenOverrides,
		brandOverrides,
		componentOverrides,
		state
	);

	return (
		<overrides.subComponent.Text.component
			css={overrides.subComponent.Text.styles}
			{...overrides.subComponent.Text.attributes(state)}
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
		subComponent: PropTypes.shape({
			Text: PropTypes.shape({
				styles: PropTypes.func,
				component: PropTypes.elementType,
				attributes: PropTypes.object,
			}),
		}),
	}),
};

Text.defaultProps = {
	size: 'medium',
	inline: false,
	invalid: false,
	type: 'text',
};
