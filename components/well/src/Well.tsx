/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import PropTypes from 'prop-types';

import { defaultWell } from './overrides/well';
import pkg from '../package.json';

// ==============================
// Component
// ==============================

export const Well = ({
	tag,
	children,
	overrides: componentOverrides,
	...rest
}: typeof Well.propTypes & typeof Well.defaultProps) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		Well: defaultWell,
	};

	const state = {
		tag,
		overrides: componentOverrides,
		...rest,
	};

	const {
		Well: { component: Well, styles: wellStyles, attributes: wellAttributes },
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	return (
		<Well {...rest} state={state} {...wellAttributes(state)} css={wellStyles(state)}>
			{children}
		</Well>
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
