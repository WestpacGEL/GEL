import PropTypes from 'prop-types';
import { jsx, useBrand, overrideReconciler, wrapHandlers, mergeWith } from '@westpac/core';
import React, { useEffect, Children, createContext, useContext } from 'react';
import { VisuallyHidden } from '@westpac/a11y';

import { defaultPagination } from './overrides/pagination';
import { defaultList } from './overrides/list';

import { usePagination } from './usePagination';
import { Page } from './Page';
import pkg from '../package.json';

// ==============================
// Context and Consumer Hook
// ==============================

const PaginationContext = createContext<any>(null);

export const usePaginationContext = () => {
	const context = useContext(PaginationContext);

	if (!context) {
		throw new Error('<Page/> components should be wrapped in a <Pagination>.');
	}

	return context;
};

interface PaginationProps {
	/**
	 * Index of current active page (zero-indexed)
	 */
	current: number;
	/**
	 * Infinite option
	 */
	infinite?: boolean;
	/**
	 * Back button options
	 */
	back?: {
		text?: string;
		visible?: boolean;
		assistiveText?: (...args: unknown[]) => unknown;
		onClick?: (...args: unknown[]) => unknown;
	};
	/**
	 * Next button options
	 */
	next?: {
		text?: string;
		visible?: boolean;
		assistiveText?: (...args: unknown[]) => unknown;
		onClick?: (...args: unknown[]) => unknown;
	};
	/**
	 * Alternative to children
	 */
	data?: {
		text: string;
		onClick(...args: unknown[]): unknown;
	}[];
	/**
	 * Any renderable child
	 */
	children?: React.ReactNode;
	/**
	 * The override API
	 */
	overrides?: {
		Pagination?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
		List?: {
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

export const Pagination = ({
	current = 0,
	infinite,
	back: backProps,
	next: nextProps,
	data,
	children,
	overrides: componentOverrides,
	...rest
}: PaginationProps) => {
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
		assistiveText: (page: any) => null,
	};

	const nextDefault = {
		text: 'Next',
		visible: true,
		assistiveText: (page: any) => null,
	};

	const back = mergeWith(backDefault, backProps);
	const next = mergeWith(nextDefault, nextProps);

	let allChildren = data;

	if (!data) {
		allChildren = Children.map(children, (child) => ({
			...child?.props,
		}));
	}

	const pageLogic = usePagination({ pages: allChildren, current, infinite });

	useEffect(() => {
		pageLogic.setCurrent(current);
	}, [current, pageLogic]);

	const pageCount = allChildren?.length;

	let nextIndex = pageLogic.current + 1;
	if (pageCount && nextIndex > pageCount - 1) {
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
					{back?.visible && (
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
					{allChildren?.map((page, index) => (
						<Page
							key={index}
							index={index}
							text={page.text}
							onClick={(event) => pageLogic.setPage(event, allChildren, index)}
						/>
					))}
					{next?.visible && (
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

Pagination.propTypes = {
	// ----------------------------- Warning --------------------------------
	// | These PropTypes are generated from the TypeScript type definitions |
	// |     To update them edit TypeScript types and run "yarn prop-types"  |
	// ----------------------------------------------------------------------
	/**
	 * Back button options
	 */
	back: PropTypes.shape({
		assistiveText: PropTypes.func,
		onClick: PropTypes.func,
		text: PropTypes.string,
		visible: PropTypes.bool,
	}),
	/**
	 * Any renderable child
	 */
	children: PropTypes.node,
	/**
	 * Index of current active page (zero-indexed)
	 */
	current: PropTypes.number.isRequired,
	/**
	 * Alternative to children
	 */
	data: PropTypes.arrayOf(
		PropTypes.shape({
			onClick: PropTypes.func.isRequired,
			text: PropTypes.string.isRequired,
		})
	),
	/**
	 * Infinite option
	 */
	infinite: PropTypes.bool,
	/**
	 * Next button options
	 */
	next: PropTypes.shape({
		assistiveText: PropTypes.func,
		onClick: PropTypes.func,
		text: PropTypes.string,
		visible: PropTypes.bool,
	}),
	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		Link: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
		List: PropTypes.shape({
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
};

Pagination.defaultProps = { current: 0 };
