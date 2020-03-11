/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import PropTypes from 'prop-types';

import { defaultContainer } from './overrides/container';
import pkg from '../package.json';

// ==============================
// Component
// ==============================
export const Container = ({ children, overrides: componentOverrides, ...rest }) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		Container: defaultContainer,
	};

	const state = {
		overrides: componentOverrides,
		...rest,
	};

	const {
		Container: { component: Container, styles: containerStyles, attributes: containerAttributes },
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	return (
		<Container
			{...rest}
			state={state}
			{...containerAttributes(state)}
			css={containerStyles(state)}
			children={children}
		/>
	);
};

Container.propTypes = {
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

Container.defaultProps = {};
