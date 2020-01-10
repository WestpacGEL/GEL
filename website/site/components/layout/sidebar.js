import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { BrandSwitcher } from '../brand-switcher';
import { Navigation } from '.';
import { useBrandSwitcher } from '../providers/brand-switcher';

export const Sidebar = ({ components }) => {
	const brandName = useRouter().query.brand || '';
	const { brand } = useBrandSwitcher();
	return (
		<div>
			<Link href={`/?brand=${brandName}`}>
				<a>{brand} logo</a>
			</Link>
			<BrandSwitcher />
			<Navigation components={components} />
		</div>
	);
};
