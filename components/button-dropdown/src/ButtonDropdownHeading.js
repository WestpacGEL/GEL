/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import PropTypes from 'prop-types';

import {
	ButtonDropdownHeading as ButtonDropdownHeadingWrapper,
	buttonDropdownHeadingStyles,
} from './overrides/heading';
import pkg from '../package.json';

// ==============================
// Component
// ==============================
export const ButtonDropdownHeading = ({
	tag,
	children,
	overrides: componentOverrides,
	...rest
}) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		ButtonDropdownHeading: {
			styles: buttonDropdownHeadingStyles,
			component: ButtonDropdownHeadingWrapper,
			attributes: () => null,
		},
	};

	const state = {
		tag,
		children,
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
		<overrides.ButtonDropdownHeading.component
			tag={tag}
			{...overrides.ButtonDropdownHeading.attributes(state)}
			css={overrides.ButtonDropdownHeading.styles(state)}
		>
			{children}
		</overrides.ButtonDropdownHeading.component>
	);
};

// ==============================
// Types
// ==============================
ButtonDropdownHeading.propTypes = {
	/**
	 * The tag of the heading element for semantic reasons
	 */
	tag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']).isRequired,

	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		ButtonDropdownHeading: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
	}),
};

ButtonDropdownHeading.defaultProps = {
	tag: 'h3',
};
