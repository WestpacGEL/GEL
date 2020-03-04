/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';

import { Item as ItemWrapper, itemStyles } from './overrides/item';
import { Icon as IconWrapper, iconStyles } from './overrides/icon';
import { useListContext } from './List';
import pkg from '../package.json';

// ==============================
// Component
// ==============================
export const Item = ({ look, type, nested, spacing, icon, children, ...rest }) => {
	const {
		COLORS,
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		Item: {
			styles: itemStyles,
			component: ItemWrapper,
			attributes: () => null,
		},
		Icon: {
			styles: iconStyles,
			component: IconWrapper,
			attributes: () => null,
		},
	};

	const context = useListContext();
	if (!context) {
		throw new Error('Item components should be wrapped in a <List>.');
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

	const overrides = overrideReconciler(
		defaultOverrides,
		tokenOverrides,
		brandOverrides,
		componentOverrides
	);

	const allChildren = Children.map(children, child => {
		if (child.props && child.props.href && /^#.+/.test(child.props.href)) {
			return cloneElement(child, {
				onClick: () => document.getElementById(child.props.href.slice(1)).focus(),
			});
		} else {
			return child;
		}
	});

	return (
		<overrides.Item.component
			look={look}
			type={type}
			nested={nested}
			spacing={spacing}
			icon={icon}
			{...rest}
			{...overrides.Item.attributes(state)}
			css={overrides.Item.styles(state)}
		>
			{type === 'icon' && icon && (
				<overrides.Icon.component
					look={look}
					type={type}
					nested={nested}
					spacing={spacing}
					icon={icon}
					size="small"
					color={COLORS.muted}
					{...overrides.Icon.attributes(state)}
					css={overrides.Icon.styles(state)}
				/>
			)}
			{allChildren}
		</overrides.Item.component>
	);
};

// ==============================
// Types
// ==============================
Item.propTypes = {
	/**
	 * The look of the bullet list
	 */
	look: PropTypes.oneOf(['primary', 'hero', 'neutral']),

	/**
	 * The type of the bullet
	 */
	type: PropTypes.oneOf(['bullet', 'link', 'tick', 'unstyled', 'icon', 'ordered']),

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
