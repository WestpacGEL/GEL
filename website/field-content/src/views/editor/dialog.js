/** @jsx jsx */

import { forwardRef } from 'react';
import { createPortal } from 'react-dom';
import { jsx } from '@emotion/core';

// A generic dialog solution for dropdown-menus, popovers etc. to afford
// consistent styles among the UI. Assumes placement styles are applied at
// runtime.

export const Dialog = forwardRef((props, ref) => (
	<Portal>
		<div
			css={{
				alignItems: 'center',
				backgroundColor: 'white',
				borderRadius: 3,
				boxShadow: `rgba(9, 30, 66, 0.31) 0px 0px 1px, rgba(9, 30, 66, 0.25) 0px 4px 8px -2px`,
				position: 'absolute',
				left: -99999,
				top: -99999,
				zIndex: 2,
			}}
			ref={ref}
			{...props}
		/>
	</Portal>
));

const Portal = ({ children }) => {
	if (typeof window === 'undefined') {
		return null;
	}

	return createPortal(children, document.body);
};
