/** @jsx jsx */

import { useEffect, Children, cloneElement, createContext, useContext } from 'react';
import { jsx, useBrand, merge, wrapHandlers } from '@westpac/core';
import PropTypes from 'prop-types';
import { Page } from './Page';
import { usePagination } from './usePagination';
import pkg from '../package.json';

// ==============================
// Context and Consumer Hook
// ==============================
const PaginationContext = createContext();

export const usePaginationContext = () => {
	const context = useContext(PaginationContext);

	if (!context) {
		throw new Error('Page sub-components should be wrapped in a <Pagination>.');
	}

	return context;
};

// ==============================
// Component
// ==============================

export const Pagination = ({
	current,
	back: backProps,
	next: nextProps,
	data,
	children,
	...props
}) => {
	const { [pkg.name]: overridesWithTokens } = useBrand();
	const pageLogic = usePagination(current);

	const overrides = {
		css: {},
	};

	const back = {
		label: 'Back',
		visible: true,
		ariaLabel: 'Step back one page',
	};

	const next = {
		label: 'Next',
		visible: true,
		ariaLabel: 'Step to the next page',
	};

	merge(overrides, overridesWithTokens);
	merge(back, backProps);
	merge(next, nextProps);

	useEffect(() => {
		pageLogic.setCurrent(current);
	}, [current]);

	let allChildren;

	const pageCount = data ? data.pages.length : Children.count(children);

	if (data) {
		allChildren = data.pages.map((page, index) => (
			<Page
				key={index}
				index={index}
				label={page.label}
				onClick={wrapHandlers(page.onClick, event => {
					event.preventDefault();
					pageLogic.setCurrent(index);
				})}
				first={index === 0 && !back.visible}
				last={index === pageCount - 1 && !next.visible}
			/>
		));
	} else {
		allChildren = Children.map(children, (child, index) =>
			cloneElement(child, {
				index,
				first: index === 0 && !back.visible,
				last: index === pageCount - 1 && !next.visible,
				onClick: wrapHandlers(child.props.onClick, event => {
					event.preventDefault();
					pageLogic.setCurrent(index);
				}),
			})
		);
	}

	return (
		<PaginationContext.Provider value={{ current: pageLogic.current }}>
			<ul
				css={{
					display: 'flex',
					paddingLeft: 0,
					margin: '1.3125rem 0',
					borderRadius: '0.1875rem',
					listStyle: 'none',
					...overrides.css,
				}}
				{...props}
			>
				{back.visible && (
					<Page
						label={back.label}
						first
						disabled={pageLogic.current === 0}
						ariaLabel={back.ariaLabel}
						onClick={wrapHandlers(back.onClick, event => {
							event.preventDefault();
							pageLogic.previous();
						})}
					/>
				)}
				{allChildren}
				{next.visible && (
					<Page
						label={next.label}
						last
						disabled={pageLogic.current === pageCount - 1}
						ariaLabel={next.ariaLabel}
						onClick={wrapHandlers(next.onClick, event => {
							event.preventDefault();
							pageLogic.next();
						})}
					/>
				)}
			</ul>
		</PaginationContext.Provider>
	);
};

// ==============================
// Types
// ==============================
const interaction = {
	label: PropTypes.string,
	visible: PropTypes.bool,
	ariaLabel: PropTypes.string,
	onClick: PropTypes.func,
};

Pagination.propTypes = {
	/**
	 * Index of current active page (zero-indexed)
	 */
	current: PropTypes.number.isRequired,

	/**
	 *	Back button options
	 */
	back: PropTypes.shape(interaction),

	/**
	 * Next button options
	 */
	next: PropTypes.shape(interaction),

	/**
	 * Alternative to children
	 */
	data: PropTypes.object,

	/**  Any renderable child */
	children: PropTypes.node,
};

Pagination.defaultProps = {
	current: 0,
};
