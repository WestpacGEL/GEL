/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import PropTypes from 'prop-types';

import { defaultTBody } from './overrides/tbody';
import pkg from '../package.json';

// ==============================
// Component
// ==============================
export const Tbody = ({ children, overrides: componentOverrides, ...rest }) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		TbodyRoot: defaultTBody,
	};

	const state = {
		overrides: componentOverrides,
		...rest,
	};

	const {
		TbodyRoot: { component: TbodyRoot, styles: tbodyRootStyles, attributes: tbodyRootAttributes },
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	return (
		<TbodyRoot {...rest} state={state} {...tbodyRootAttributes(state)} css={tbodyRootStyles(state)}>
			{children}
		</TbodyRoot>
	);
};

Tbody.propTypes = {
	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		Tbody: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
	}),
};
