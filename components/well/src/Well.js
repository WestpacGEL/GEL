/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import PropTypes from 'prop-types';

import { defaultWell } from './overrides/well';
import pkg from '../package.json';

// ==============================
// Component
// ==============================
export const Well = ({ tag, children, overrides: componentOverrides, ...rest }) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		WellRoot: defaultWell,
	};

	const state = {
		tag,
		overrides: componentOverrides,
		...rest,
	};

	const {
		WellRoot: { component: WellRoot, styles: wellRootStyles, attributes: wellRootAttributes },
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	return (
		<WellRoot {...rest} state={state} {...wellRootAttributes(state)} css={wellRootStyles(state)}>
			{children}
		</WellRoot>
	);
};

// ==============================
// Types
// ==============================

Well.propTypes = {
	/**
	 * Component tag
	 */
	tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]).isRequired,

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

Well.defaultProps = {
	tag: 'div',
};
