/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import PropTypes from 'prop-types';

import { defaultPage } from './overrides/page';
import { defaultLink } from './overrides/link';

import { usePaginationContext } from './Pagination';
import pkg from '../package.json';

// ==============================
// Component
// ==============================

export const Page = ({
	index,
	nextIndex,
	text,
	first,
	last,
	disabled,
	assistiveText,
	onClick,
	overrides,
	...rest
}: typeof Page.propTypes & typeof Page.defaultProps) => {
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

// ==============================
// Types
// ==============================

Page.propTypes = {
	/**
	 * Index of page
	 */
	index: PropTypes.number,

	/**
	 * Index of next page
	 */
	nextIndex: PropTypes.number,

	/**
	 * Page text
	 */
	text: PropTypes.string,

	/**
	 * Indicates first item in list which is the back button
	 */
	first: PropTypes.bool,

	/**
	 * Indicates first item in list which is the next button
	 */
	last: PropTypes.bool,

	/**
	 * If page is disabled
	 */
	disabled: PropTypes.bool,

	/**
	 * Text to use as the `aria-label` for the page
	 */
	assistiveText: PropTypes.string,

	/**
	 * An on click function
	 */
	onClick: PropTypes.func,

	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		Pagination: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		Page: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		Link: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
	}),
};

Page.defaultProps = {
	disabled: false,
};
