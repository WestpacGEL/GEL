/** @jsx jsx */

import React, { Children, createContext, useContext } from 'react';
import PropTypes from 'prop-types';
import { jsx, useMediaQuery } from '@westpac/core';
import { HeaderButton } from './HeaderButton';

// ==============================
// Context and consumer hook
// ==============================

const HeaderRightContext = createContext({ isRight: false });

export const useHeaderRightContext = () => useContext(HeaderRightContext);

// ==============================
// Component
// ==============================

export const HeaderRight = props => {
	const mq = useMediaQuery();

	let isRightPadding = true; //RHS padding by default

	// Disable right padding if there's a HeaderButton last child
	const lastChild = Children.toArray(props.children)[Children.count(props.children) - 1];
	if (lastChild.type === HeaderButton) isRightPadding = false;

	return (
		<HeaderRightContext.Provider value={{ isRight: true }}>
			<div
				css={mq({
					display: 'flex',
					alignItems: 'center',
					marginLeft: 'auto', //flex auto align right
					marginRight: isRightPadding && ['0.75rem', '1.5rem'],
				})}
				{...props}
			/>
		</HeaderRightContext.Provider>
	);
};

// ==============================
// Types
// ==============================

HeaderRight.propTypes = {
	/**
	 * Component children
	 */
	children: PropTypes.node.isRequired,
};
HeaderRight.defaultProps = {};
