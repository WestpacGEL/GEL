/** @jsx jsx */

import React from 'react';
import { jsx, useBrand } from '@westpac/core';
import { Button } from '@westpac/button';
import { HamburgerMenuIcon } from '@westpac/icon';
import { useSidebar } from '../providers/sidebar';

export const MenuButton = (props) => {
	const { PACKS } = useBrand();
	const { setIsOpen } = useSidebar();

	const Icon = () => <HamburgerMenuIcon color="#fff" />;

	return (
		<Button
			look="unstyled"
			size="large"
			onClick={() => setIsOpen((status) => !status)}
			iconBefore={Icon}
			css={{
				backgroundColor: 'transparent',
				padding: '21px 12px',

				':focus': {
					outlineOffset: `-${PACKS.focus.outlineWidth}`,
				},
			}}
			{...props}
		/>
	);
};
