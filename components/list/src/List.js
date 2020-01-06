/** @jsx jsx */

import { jsx, useBrand, overrideReconciler, devWarning } from '@westpac/core';
import { createContext, useContext } from 'react';
import PropTypes from 'prop-types';

import { Wrapper, wrapperStyles } from './overrides/wrapper';
import pkg from '../package.json';
import { Item } from './Item';

// ==============================
// Context and Consumer Hook
// ==============================
const ListContext = createContext();

export const useListContext = () => useContext(ListContext);

// ==============================
// Component
// ==============================

export const List = ({
	look,
	type,
	nested,
	spacing,
	icon,
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

	const defaultOverrides = {
		styles: wrapperStyles,
		component: Wrapper,
		attributes: state => state,
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
		data,
		overrides: componentOverrides,
		...rest,
	};

	const overrides = overrideReconciler(
		defaultOverrides,
		tokenOverrides,
		brandOverrides,
		componentOverrides,
		state
	);

	return (
		<ListContext.Provider
			value={{
				look,
				type,
				spacing,
				icon,
				nested,
				overrides: componentOverrides,
			}}
		>
			<overrides.component css={overrides.styles} {...overrides.attributes(state)}>
				{children}
			</overrides.component>
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
	 * Any renderable child
	 */
	children: PropTypes.node.isRequired,

	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		styles: PropTypes.func,
		component: PropTypes.elementType,
		attributes: PropTypes.object,
		subComponent: PropTypes.shape({
			Item: PropTypes.shape({
				styles: PropTypes.func,
				component: PropTypes.elementType,
				attributes: PropTypes.object,
			}),
			Icon: PropTypes.shape({
				styles: PropTypes.func,
				component: PropTypes.elementType,
				attributes: PropTypes.object,
			}),
		}),
	}),
};
