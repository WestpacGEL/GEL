/** @jsx jsx */
import { Fragment } from 'react';

import { jsx, useBrand } from '@westpac/core';

import { BrandSwitcher } from '../brand-switcher';
import { Navigation } from '.';

export const Sidebar = ({ components }) => {
	return (
		<Fragment>
			<BrandSwitcher />
			<Separator />
			<PaddingContainer>
				<Navigation components={components} />
			</PaddingContainer>
		</Fragment>
	);
};

const PaddingContainer = props => {
	const { SPACING } = useBrand();
	return <div css={{ padding: SPACING(2) }} {...props} />;
};

const Separator = () => {
	const { COLORS, SPACING } = useBrand();
	return <hr css={{ border: 'none', marginTop: SPACING(3) }} />;
};
