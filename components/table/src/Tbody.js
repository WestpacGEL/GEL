/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import PropTypes from 'prop-types';

import { TableBody, tbodyStyles } from './overrides/tbody';
import pkg from '../package.json';

// ==============================
// Component
// ==============================
export const Tbody = ({ overrides: componentOverrides, ...props }) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		subComponent: {
			Tbody: {
				styles: tbodyStyles,
				component: TableBody,
				attributes: state => state,
			},
		},
	};

	const state = {
		overrides: componentOverrides,
		...props,
	};

	const overrides = overrideReconciler(
		defaultOverrides,
		tokenOverrides,
		brandOverrides,
		componentOverrides,
		state
	);

	return (
		<overrides.subComponent.Tbody.component
			css={overrides.subComponent.Tbody.styles}
			{...overrides.subComponent.Tbody.attributes(state)}
		/>
	);
};

Tbody.propTypes = {
	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		subComponent: PropTypes.shape({
			Tbody: PropTypes.shape({
				styles: PropTypes.func,
				component: PropTypes.elementType,
				attributes: PropTypes.object,
			}),
		}),
	}),
};
