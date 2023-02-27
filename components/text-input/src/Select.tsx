import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useBrand, overrideReconciler } from '@westpac/core';

import { defaultSelect } from './overrides/select';
import pkg from '../package.json';

export interface SelectProps {
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
	 * Data drive this component
	 */
	data?: {
		text: string;
	}[];
	/**
	 * Component children.
	 *
	 * Note: Only `select` type inputs render children.
	 */
	children?: React.ReactNode;
	/**
	 * The override API
	 */
	overrides?: {
		Select?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
	};
}

// ==============================
// Component
// ==============================

export const Select = ({
	size = 'medium',
	inline = false,
	invalid = false,
	width,
	data,
	children,
	overrides: componentOverrides,
	...rest
}: SelectProps) => {
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

Select.propTypes = {
	// ----------------------------- Warning --------------------------------
	// | These PropTypes are generated from the TypeScript type definitions |
	// |     To update them edit TypeScript types and run "yarn prop-types"  |
	// ----------------------------------------------------------------------
	/**
	 * Component children.
	 *
	 * Note: Only `select` type inputs render children.
	 */
	children: PropTypes.node,
	/**
	 * Data drive this component
	 */
	data: PropTypes.arrayOf(
		PropTypes.shape({
			text: PropTypes.string.isRequired,
		})
	),
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
		Select: PropTypes.shape({
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
	 * Component width (in chars).
	 *
	 * This prop sets a fixed width, measured in characters.
	 */
	width: PropTypes.oneOf([2, 3, 4, 5, 10, 20, 30]),
};

Select.defaultProps = { inline: false, invalid: false, size: 'medium' };
