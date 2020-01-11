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
	children,
	data,
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
		subComponent: {
			Select: {
				styles: selectStyles,
				component: SelectComponent,
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
		<overrides.subComponent.Select.component
			{...overrides.subComponent.Select.attributes(state)}
			css={overrides.subComponent.Select.styles}
		>
			{data ? childrenData : children}
		</overrides.subComponent.Select.component>
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
	 * Component children.
	 *
	 * Note: Only `select` type inputs render children.
	 */
	children: PropTypes.node,

	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		subComponent: PropTypes.shape({
			Select: PropTypes.shape({
				styles: PropTypes.func,
				component: PropTypes.elementType,
				attributes: PropTypes.object,
			}),
		}),
	}),
};

Select.defaultProps = {
	size: 'medium',
	inline: false,
	invalid: false,
};
