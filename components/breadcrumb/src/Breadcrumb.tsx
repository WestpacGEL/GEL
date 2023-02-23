import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import { createContext, useContext, cloneElement, Children, ReactNode } from 'react';

import { defaultBreadcrumb } from './overrides/breadcrumb';
import { defaultList } from './overrides/list';

import { Crumb } from './Crumb';
import pkg from '../package.json';

// ==============================
// Context and Consumer Hook
// ==============================

const BreadcrumbContext = createContext(null);

export const useBreadcrumbContext = () => {
	const context = useContext(BreadcrumbContext);

	if (!context) {
		throw new Error('<Crumb/> components should be wrapped in a <Breadcrumb>.');
	}

	return context;
};

export interface BreadcrumbProps {
	/**
	 * Data for the crumbs
	 */
	data?: {
		text: string;
		href?: string;
		onClick?: (...args: unknown[]) => unknown;
	}[];
	/**
	 * Text to use as the `aria-label` for the breadcrumb
	 */
	assistiveText: string;
	/**
	 * Children
	 */
	children?: ReactNode;
	/**
	 * The override API
	 */
	overrides?: {
		Breadcrumb?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
		List?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
		Crumb?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
		Link?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
		Icon?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
	};
}

// ==============================
// Component
// ==============================

export const Breadcrumb = ({
	data,
	assistiveText = 'Breadcrumb',
	children,
	overrides: componentOverrides,
	...rest
}: BreadcrumbProps) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		Breadcrumb: defaultBreadcrumb,
		List: defaultList,
	};

	const state = {
		data,
		assistiveText,
		overrides: componentOverrides,
		...rest,
	};

	const {
		Breadcrumb: {
			component: Breadcrumb,
			styles: breadcrumbStyles,
			attributes: breadcrumbAttributes,
		},
		List: { component: List, styles: listStyles, attributes: listAttributes },
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	let allChildren = [];
	if (data) {
		data.map(({ href, text, tag, onClick }, index) => {
			allChildren.push(
				<Crumb
					key={index}
					current={index === data.length - 1}
					href={href}
					text={text}
					tag={tag}
					onClick={onClick}
				/>
			);
		});
	} else {
		const length = Children.count(children);
		allChildren = Children.map(children, (child, index) => {
			return cloneElement(
				child,
				{
					current: index === length - 1,
				},
				index
			);
		});
	}

	return (
		<BreadcrumbContext.Provider value={{ state }}>
			<Breadcrumb state={state} {...breadcrumbAttributes(state)} css={breadcrumbStyles(state)}>
				<List {...rest} state={state} {...listAttributes(state)} css={listStyles(state)}>
					{allChildren}
				</List>
			</Breadcrumb>
		</BreadcrumbContext.Provider>
	);
};

Breadcrumb.propTypes = {
	// ----------------------------- Warning --------------------------------
	// | These PropTypes are generated from the TypeScript type definitions |
	// |     To update them edit TypeScript types and run "yarn proptypes"  |
	// ----------------------------------------------------------------------
	/**
	 * Text to use as the `aria-label` for the breadcrumb
	 */
	assistiveText: PropTypes.string.isRequired,
	/**
	 * Children
	 */
	children: PropTypes.node,
	/**
	 * Data for the crumbs
	 */
	data: PropTypes.arrayOf(
		PropTypes.shape({
			href: PropTypes.string,
			onClick: PropTypes.func,
			text: PropTypes.string.isRequired,
		})
	),
	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		Breadcrumb: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
		Crumb: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
		Icon: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
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
	}),
};

Breadcrumb.defaultProps = { assistiveText: 'Breadcrumb' };
