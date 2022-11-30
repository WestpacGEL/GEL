/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import PropTypes from 'prop-types';

import { defaultContainer } from './overrides/container';
import pkg from '../package.json';

// ==============================
// Component
// ==============================

export const Container = ({ fixed, tag, children, overrides: componentOverrides, ...rest }) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		Container: defaultContainer,
	};

	const state = {
		fixed,
		tag,
		overrides: componentOverrides,
		...rest,
	};

	const {
		Container: { component: Container, styles: containerStyles, attributes: containerAttributes },
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	return (
		<Container {...rest} state={state} {...containerAttributes(state)} css={containerStyles(state)}>
			{children}
		</Container>
	);
};

// ==============================
// Types
// ==============================

Container.propTypes = {
	/**
	 * Enable fixed width container mode. In this mode the container width is fixed at each breakpoint.
	 */
	fixed: PropTypes.bool.isRequired,

	/**
	 * Component tag
	 */
	tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]).isRequired,

	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		Container: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
	}),
};

Container.defaultProps = {
	fixed: false,
	tag: 'div',
};
