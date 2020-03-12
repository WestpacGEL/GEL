/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import { useButtonDropdownContext } from './ButtonDropdown';
import PropTypes from 'prop-types';

import { defaultHeading } from './overrides/heading';
import pkg from '../package.json';

// ==============================
// Component
// ==============================

export const ButtonDropdownHeading = ({ tag, children, overrides, ...rest }) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const context = useButtonDropdownContext();

	const defaultOverrides = {
		Heading: defaultHeading,
	};

	const componentOverrides = overrides || context.state.overrides;

	const state = {
		tag,
		children,
		context: context.state,
		overrides: componentOverrides,
		...rest,
	};

	const {
		Heading: { component: Heading, styles: headingStyles, attributes: headingAttributes },
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	return (
		<Heading state={state} {...headingAttributes(state)} css={headingStyles(state)}>
			{children}
		</Heading>
	);
};

// ==============================
// Types
// ==============================
ButtonDropdownHeading.propTypes = {
	/**
	 * The tag of the heading element for semantic reasons
	 */
	tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]).isRequired,

	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		Heading: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
	}),
};

ButtonDropdownHeading.defaultProps = {
	tag: 'h3',
};
