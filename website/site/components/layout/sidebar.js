/** @jsx jsx */
import { Fragment } from 'react';

import { jsx, useBrand } from '@westpac/core';

import { BrandSwitcher } from '../brand-switcher';
import { Navigation } from '.';

export const Sidebar = ({ components }) => {
	return (
		<Wrapper>
			<BrandSwitcher />
			<Navigation components={components} />
		</Wrapper>
	);
};

const Wrapper = props => {
	const { SPACING } = useBrand();
	return <div css={{ padding: SPACING(2) }} {...props} />;
};
