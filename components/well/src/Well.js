/** @jsx jsx */

import { jsx, useBrand, overrideReconciler2 as overrideReconciler } from '@westpac/core';
import PropTypes from 'prop-types';

import { Well as WellWrapper, wellStyles } from './overrides/well';
import pkg from '../package.json';

// ==============================
// Component
// ==============================

export const Well = ({ overrides: componentOverrides, ...rest }) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		Well: {
			styles: wellStyles,
			component: WellWrapper,
			attributes: (_, a) => a,
		},
	};

	const state = { overrides: componentOverrides, ...rest };

	const overrides = overrideReconciler(
		defaultOverrides,
		tokenOverrides,
		brandOverrides,
		componentOverrides
	);

	return <overrides.Well.component {...overrides.Well.attributes(state)} css={overrides.Well.styles(state)} />;
};

// ==============================
// Types
// ==============================

Well.propTypes = {
	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		Well: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
	}),
};

Well.defaultProps = {};
