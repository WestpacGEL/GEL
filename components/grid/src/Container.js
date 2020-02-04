/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import PropTypes from 'prop-types';

import { Container as ContainerWrapper, containerStyles } from './overrides/container';
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
		Container: {
			styles: containerStyles,
			component: ContainerWrapper,
			attributes: () => null,
		},
	};

	const state = {
		...rest,
	};

	const overrides = overrideReconciler(
		defaultOverrides,
		tokenOverrides,
		brandOverrides,
		componentOverrides
	);

	return (
		<overrides.Container.component
			children={children}
			{...overrides.Container.attributes(state)}
			css={overrides.Container.styles(state)}
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
