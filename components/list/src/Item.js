/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
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
		subComponent: {
			Item: {
				styles: itemStyles,
				component: ItemWrapper,
				attributes: state => state,
			},
			Icon: {
				styles: iconStyles,
				component: IconWrapper,
				attributes: state => state,
			},
		},
	};

	const {
		look: lookCtx,
		type: typeCtx,
		nested: nestedCtx,
		spacing: spacingCtx,
		icon: iconCtx,
		overrides: componentOverrides,
	} = useListContext();

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
		componentOverrides,
		state
	);

	return (
		<overrides.subComponent.Item.component
			css={overrides.subComponent.Item.styles}
			{...overrides.subComponent.Item.attributes(state)}
		>
			{type === 'icon' && overrides.subComponent.Icon.component && (
				<overrides.subComponent.Icon.component
					size="small"
					color={COLORS.muted}
					css={overrides.subComponent.Icon.styles}
					{...overrides.subComponent.Icon.attributes(state)}
				/>
			)}
			{children}
		</overrides.subComponent.Item.component>
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
	 * The size of space between list elements
	 */
	spacing: PropTypes.oneOf(['medium', 'large']),

	/**
	 * The level of nesting
	 */
	nested: PropTypes.number,

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
