/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import PropTypes from 'prop-types';

import { defaultSelect } from './overrides/select';
import pkg from '../package.json';

// ==============================
// Component
// ==============================

export const Select = ({
	size,
	width,
	inline,
	invalid,
	data,
	children,
	overrides: componentOverrides,
	...rest
}: typeof Select.propTypes & typeof Select.defaultProps) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		Select: defaultSelect,
	};

	const state = {
		size,
		width,
		inline,
		invalid,
		data,
		overrides: componentOverrides,
		...rest,
	};

	const {
		Select: { component: Select, styles: selectStyles, attributes: selectAttributes },
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	let allChildren = [];
	if (data) {
		data.map(({ text, ...rest }, index) => {
			allChildren.push(
				<option key={index} {...rest}>
					{text}
				</option>
			);
		});
	} else {
		allChildren = children;
	}

	return (
		<Select {...rest} state={state} {...selectAttributes(state)} css={selectStyles(state)}>
			{allChildren}
		</Select>
	);
};

// ==============================
// Types
// ==============================

Select.propTypes = {
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
	 * Data drive this component
	 */
	data: PropTypes.arrayOf(
		PropTypes.shape({
			text: PropTypes.string.isRequired,
		})
	),

	/**
	 * Component children.
	 *
	 * Note: Only `select` type inputs render children.
	 */
	children: PropTypes.node,

	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		Select: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
	}),
};

export const defaultProps = {
	size: 'medium',
	inline: false,
	invalid: false,
};

Select.defaultProps = defaultProps;
