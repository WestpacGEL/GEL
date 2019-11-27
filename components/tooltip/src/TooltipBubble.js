/** @jsx jsx */

import { forwardRef } from 'react';
import ReactDOM from 'react-dom';
import { jsx } from '@westpac/core';

export const TooltipBubble = forwardRef(({ tooltipId, text, visible, position, ...props }, ref) => {
	return ReactDOM.createPortal(
		<span
			id={tooltipId}
			ref={ref}
			css={{
				visibility: visible ? 'visible' : 'hidden',
				position: 'absolute',
				top: 0,
				left: 0,
				transform: `translate(${position.left}rem, ${position.top}rem)`,
				margin: '0 0 0.375rem 0',
				borderRadius: 3,
				padding: '0.4375rem',
				width: '18.75rem',
				color: '#fff',
				backgroundColor: '#000',
				fontSize: '0.75rem',
				textAlign: 'center',
				lineHeight: 1.2,
				whiteSpace: 'normal',
				pointerEvents: 'none',
				transition: 'opacity 0.2 ease, visibility 0.2 ease',
				transitionDelay: '100ms',
				// zIndex: 100,

				'::after': {
					content: "''",
					position: 'absolute',
					[position.placement === 'top' ? 'bottom' : 'top']: '-0.3125rem',
					left: '50%',
					marginLeft: '-0.3125rem',
					width: 0,
					[position.placement === 'top' ? 'borderTop' : 'borderBottom']: '0.3125rem solid #000',
					borderRight: '0.3125rem solid transparent',
					borderLeft: '0.3125rem solid transparent',
					fontSize: 0,
					lineHeight: 0,
				},
			}}
			{...props}
		>
			{text}
		</span>,
		document.body
	);
});
