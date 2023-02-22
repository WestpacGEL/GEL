import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useBrand, overrideReconciler } from '@westpac/core';

import { defaultItem } from './overrides/item';
import { defaultContent } from './overrides/content';
import { defaultIcon } from './overrides/icon';

import { useListContext } from './List';
import pkg from '../package.json';

export interface ItemProps {
	/**
	 * The look of the bullet, icon, tick and cross lists
	 */
	look?: 'primary' | 'hero' | 'neutral' | 'success' | 'danger';
	/**
	 * The list style
	 */
	type?: 'bullet' | 'link' | 'tick' | 'cross' | 'unstyled' | 'icon' | 'ordered';
	/**
	 * Renders `<a>` link element around the item content
	 */
	href?: string;
	/**
	 * The level of nesting
	 */
	nested?: number;
	/**
	 * The size of space between list elements
	 */
	spacing?: 'medium' | 'large';
	/**
	 * The icon for list item
	 */
	icon?: (...args: unknown[]) => unknown;
	/**
	 * Any renderable content
	 */
	children: React.ReactNode;
	/**
	 * The override API
	 */
	overrides?: {
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

export const Item = ({ look, type, href, nested, spacing, icon, children, ...rest }: ItemProps) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		Item: defaultItem,
		Content: defaultContent,
		Icon: defaultIcon,
	};

	const context = useListContext();
	if (!context) {
		throw new Error('<Item/> components should be wrapped in a <List>.');
	}

	const {
		look: lookCtx,
		type: typeCtx,
		nested: nestedCtx,
		spacing: spacingCtx,
		icon: iconCtx,
		overrides: componentOverrides,
	} = context;

	look = look || lookCtx;
	type = type || typeCtx;
	nested = nested || nestedCtx;
	spacing = spacing || spacingCtx;
	icon = icon || iconCtx;

	const state = {
		look,
		type,
		href,
		nested,
		spacing,
		icon,
		overrides: componentOverrides,
		...rest,
	};

	const {
		Item: { component: Item, styles: itemStyles, attributes: itemAttributes },
		Content: { component: Content, styles: contentStyles, attributes: contentAttributes },
		Icon: { component: Icon, styles: iconStyles, attributes: iconAttributes },
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	// we conditionally apply the css so it doesn't generate a class in the blender (as it does even for an empty object)
	const styles = itemStyles(state);

	return (
		<Item {...rest} state={state} {...itemAttributes(state)} {...(styles ? { css: styles } : {})}>
			<Content state={state} {...contentAttributes(state)} css={contentStyles(state)}>
				{(type === 'icon' || type === 'link') && icon && (
					<Icon state={state} {...iconAttributes(state)} css={iconStyles(state)} />
				)}
				{children}
			</Content>
		</Item>
	);
};

Item.propTypes = {
	// ----------------------------- Warning --------------------------------
	// | These PropTypes are generated from the TypeScript type definitions |
	// |     To update them edit TypeScript types and run "yarn proptypes"  |
	// ----------------------------------------------------------------------
	/**
	 * Any renderable content
	 */
	children: PropTypes.node,
	/**
	 * Renders `<a>` link element around the item content
	 */
	href: PropTypes.string,
	/**
	 * The icon for list item
	 */
	icon: PropTypes.func,
	/**
	 * The look of the bullet, icon, tick and cross lists
	 */
	look: PropTypes.oneOf(['danger', 'hero', 'neutral', 'primary', 'success']),
	/**
	 * The level of nesting
	 */
	nested: PropTypes.number,
	/**
	 * The size of space between list elements
	 */
	spacing: PropTypes.oneOf(['large', 'medium']),
	/**
	 * The list style
	 */
	type: PropTypes.oneOf(['bullet', 'cross', 'icon', 'link', 'ordered', 'tick', 'unstyled']),
};
