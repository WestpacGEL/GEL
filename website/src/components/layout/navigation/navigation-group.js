/** @jsx jsx */

import { jsx, useBrand, useInstanceId } from '@westpac/core';
import { AddIcon, RemoveIcon } from '@westpac/icon';
import { useState, useEffect } from 'react';
import { NavigationItem, StyledItem } from './navigation-item';

export const NavigationGroup = ({ title, isBlockOpen, level, children }) => {
	const { COLORS, PACKS } = useBrand();
	const [isOpen, setIsOpen] = useState(isBlockOpen);
	const [instanceId, setInstanceId] = useState();
	const toggleBlock = () => {
		setIsOpen((currentState) => !currentState);
	};

	useEffect(() => {
		setInstanceId(`nav-group-${useInstanceId()}`);
	}, []);

	return (
		<NavigationItem>
			<StyledItem
				tag="button"
				level={level}
				onClick={toggleBlock}
				aria-expanded={isOpen}
				aria-controls={instanceId}
				css={{
					display: 'flex',
					width: '100%',
					justifyContent: 'space-between',
					cursor: 'pointer',
					border: 0,
					background: 'transparent',
					':focus': {
						outlineOffset: `-${PACKS.focus.outlineWidth}`,
					},
				}}
			>
				<span>{title}</span>
				{isOpen ? (
					<RemoveIcon size="small" color={COLORS.muted} />
				) : (
					<AddIcon size="small" color={COLORS.muted} />
				)}
			</StyledItem>
			<div id={instanceId} css={{ display: !isOpen && 'none' }} aria-hidden={!isOpen}>
				{children}
			</div>
		</NavigationItem>
	);
};
