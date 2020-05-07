/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';
import { AddIcon, RemoveIcon } from '@westpac/icon';
import { useState } from 'react';
import { NavigationItem, StyledItem } from './navigation-item';

export const NavigationGroup = ({ title, isBlockOpen, level, children }) => {
	const { COLORS } = useBrand();
	const [isOpen, setIsOpen] = useState(isBlockOpen);
	const toggleBlock = () => {
		setIsOpen((currentState) => !currentState);
	};

	return (
		<NavigationItem>
			<StyledItem tag="button" level={level} onClick={toggleBlock} css={{ width: '100%' }}>
				<span>{title}</span>
				{isOpen ? (
					<RemoveIcon size="small" color={COLORS.muted} />
				) : (
					<AddIcon size="small" color={COLORS.muted} />
				)}
			</StyledItem>
			{isOpen && children}
		</NavigationItem>
	);
};
