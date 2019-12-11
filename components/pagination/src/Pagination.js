/** @jsx jsx */

import { useEffect, Children, cloneElement, createContext, useContext } from 'react';
import { jsx, useBrand, merge, wrapHandlers } from '@westpac/core';
import PropTypes from 'prop-types';

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
		throw new Error('Page sub-components should be wrapped in a <Pagination>.');
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
	...props
}) => {
	const { [pkg.name]: overridesWithTokens } = useBrand();

	const overrides = {
		css: {},
	};

	const back = {
		text: 'Back',
		visible: true,
		assistiveText: page => `Step back to page ${page + 1}`,
	};

	const next = {
		text: 'Next',
		visible: true,
		assistiveText: page => `Step forward to page ${page + 1}`,
	};

	merge(overrides, overridesWithTokens);
	merge(back, backProps);
	merge(next, nextProps);

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
		<PaginationContext.Provider value={{ current: pageLogic.current }}>
			<ul
				css={{
					display: 'flex',
					paddingLeft: 0,
					margin: '1.3125rem 0',
					borderRadius: '0.1875rem',
					listStyle: 'none',
					alignItems: 'center',
					...overrides.css,
				}}
				{...props}
			>
				{back.visible && (
					<Page
						text={back.text}
						first
						disabled={pageLogic.current === 0 && !infinite}
						assistiveText={back.assistiveText(backIndex)}
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
						onClick={wrapHandlers(
							event => page.onClick(event, index),
							event => pageLogic.setCurrent(index, event)
						)}
						first={index === 0 && !back.visible}
						last={index === pageCount - 1 && !next.visible}
					/>
				))}
				{next.visible && (
					<Page
						text={next.text}
						last
						disabled={pageLogic.current === pageCount - 1 && !infinite}
						assistiveText={next.assistiveText(nextIndex)}
						onClick={wrapHandlers(
							event => next.onClick && next.onClick(event, nextIndex),
							event => pageLogic.next(event)
						)}
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
	text: PropTypes.string,
	visible: PropTypes.bool,
	assistiveText: PropTypes.func,
	onClick: PropTypes.func,
};

Pagination.propTypes = {
	/**
	 * Index of current active page (zero-indexed)
	 */
	current: PropTypes.number.isRequired,

	/**
	 * Back button options
	 */
	back: PropTypes.shape(interaction),

	/**
	 * Next button options
	 */
	next: PropTypes.shape(interaction),

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
};

Pagination.defaultProps = {
	current: 0,
};
