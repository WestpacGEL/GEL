/** @jsx jsx */

import { forwardRef, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { jsx, useBrand } from '@westpac/core';
import ScrollLock from 'react-scrolllock';

export const PopoverPanel = forwardRef(
	({ open, title, content, position, Panel, handleClose, ...props }, ref) => {
		return (
			open &&
			ReactDOM.createPortal(
				<Fragment>
					<Panel
						position={position}
						handleClose={handleClose}
						title={title}
						content={content}
						ref={ref}
						css={{
							position: 'fixed',
							top: 0,
							left: 0,
							transform: `translate(${position.left}rem, ${position.top}rem)`,
						}}
						{...props}
					/>
					<ScrollLock />
				</Fragment>,
				document.body
			)
		);
	}
);
