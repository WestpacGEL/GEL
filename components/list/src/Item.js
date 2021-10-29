/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import PropTypes from 'prop-types';

import { defaultItem } from './overrides/item';
import { defaultIcon } from './overrides/icon';

import { useListContext } from './List';
import pkg from '../package.json';

// ==============================
// Component
// ==============================

export const Item = ({ look, type, nested, spacing, icon, children, ...rest }) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		Item: defaultItem,
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
		nested,
		spacing,
		icon,
		overrides: componentOverrides,
		...rest,
	};

	const {
		Item: { component: Item, styles: itemStyles, attributes: itemAttributes },
		Icon: { component: Icon, styles: iconStyles, attributes: iconAttributes },
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	// we conditionally apply the css so it doesn't generate a class in the blender (as it does even for an empty object)
	const styles = itemStyles(state);

	return (
		<Item {...rest} state={state} {...itemAttributes(state)} {...(styles ? { css: styles } : {})}>
			{(type === 'icon' || type === 'link') && icon && (
				<Icon state={state} {...iconAttributes(state)} css={iconStyles(state)} />
			)}
			{children}
		</Item>
	);
};

// ==============================
// Types
// ==============================

Item.propTypes = {
	/**
	 * The look of the bullet, icon, tick and cross lists
	 */
	look: PropTypes.oneOf(['primary', 'hero', 'neutral', 'success', 'danger']),

	/**
	 * The list style
	 */
	type: PropTypes.oneOf(['bullet', 'link', 'tick', 'cross', 'unstyled', 'icon', 'ordered']),

	/**
	 * The level of nesting
	 */
	nested: PropTypes.number,

	/**
	 * The size of space between list elements
	 */
	spacing: PropTypes.oneOf(['medium', 'large']),

	/**
	 * The icon for list item
	 */
	icon: PropTypes.func,

	/**
	 * Any renderable content
	 */
	children: PropTypes.node.isRequired,

	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
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
