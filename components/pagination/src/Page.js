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
	disabled,
	assistiveText,
	onClick,
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
			attributes: () => null,
		},
		Link: {
			styles: linkStyles,
			component: Link,
			attributes: () => null,
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
		onClick,
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
			index={index}
			nextIndex={nextIndex}
			text={text}
			first={first}
			last={last}
			disabled={disabled}
			assistiveText={assistiveText}
			current={current}
			active={active}
			{...rest}
			{...overrides.Page.attributes(state)}
			css={overrides.Page.styles(state)}
		>
			<overrides.Link.component
				aria-current={active ? 'page' : undefined}
				aria-label={assistiveText}
				disabled={disabled}
				onClick={onClick}
				index={index}
				nextIndex={nextIndex}
				text={text}
				first={first}
				last={last}
				disabled={disabled}
				assistiveText={assistiveText}
				current={current}
				active={active}
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
