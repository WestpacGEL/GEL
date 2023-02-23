import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useBrand, overrideReconciler } from '@westpac/core';

import { defaultPage } from './overrides/page';
import { defaultLink } from './overrides/link';

import { usePaginationContext } from './Pagination';
import pkg from '../package.json';

export interface PageProps {
	/**
	 * Index of page
	 */
	index?: number;
	/**
	 * Index of next page
	 */
	nextIndex?: number;
	/**
	 * Page text
	 */
	text?: string;
	/**
	 * Indicates first item in list which is the back button
	 */
	first?: boolean;
	/**
	 * Indicates first item in list which is the next button
	 */
	last?: boolean;
	/**
	 * If page is disabled
	 */
	disabled?: boolean;
	/**
	 * Text to use as the `aria-label` for the page
	 */
	assistiveText?: string;
	/**
	 * An on click function
	 */
	onClick?: (...args: unknown[]) => unknown;
	/**
	 * The override API
	 */
	overrides?: {
		Pagination?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
		Page?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
		Link?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
	};
}

// ==============================
// Component
// ==============================

export const Page = ({
	index,
	nextIndex,
	text,
	first,
	last,
	disabled = false,
	assistiveText,
	onClick,
	overrides,
	...rest
}: PageProps) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const { current, ...context } = usePaginationContext();
	const active = index === current;

	const defaultOverrides = {
		Page: defaultPage,
		Link: defaultLink,
	};

	const componentOverrides = overrides || context.state.overrides;

	const state = {
		index,
		nextIndex,
		text,
		first,
		last,
		disabled,
		assistiveText,
		onClick,
		current,
		active,
		context: context.state,
		overrides: componentOverrides,
		...rest,
	};

	const {
		Page: { component: Page, styles: pageStyles, attributes: pageAttributes },
		Link: { component: Link, styles: linkStyles, attributes: linkAttributes },
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	return (
		<Page {...rest} state={state} {...pageAttributes(state)} css={pageStyles(state)}>
			<Link onClick={onClick} state={state} {...linkAttributes(state)} css={linkStyles(state)}>
				{text}
			</Link>
		</Page>
	);
};

Page.propTypes = {
	// ----------------------------- Warning --------------------------------
	// | These PropTypes are generated from the TypeScript type definitions |
	// |     To update them edit TypeScript types and run "yarn proptypes"  |
	// ----------------------------------------------------------------------
	/**
	 * Text to use as the `aria-label` for the page
	 */
	assistiveText: PropTypes.string,
	/**
	 * If page is disabled
	 */
	disabled: PropTypes.bool,
	/**
	 * Indicates first item in list which is the back button
	 */
	first: PropTypes.bool,
	/**
	 * Index of page
	 */
	index: PropTypes.number,
	/**
	 * Indicates first item in list which is the next button
	 */
	last: PropTypes.bool,
	/**
	 * Index of next page
	 */
	nextIndex: PropTypes.number,
	/**
	 * An on click function
	 */
	onClick: PropTypes.func,
	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		Link: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
		Page: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
		Pagination: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
	}),
	/**
	 * Page text
	 */
	text: PropTypes.string,
};

Page.defaultProps = { disabled: false };
