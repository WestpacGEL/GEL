/** @jsx jsx */

import { jsx, useBrand, overrideReconciler, devWarning } from '@westpac/core';
import { createContext, useContext, isValidElement } from 'react';
import PropTypes from 'prop-types';

import { List as ListWrapper, listStyles } from './overrides/list';
import pkg from '../package.json';
import { Item } from './Item';

// ==============================
// Context and Consumer Hook
// ==============================
const ListContext = createContext();

export const useListContext = () => useContext(ListContext);

// ==============================
// Utilities - makeItems
// ==============================

const makeItems = data => {
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
	look,
	type,
	nested,
	spacing,
	icon,
	assistiveText,
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

	devWarning(type === 'icon' && !icon, 'The icon prop is required for all type="icon" lists!');
	devWarning(!children && !data, 'Either children or data is required');
	devWarning(data && !Array.isArray(data), 'The data prop must be an array');

	const defaultOverrides = {
		List: {
			styles: listStyles,
			component: ListWrapper,
			attributes: (_, a) => a,
		},
	};

	const context = useListContext();
	look = look || (context && context.look) || 'primary';
	type = type || (context && context.type) || 'bullet';
	spacing = spacing || (context && context.spacing) || 'medium';
	icon = icon || (context && context.icon);
	if (typeof nested !== 'number') {
		nested = (context && context.nested + 1) || 0;
	}

	const state = {
		look,
		type,
		nested,
		spacing,
		icon,
		assistiveText,
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

	if (data) {
		children = makeItems(data);
	}

	return (
		<ListContext.Provider
			value={{
				look,
				type,
				spacing,
				icon,
				assistiveText,
				nested,
				overrides: componentOverrides,
			}}
		>
			<overrides.List.component
				// As we're using `list-style: none` CSS, we need `role="list"` for VoiceOver to announce this as a list (see https://unfetteredthoughts.net/2017/09/26/voiceover-and-list-style-type-none/)
				role={type !== 'ordered' ? 'list' : undefined}
				className={className}
				aria-label={assistiveText}
				{...overrides.List.attributes(state)}
				css={overrides.List.styles(state)}
			>
				{children}
			</overrides.List.component>
		</ListContext.Provider>
	);
};

// ==============================
// Types
// ==============================
List.propTypes = {
	/**
	 * The look of the bullet list
	 */
	look: PropTypes.oneOf(['primary', 'hero', 'neutral']),

	/**
	 * The type of the bullet
	 */
	type: PropTypes.oneOf(['bullet', 'link', 'tick', 'unstyled', 'icon', 'ordered']),

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
	 * Visually hidden text to use for the list
	 */
	assistiveText: function(props, propName, componentName) {
		const propValue = props[propName];

		// Optional, but must be a string
		if (propValue && typeof propValue !== 'string') {
			return new Error(
				`Invalid prop \`${propName}\` of type \`${typeof propValue}\` supplied to \`${componentName}\`, expected \`string\`.`
			);
		}
		// Required, if type is 'tick'
		if (props.type === 'tick' && typeof propValue === 'undefined') {
			return new Error(
				`The prop \`${propName}\` is marked as required in \`${componentName}\` when prop \`type\` is \`tick\`, but its value is \`undefined\`.`
			);
		}
		return null;
	},

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
