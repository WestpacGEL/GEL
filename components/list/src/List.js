/** @jsx jsx */

import { jsx, useBrand, overrideReconciler, devWarning } from '@westpac/core';
import { createContext, useContext, isValidElement } from 'react';
import PropTypes from 'prop-types';

import { defaultList } from './overrides/list';

import { Item } from './Item';
import pkg from '../package.json';

// ==============================
// Context and Consumer Hook
// ==============================

const ListContext = createContext();

export const useListContext = () => useContext(ListContext);

// ==============================
// Utilities - makeItems
// ==============================

const makeItems = (data) => {
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

		let item = '';
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
}) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	devWarning(type === 'icon' && !icon, 'The icon prop is required for all type="icon" lists!');
	devWarning(!children && !data, 'Either children or data is required');
	devWarning(data && !Array.isArray(data), 'The data prop must be an array');

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

// ==============================
// Types
// ==============================

List.propTypes = {
	/**
	 * The type of the bullet
	 * note: none is only used for blender
	 */
	type: PropTypes.oneOf(['bullet', 'link', 'tick', 'cross', 'unstyled', 'icon', 'ordered', 'none']),

	/**
	 * The look of the bullet, icon, tick and cross lists
	 */
	look: PropTypes.oneOf(['primary', 'hero', 'neutral', 'success', 'danger', 'link']),

	/**
	 * The size of space between list elements
	 */
	spacing: PropTypes.oneOf(['medium', 'large']),

	/**
	 * The level of nesting
	 */
	nested: PropTypes.number,

	/**
	 * The icon for list
	 */
	icon: PropTypes.func,

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
	data: PropTypes.arrayOf(
		PropTypes.oneOfType([PropTypes.string, PropTypes.node, PropTypes.object, PropTypes.array])
	),

	/**
	 * Any renderable child
	 */
	children: PropTypes.node,

	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		List: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		Item: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		Icon: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
	}),
};
