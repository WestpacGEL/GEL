/** @jsx jsx */
import { Fragment } from 'react';

import { jsx, useBrand } from '@westpac/core';

import { BrandSwitcher } from '../brand-switcher';
import { Navigation } from '.';

export const Sidebar = ({ items }) => {
	return (
		<Fragment>
			<BrandSwitcher />
			<Separator />
			<Navigation items={items} />
		</Fragment>
	);
};

const Separator = () => {
	const { SPACING } = useBrand();
	return <hr css={{ border: 'none', marginTop: SPACING(3) }} />;
};
