/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import { TextareaComponent, textareaStyles } from './overrides/textarea';
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
	overrides: componentOverrides,
	children,
	...rest
}) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		subComponent: {
			Textarea: {
				styles: textareaStyles,
				component: TextareaComponent,
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
		...rest,
	};

	const overrides = overrideReconciler(
		defaultOverrides,
		tokenOverrides,
		brandOverrides,
		componentOverrides,
		state
	);

	return (
		<overrides.subComponent.Textarea.component
			{...overrides.subComponent.Textarea.attributes(state)}
			css={overrides.subComponent.Textarea.styles}
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
		subComponent: PropTypes.shape({
			Textarea: PropTypes.shape({
				styles: PropTypes.func,
				component: PropTypes.elementType,
				attributes: PropTypes.object,
			}),
		}),
	}),
};

Textarea.defaultProps = {
	size: 'medium',
	inline: false,
	invalid: false,
};
