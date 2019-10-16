/** @jsx jsx */

import React, { createContext, useContext } from 'react';
import PropTypes from 'prop-types';
import { jsx } from '@westpac/core';

// ==============================
// Context and Consumer Hook
// ==============================
const ListContext = createContext();

export const useListContext = () => useContext(ListContext);

// ==============================
// Component
// ==============================
export const List = ({ appearance, type, spacing, icon, ...props }) => {
	const context = useListContext();

	const listStyle = {
		appearance: appearance || (context && context.appearance) || 'hero',
		type: type || (context && context.type) || 'bullet',
		spacing: spacing || (context && context.spacing) || 'medium',
		icon: icon || (context && context.icon),
	};

	const ListType = listStyle.type === 'ordered' ? 'ol' : 'ul';

	return (
		<ListContext.Provider value={listStyle}>
			<ListType
				css={{ margin: 0, padding: listStyle.type === 'ordered' ? '0 0 0 1.25rem' : 0 }}
				{...props}
			/>
		</ListContext.Provider>
	);
};

// ==============================
// Types
// ==============================
List.propTypes = {
	/** The appearance of the bullet list */
	appearance: PropTypes.oneOf(['primary', 'hero', 'neutral']),
	/** The type of the bullet */
	type: PropTypes.oneOf(['bullet', 'link', 'tick', 'unstyled', 'icon', 'ordered']),
	/** The size of space between list elements */
	spacing: PropTypes.oneOf(['medium', 'large']),
	/** The icon for list */
	icon: PropTypes.func,
	/**  Any renderable child */
	children: PropTypes.node,
};
