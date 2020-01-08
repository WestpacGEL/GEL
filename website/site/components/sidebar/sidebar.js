import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Nav from '../nav';
import BrandSwitcher from '../brand-switcher';
import { useBrandSwitcher } from '../providers/brand-switcher';

const Sidebar = ({ components }) => {
	const brandName = useRouter().query.brand || '';
	const { brand } = useBrandSwitcher();
	return (
		<div>
			<Link href={`/?brand=${brandName}`}>
				<a>{brand} logo</a>
			</Link>
			<BrandSwitcher />
			<Nav components={components} />
		</div>
	);
};

export default Sidebar;
