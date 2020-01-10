/** @jsx jsx */
import { Fragment } from 'react';

import { jsx, useBrand } from '@westpac/core';

import { BrandSwitcher } from '../brand-switcher';
import { Navigation } from '.';

export const Sidebar = ({ components }) => {
	return (
		<Fragment>
			<Padding>
				<BrandSwitcher />
			</Padding>
			<Separator />
			<Padding>
				<Navigation components={components} />
			</Padding>
		</Fragment>
	);
};

const Padding = props => {
	const { SPACING } = useBrand();
	return <div css={{ padding: SPACING(2) }} {...props} />;
};

const Separator = () => {
	const { COLORS, SPACING } = useBrand();
	return (
		<hr css={{ border: 'none', borderTop: `solid 1px ${COLORS.border}`, marginTop: SPACING(3) }} />
	);
};
