/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import { Wrapper, wrapperStyles } from './overrides/wrapper';
import PropTypes from 'prop-types';
import pkg from '../package.json';

// ==============================
// Component
// ==============================

export const Well = ({ overrides: componentOverrides, ...props }) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		styles: wrapperStyles,
		component: Wrapper,
		attributes: state => state,
	};

	const state = { ...props };

	const overrides = overrideReconciler(
		defaultOverrides,
		tokenOverrides,
		brandOverrides,
		componentOverrides,
		state
	);

	return <overrides.component css={overrides.styles} {...overrides.attributes(state)} />;
};

// ==============================
// Types
// ==============================

Well.propTypes = {
	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		styles: PropTypes.func,
		component: PropTypes.elementType,
		attributes: PropTypes.object,
	}),
};

Well.defaultProps = {};
