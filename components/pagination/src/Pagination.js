/** @jsx jsx */

import { jsx, useBrand, overrideReconciler, wrapHandlers, mergeWith } from '@westpac/core';
import { useEffect, Children, createContext, useContext } from 'react';
import PropTypes from 'prop-types';

import { Pagination as PaginationWrapper, paginationStyles } from './overrides/pagination';
import { PageList, pageListStyles } from './overrides/pageList';
import { usePagination } from './usePagination';
import pkg from '../package.json';
import { Page } from './Page';

// ==============================
// Context and Consumer Hook
// ==============================
const PaginationContext = createContext();

export const usePaginationContext = () => {
	const context = useContext(PaginationContext);

	if (!context) {
		throw new Error('Page components should be wrapped in <Pagination>.');
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
	className,
	overrides: componentOverrides,
	...rest
}) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		Pagination: {
			styles: paginationStyles,
			component: PaginationWrapper,
			attributes: (_, a) => a,
		},
		PageList: {
			styles: pageListStyles,
			component: PageList,
			attributes: (_, a) => a,
		},
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

	const overrides = overrideReconciler(
		defaultOverrides,
		tokenOverrides,
		brandOverrides,
		componentOverrides
	);

	const backDefault = {
		text: 'Back',
		visible: true,
	};

	const nextDefault = {
		text: 'Next',
		visible: true,
	};

	const back = mergeWith(backDefault, backProps);
	const next = mergeWith(nextDefault, nextProps);

	let allChildren = data;

	if (!data) {
		allChildren = Children.map(children, child => ({
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
		<PaginationContext.Provider
			value={{ current: pageLogic.current, overrides: componentOverrides }}
		>
			<overrides.Pagination.component
				aria-label={`Page ${current + 1}`}
				className={className}
				{...overrides.Pagination.attributes(state)}
				css={overrides.Pagination.styles(state)}
			>
				<overrides.PageList.component
					{...overrides.PageList.attributes(state)}
					css={overrides.PageList.styles(state)}
				>
					{back.visible && (
						<Page
							text={back.text}
							first
							nextIndex={backIndex}
							disabled={pageLogic.current === 0 && !infinite}
							onClick={wrapHandlers(
								event => back.onClick && back.onClick(event, backIndex),
								event => pageLogic.previous(event)
							)}
						/>
					)}
					{allChildren.map((page, index) => (
						<Page
							key={index}
							index={index}
							text={page.text}
							onClick={event => pageLogic.setPage(event, allChildren, index)}
						/>
					))}
					{next.visible && (
						<Page
							text={next.text}
							last
							nextIndex={nextIndex}
							disabled={pageLogic.current === pageCount - 1 && !infinite}
							onClick={wrapHandlers(
								event => next.onClick && next.onClick(event, nextIndex),
								event => pageLogic.next(event)
							)}
						/>
					)}
				</overrides.PageList.component>
			</overrides.Pagination.component>
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
	 * Infinite option
	 */
	infinite: PropTypes.bool,

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
		PageList: PropTypes.shape({
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
