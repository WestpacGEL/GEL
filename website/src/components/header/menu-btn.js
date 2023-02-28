import React, { useRef } from 'react';
import { jsx, useBrand } from '@westpac/core';
import { Button } from '@westpac/button';
import { HamburgerMenuIcon } from '@westpac/icon';
import { useSidebarContext } from '../providers/sidebar';

export const MenuBtn = (props) => {
	const { PACKS } = useBrand();
	const { isOpen, open: openSidebar } = useSidebarContext();
	const menuBtnRef = useRef();

	const handleClick = () => {
		openSidebar(menuBtnRef);
	};

	const Icon = () => <HamburgerMenuIcon color="#fff" />;

	return (
		<Button
			ref={menuBtnRef}
			look="unstyled"
			size="large"
			iconBefore={Icon}
			assistiveText="Main menu"
			aria-expanded={isOpen}
			onClick={handleClick}
			css={{
				backgroundColor: 'transparent',
				padding: '21px 12px',

				':focus': {
					outlineOffset: `-${PACKS.focus.outlineWidth} !important`,
				},
			}}
			{...props}
		/>
	);
};
