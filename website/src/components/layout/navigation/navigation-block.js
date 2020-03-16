/** @jsx jsx */
import { useState } from 'react';

import { jsx, useBrand } from '@westpac/core';

export const NavigationBlock = ({ title, tag: Tag = 'div', children }) => {
	const { SPACING } = useBrand();
	const [isOpen, setIsOpen] = useState(false);

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
					padding: `${SPACING(1)} 0`,
					background: 'none',
					border: 'none',
					fontWeight: 700,
				}}
			>
				<span>{title}</span>
				<span css={{ fontSize: 16, lineHeight: 1 }}>{isOpen ? '-' : '+'}</span>
			</button>
			{isOpen && <div>{children}</div>}
		</div>
	);
};
