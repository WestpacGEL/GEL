import React from 'react';
import Nav from '../nav';
import BrandSwitcher from '../brand-switcher';
import { useBrandSwitcher } from '../providers/brand-switcher';

const Sidebar = ({ components }) => {
	const { brand } = useBrandSwitcher();
	return (
		<div>
			<p>{brand} logo</p>
			<BrandSwitcher />
			<Nav components={components} />
		</div>
	);
};

export default Sidebar;
