/** @jsx jsx */

import { jsx, useBrand, useMediaQuery, overrideReconciler } from '@westpac/core';
import { SelectComponent, selectStyles } from './overrides/select';
import PropTypes from 'prop-types';
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
}) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const mq = useMediaQuery();

	const childrenData = [];
	if (data) {
		data.map(({ label, ...rest }, index) => {
			childrenData.push(
				<option key={index} {...rest}>
					{label}
				</option>
			);
		});
	}

	const defaultOverrides = {
		Select: {
			styles: selectStyles,
			component: SelectComponent,
			attributes: () => null,
		},
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

	const overrides = overrideReconciler(
		defaultOverrides,
		tokenOverrides,
		brandOverrides,
		componentOverrides
	);

	return (
		<overrides.Select.component
			size={size}
			width={width}
			inline={inline}
			invalid={invalid}
			data={data}
			{...rest}
			{...overrides.Select.attributes(state)}
			css={overrides.Select.styles(state)}
		>
			{data ? childrenData : children}
		</overrides.Select.component>
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
			label: PropTypes.string.isRequired,
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

Select.defaultProps = {
	size: 'medium',
	inline: false,
	invalid: false,
};
