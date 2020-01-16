/** @jsx jsx */

import { jsx, useBrand, overrideReconciler, mergeWith } from '@westpac/core';
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
		Header: {
			styles: headerStyles,
			component: Header,
			attributes: (_, a) => a,
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
		mergeWith(componentOverrides, overridesCtx)
	);

	return (
		<overrides.Header.component
			{...overrides.Header.attributes(state)}
			css={overrides.Header.styles(state)}
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
		Header: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
	}),
};
