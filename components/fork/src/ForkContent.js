/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import PropTypes from 'prop-types';

import { defaultForkContent } from './overrides/forkContent';
import { useForkContext } from './Fork';
import pkg from '../package.json';

// ==============================
// Component
// ==============================

export const ForkContent = ({ text, selected, children, overrides, ...rest }) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const context = useForkContext();

	const defaultOverrides = {
		ForkContent: defaultForkContent,
	};

	const componentOverrides = overrides || context.state.overrides;

	const state = {
		text,
		selected,
		overrides: componentOverrides,
		...rest,
	};

	const {
		ForkContent: {
			component: ForkContent,
			styles: forkContentStyles,
			attributes: forkContentAttributes,
		},
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	return (
		<ForkContent state={state} {...forkContentAttributes(state)} css={forkContentStyles(state)}>
			{children}
		</ForkContent>
	);
};

// ==============================
// Types
// ==============================

ForkContent.propTypes = {
	/**
	 * Fork button-group item name
	 */
	text: PropTypes.string.isRequired,

	/**
	 * Whether this content is selected and visible
	 */

	selected: PropTypes.bool,

	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		ForkContent: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
	}),
};

ForkContent.defaultProps = {};
