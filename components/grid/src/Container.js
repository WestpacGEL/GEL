/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import PropTypes from 'prop-types';

import { Container as ContainerWrapper, containerStyles } from './overrides/container';
import pkg from '../package.json';

// ==============================
// Component
// ==============================

export const Container = ({ overrides: componentOverrides, ...rest }) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		subComponent: {
			Container: {
				styles: containerStyles,
				component: ContainerWrapper,
				attributes: state => state,
			},
		},
	};

	const state = {
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
		<overrides.subComponent.Container.component
			css={overrides.subComponent.Container.styles}
			{...overrides.subComponent.Container.attributes(state)}
		/>
	);
};

Container.propTypes = {
	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		subComponent: PropTypes.shape({
			Container: PropTypes.shape({
				styles: PropTypes.func,
				component: PropTypes.elementType,
				attributes: PropTypes.object,
			}),
		}),
	}),
};

Container.defaultProps = {};
