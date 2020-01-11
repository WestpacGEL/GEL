/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import PropTypes from 'prop-types';

import { Wrapper, wrapperStyles } from './overrides/wrapper';
import pkg from '../package.json';

// ==============================
// Component
// ==============================

/**
 * Heading: Headlines for your page needs
 */
export const Heading = ({ tag: Tag, size, children, overrides: componentOverrides, ...rest }) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		styles: wrapperStyles,
		component: Wrapper,
		attributes: state => state,
	};

	const state = {
		tag: Tag,
		size,
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
		<overrides.component {...overrides.attributes(state)} css={overrides.styles}>
			{children}
		</overrides.component>
	);
};

// ==============================
// Types
// ==============================

Heading.propTypes = {
	/**
	 * Component tag
	 */
	tag: PropTypes.oneOfType([PropTypes.func, PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6'])]),

	/**
	 * The visual size of the headline
	 */
	size: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9]).isRequired,

	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		styles: PropTypes.func,
		component: PropTypes.elementType,
		attributes: PropTypes.object,
	}),
};

Heading.defaultProps = {};
