import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useBrand, overrideReconciler } from '@westpac/core';

import { defaultForkContent } from './overrides/forkContent';
import { useForkContext } from './Fork';
import pkg from '../package.json';
import { ReactNode } from 'react';

interface ForkContentProps {
	/**
	 * Fork button-group item name
	 */
	text: string;
	/**
	 * Whether this content is selected and visible
	 */
	selected?: boolean;
	/**
	 * Children
	 */
	children?: ReactNode;
	/**
	 * The override API
	 */
	overrides?: {
		ForkContent?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
	};
}

// ==============================
// Component
// ==============================

export const ForkContent = ({ text, selected, children, overrides, ...rest }: ForkContentProps) => {
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
		<ForkContent
			{...rest}
			state={state}
			{...forkContentAttributes(state)}
			css={forkContentStyles(state)}
		>
			{children}
		</ForkContent>
	);
};

ForkContent.defaultProps = {};

ForkContent.propTypes = {
	// ----------------------------- Warning --------------------------------
	// | These PropTypes are generated from the TypeScript type definitions |
	// |     To update them edit TypeScript types and run "yarn proptypes"  |
	// ----------------------------------------------------------------------
	/**
	 * Children
	 */
	children: PropTypes.node,
	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		ForkContent: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
	}),
	/**
	 * Whether this content is selected and visible
	 */
	selected: PropTypes.bool,
	/**
	 * Fork button-group item name
	 */
	text: PropTypes.string.isRequired,
};
