import PropTypes from 'prop-types';
import { jsx, useBrand, overrideReconciler, devWarning } from '@westpac/core';
import React, { createContext, useContext, isValidElement } from 'react';

import { defaultList } from './overrides/list';

import { Item } from './Item';
import pkg from '../package.json';

// ==============================
// Context and Consumer Hook
// ==============================

const ListContext = createContext<any>(null);

export const useListContext = () => useContext(ListContext);

// ==============================
// Utilities - makeItems
// ==============================

const makeItems = (data: any) => {
	if (!Array.isArray(data)) {
		return null;
	}

	const result = [];
	for (let i = 0; i < data.length; i++) {
		const iterator = i;
		let nested;
		if (typeof data[iterator + 1] === 'object' && data[iterator + 1].items) {
			const { items, ...rest } = data[iterator + 1];
			nested = (
				<List key={iterator + 1} {...rest}>
					{makeItems(items)}
				</List>
			);
			i++;
		}
		if (Array.isArray(data[iterator + 1])) {
			nested = <List key={iterator + 1}>{makeItems(data[iterator + 1])}</List>;
			i++;
		}

		let item;
		let attributes = {};
		if (typeof data[iterator] === 'string') {
			item = data[iterator];
		} else if (Array.isArray(data[iterator])) {
			item = <List key={iterator}>{makeItems(data[iterator])}</List>;
		} else if (typeof data[iterator] === 'object' && data[iterator].items) {
			const { items, ...rest } = data[iterator];
			item = (
				<List key={iterator} {...rest}>
					{makeItems(items)}
				</List>
			);
		} else if (isValidElement(data[iterator])) {
			item = data[iterator];
		} else if (typeof data[iterator] === 'object') {
			const { text, ...rest } = data[iterator];
			item = text;
			attributes = rest;
		}

		result.push(
			<Item key={iterator} {...attributes}>
				{item}
				{nested && nested}
			</Item>
		);
	}

	return result;
};

export interface ListProps {
	/**
	 * The type of the bullet
	 * note: none is only used for blender
	 */
	type?: 'bullet' | 'link' | 'tick' | 'cross' | 'unstyled' | 'icon' | 'ordered' | 'none';
	/**
	 * The look of the bullet, icon, tick and cross lists
	 */
	look?: 'primary' | 'hero' | 'neutral' | 'success' | 'danger' | 'link';
	/**
	 * The size of space between list elements
	 */
	spacing?: 'medium' | 'large';
	/**
	 * The level of nesting
	 */
	nested?: number;
	/**
	 * The icon for list
	 */
	icon?: (...args: unknown[]) => unknown;
	/**
	 * Visually hidden text to use for the list.
	 *
	 * Tick list default value: "The following items are ticked"
	 */
	assistiveText?: string;
	/**
	 * Any renderable child
	 */
	children?: React.ReactNode;
	/**
	 * Data for the crumbs
	 */
	data?: string | React.ReactNode | object | unknown[][];
	/**
	 * The override API
	 */
	overrides?: {
		List?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
		Item?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
		Content?: {
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

export const List = ({
	type,
	look,
	nested,
	spacing,
	icon,
	assistiveText,
	data,
	children,
	overrides: componentOverrides,
	...rest
}: ListProps) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	devWarning(type === 'icon' && !icon, 'The icon prop is required for all type="icon" lists!');
	devWarning(!children && !data, 'Either children or data is required');
	devWarning(!!(data && !Array.isArray(data)), 'The data prop must be an array');

	const defaultOverrides = {
		List: defaultList,
	};

	const context = useListContext();

	type = type || (context && context.type) || 'bullet';
	look =
		look ||
		(context && context.look) ||
		((type === 'bullet' || type === 'tick' || type === 'cross') && 'hero') ||
		(type === 'link' && 'link');
	spacing = spacing || (context && context.spacing) || 'medium';
	icon = icon || (context && context.icon);

	if (typeof nested !== 'number') {
		nested = (context && context.nested + 1) || 0;
	}

	const state = {
		type,
		look,
		nested,
		spacing,
		icon,
		assistiveText,
		data,
		overrides: componentOverrides,
		...rest,
	};

	const {
		List: { component: List, styles: listStyles, attributes: listAttributes },
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	if (data) {
		children = makeItems(data);
	}

	return (
		<ListContext.Provider
			value={{
				type,
				look,
				spacing,
				icon,
				assistiveText,
				nested,
				overrides: componentOverrides,
			}}
		>
			<List {...rest} state={state} {...listAttributes(state)} css={listStyles(state)}>
				{children}
			</List>
		</ListContext.Provider>
	);
};

List.propTypes = {
	// ----------------------------- Warning --------------------------------
	// | These PropTypes are generated from the TypeScript type definitions |
	// |     To update them edit TypeScript types and run "yarn prop-types"  |
	// ----------------------------------------------------------------------
	/**
	 * Visually hidden text to use for the list.
	 *
	 * Tick list default value: "The following items are ticked"
	 */
	assistiveText: PropTypes.string,
	/**
	 * Any renderable child
	 */
	children: PropTypes.node,
	/**
	 * Data for the crumbs
	 */
	data: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.array),
		PropTypes.element,
		PropTypes.number,
		PropTypes.object,
		PropTypes.shape({
			'__@iterator': PropTypes.func.isRequired,
		}),
		PropTypes.string,
		PropTypes.bool,
	]),
	/**
	 * The icon for list
	 */
	icon: PropTypes.func,
	/**
	 * The look of the bullet, icon, tick and cross lists
	 */
	look: PropTypes.oneOf(['danger', 'hero', 'link', 'neutral', 'primary', 'success']),
	/**
	 * The level of nesting
	 */
	nested: PropTypes.number,
	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		Content: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
		Icon: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
		Item: PropTypes.shape({
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
	/**
	 * The size of space between list elements
	 */
	spacing: PropTypes.oneOf(['large', 'medium']),
	/**
	 * The type of the bullet
	 * note: none is only used for blender
	 */
	type: PropTypes.oneOf(['bullet', 'cross', 'icon', 'link', 'none', 'ordered', 'tick', 'unstyled']),
};
