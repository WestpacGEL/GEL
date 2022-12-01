/** @jsx jsx */

import { jsx, useBrand, overrideReconciler, wrapHandlers, mergeWith } from '@westpac/core';
import { useEffect, Children, createContext, useContext } from 'react';
import { VisuallyHidden } from '@westpac/a11y';
import PropTypes from 'prop-types';

import { defaultPagination } from './overrides/pagination';
import { defaultList } from './overrides/list';

import { usePagination } from './usePagination';
import { Page } from './Page';
import pkg from '../package.json';

// ==============================
// Context and Consumer Hook
// ==============================

const PaginationContext = createContext(null);

export const usePaginationContext = () => {
	const context = useContext(PaginationContext);

	if (!context) {
		throw new Error('<Page/> components should be wrapped in a <Pagination>.');
	}

	return context;
};

// ==============================
// Component
// ==============================

export const Pagination = ({
	current,
	infinite,
	back: backProps,
	next: nextProps,
	data,
	children,
	overrides: componentOverrides,
	...rest
}: typeof Pagination.propTypes & typeof Pagination.defaultProps) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		Pagination: defaultPagination,
		List: defaultList,
	};

	const state = {
		current,
		infinite,
		back: backProps,
		next: nextProps,
		data,
		overrides: componentOverrides,
		...rest,
	};

	const {
		Pagination: {
			component: Pagination,
			styles: paginationStyles,
			attributes: paginationAttributes,
		},
		List: { component: List, styles: listStyles, attributes: listAttributes },
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	const backDefault = {
		text: 'Back',
		visible: true,
		assistiveText: (page) => null,
	};

	const nextDefault = {
		text: 'Next',
		visible: true,
		assistiveText: (page) => null,
	};

	const back = mergeWith(backDefault, backProps);
	const next = mergeWith(nextDefault, nextProps);

	let allChildren = data;

	if (!data) {
		allChildren = Children.map(children, (child) => ({
			...child.props,
		}));
	}

	const pageLogic = usePagination({ pages: allChildren, current, infinite });

	useEffect(() => {
		pageLogic.setCurrent(current);
	}, [current]);

	const pageCount = allChildren.length;

	let nextIndex = pageLogic.current + 1;
	if (nextIndex > pageCount - 1) {
		if (infinite) {
			nextIndex = 0;
		} else {
			nextIndex = pageCount - 1;
		}
	}

	let backIndex = pageLogic.current - 1;
	if (backIndex < 0) {
		if (infinite) {
			backIndex = pageCount - 1;
		} else {
			backIndex = 0;
		}
	}

	return (
		<PaginationContext.Provider value={{ current: pageLogic.current, state }}>
			<Pagination
				{...rest}
				state={state}
				{...paginationAttributes(state)}
				css={paginationStyles(state)}
			>
				<List state={state} {...listAttributes(state)} css={listStyles(state)}>
					{back.visible && (
						<Page
							first
							text={back.text}
							nextIndex={backIndex}
							disabled={pageLogic.current === 0 && !infinite}
							assistiveText={back.assistiveText(backIndex)}
							onClick={wrapHandlers(
								(event) => back.onClick && back.onClick(event, backIndex),
								(event) => pageLogic.previous(event)
							)}
						/>
					)}
					{allChildren.map((page, index) => (
						<Page
							key={index}
							index={index}
							text={page.text}
							onClick={(event) => pageLogic.setPage(event, allChildren, index)}
						/>
					))}
					{next.visible && (
						<Page
							last
							text={next.text}
							nextIndex={nextIndex}
							disabled={pageLogic.current === pageCount - 1 && !infinite}
							assistiveText={next.assistiveText(nextIndex)}
							onClick={wrapHandlers(
								(event) => next.onClick && next.onClick(event, nextIndex),
								(event) => pageLogic.next(event)
							)}
						/>
					)}
				</List>
				<VisuallyHidden role="status">{`Page ${pageLogic.current + 1}`}</VisuallyHidden>
			</Pagination>
		</PaginationContext.Provider>
	);
};

// ==============================
// Types
// ==============================

Pagination.propTypes = {
	/**
	 * Index of current active page (zero-indexed)
	 */
	current: PropTypes.number.isRequired,

	/**
	 * Infinite option
	 */
	infinite: PropTypes.bool,

	/**
	 * Back button options
	 */
	back: PropTypes.shape({
		text: PropTypes.string,
		visible: PropTypes.bool,
		assistiveText: PropTypes.func,
		onClick: PropTypes.func,
	}),

	/**
	 * Next button options
	 */
	next: PropTypes.shape({
		text: PropTypes.string,
		visible: PropTypes.bool,
		assistiveText: PropTypes.func,
		onClick: PropTypes.func,
	}),

	/**
	 * Alternative to children
	 */
	data: PropTypes.arrayOf(
		PropTypes.shape({
			text: PropTypes.string.isRequired,
			onClick: PropTypes.func.isRequired,
		})
	),

	/**
	 * Any renderable child
	 */
	children: PropTypes.node,

	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		Pagination: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		List: PropTypes.shape({
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

Pagination.defaultProps = {
	current: 0,
};
