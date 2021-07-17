/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import PropTypes from 'prop-types';

import { defaultMain } from './overrides/main';
import pkg from '../package.json';

// ==============================
// Component
// ==============================

export const Main = ({ children, overrides: componentOverrides, ...rest }) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		Main: defaultMain,
	};

	const state = {
		overrides: componentOverrides,
		...rest,
	};

	const {
		Main: { component: Main, styles: mainStyles, attributes: mainAttributes },
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	return (
		<Main {...rest} state={state} {...mainAttributes(state)} css={mainStyles(state)}>
			{children}
		</Main>
	);
};

// ==============================
// Types
// ==============================

Main.propTypes = {
	/**
	 * Describe `someProperty` here
	 */
	someProperty: PropTypes.string,
};

Main.defaultProps = {};
