/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import { useTableContext } from './Table';
import PropTypes from 'prop-types';

import { defaultCaption } from './overrides/caption';
import pkg from '../package.json';

// ==============================
// Component
// ==============================

export const Caption = ({ children, overrides, ...rest }) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const context = useTableContext();

	const defaultOverrides = {
		Caption: defaultCaption,
	};

	const componentOverrides = overrides || context.state.overrides;

	const state = {
		context: { ...context.state },
		overrides,
		...rest,
	};

	const {
		Caption: { component: Caption, styles: CaptionStyles, attributes: CaptionAttributes },
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	return (
		<Caption {...rest} state={state} {...CaptionAttributes(state)} css={CaptionStyles(state)}>
			{children}
		</Caption>
	);
};

Caption.propTypes = {
	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		Caption: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
	}),
};
