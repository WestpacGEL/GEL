/** @jsx jsx */

import { jsx, useBrand, merge } from '@westpac/core';
import { createContext, useContext } from 'react';
import PropTypes from 'prop-types';
import pkg from '../package.json';

// ==============================
// Context and Consumer Hook
// ==============================
const ListContext = createContext();

export const useListContext = () => useContext(ListContext);

// ==============================
// Component
// ==============================

export const List = ({ look, type, spacing, icon, children, ...props }) => {
	const { [pkg.name]: overridesWithTokens } = useBrand();

	const overrides = {
		css: {},
		Icon: icon,
		nestedCSS: {},
	};
	merge(overrides, overridesWithTokens);

	const context = useListContext();
	look = (context && context.look) || look || 'primary';
	type = type || (context && context.type) || 'bullet';
	spacing = spacing || (context && context.spacing) || 'medium';
	icon = icon || overrides.Icon || (context && context.icon);
	const nested = (context && context.nested + 1) || 0;

	const ListType = type === 'ordered' ? 'ol' : 'ul';

	return (
		<ListContext.Provider
			value={{
				look,
				type,
				spacing,
				icon,
				nested,
			}}
		>
			<ListType
				css={{
					margin: 0,
					padding: type === 'ordered' ? '0 0 0 1.25rem' : 0,
					...overrides.css,
					...(overrides.nestedCSS[nested] ? overrides.nestedCSS[nested] : {}),
				}}
				{...props}
			>
				{children}
			</ListType>
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
	 * The icon for list
	 */
	icon: PropTypes.func,

	/**
	 * Any renderable child
	 */
	children: PropTypes.node.isRequired,
};
