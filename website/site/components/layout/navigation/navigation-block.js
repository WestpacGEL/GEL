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
		<Tag css={{ marginTop: SPACING(1) }}>
			<div css={{ display: 'flex', justifyContent: 'space-between' }}>
				<span>{title}</span>
				<button onClick={toggleBlock}>{isOpen ? '-' : '+'}</button>
			</div>
			{isOpen && <div>{children}</div>}
		</Tag>
	);
};
