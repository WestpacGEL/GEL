/** @jsx jsx */
import { useState } from 'react';

import { jsx } from '@westpac/core';

export const NavigationBlock = ({ title, tag: Tag = 'div', isBlockOpen, children }) => {
	const [isOpen, setIsOpen] = useState(isBlockOpen);

	const toggleBlock = () => {
		setIsOpen(currentState => !currentState);
	};
	return (
		<div>
			<button
				onClick={toggleBlock}
				css={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
					width: '100%',
					background: 'none',
					border: 'none',
					display: 'flex',
					height: '48px',
					alignItems: 'center',
				}}
			>
				<span>{title}</span>
				<span css={{ fontSize: 20, lineHeight: 1 }}>{isOpen ? '-' : '+'}</span>
			</button>
			{isOpen && <div>{children}</div>}
		</div>
	);
};
