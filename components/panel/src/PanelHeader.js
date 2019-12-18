/** @jsx jsx */

import { jsx, useBrand, overrideReconciler, merge } from '@westpac/core';
import PropTypes from 'prop-types';

import { Header, headerStyles } from './overrides/header';
import { usePanelContext } from './Panel';
import pkg from '../package.json';

// ==============================
// Component
// ==============================

export const PanelHeader = ({ overrides: componentOverrides, ...rest }) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		subComponent: {
			Header: {
				styles: headerStyles,
				component: Header,
				attributes: state => state,
			},
		},
	};

	const { overrides: overridesCtx, ...context } = usePanelContext();

	const state = {
		overrides: componentOverrides,
		...context,
		...rest,
	};

	const overrides = overrideReconciler(
		defaultOverrides,
		tokenOverrides,
		brandOverrides,
		merge(componentOverrides, overridesCtx),
		state
	);

	return (
		<overrides.subComponent.Header.component
			css={overrides.subComponent.Header.styles}
			{...overrides.subComponent.Header.attributes(state)}
		/>
	);
};

// ==============================
// Types
// ==============================

PanelHeader.propTypes = {
	/**
	 * Panel body content
	 */
	children: PropTypes.node,

	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		subComponent: PropTypes.shape({
			Header: PropTypes.shape({
				styles: PropTypes.func,
				component: PropTypes.elementType,
				attributes: PropTypes.object,
			}),
		}),
	}),
};
