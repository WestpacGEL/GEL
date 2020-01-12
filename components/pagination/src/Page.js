/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import PropTypes from 'prop-types';

import { Page as PageWrapper, pageStyles } from './overrides/page';
import { Link, linkStyles } from './overrides/link';
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
	onClick,
	disabled,
	assistiveText,
	...rest
}) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		Page: {
			styles: pageStyles,
			component: PageWrapper,
			attributes: (_, a) => a,
		},
		Link: {
			styles: linkStyles,
			component: Link,
			attributes: (_, a) => a,
		},
	};

	const { current, overrides: componentOverrides } = usePaginationContext();
	const active = index === current;

	const state = {
		index,
		nextIndex,
		text,
		first,
		last,
		disabled,
		assistiveText,
		current,
		active,
		overrides: componentOverrides,
		...rest,
	};

	const overrides = overrideReconciler(
		defaultOverrides,
		tokenOverrides,
		brandOverrides,
		componentOverrides
	);

	return (
		<overrides.Page.component
			{...overrides.Page.attributes(state)}
			css={overrides.Page.styles(state)}
		>
			<overrides.Link.component
				aria-label={assistiveText ? assistiveText : `Go to page ${text}`}
				disabled={disabled}
				onClick={onClick}
				{...overrides.Link.attributes(state)}
				css={overrides.Link.styles(state)}
			>
				{text}
			</overrides.Link.component>
		</overrides.Page.component>
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
	 * Page text
	 */
	text: PropTypes.string,

	/**
	 * If page is disabled
	 */
	disabled: PropTypes.bool,

	/**
	 * Text to use as the `aria-label` for the page
	 */
	assistiveText: PropTypes.string,

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
