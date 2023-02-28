import { jsx, useBrand } from '@westpac/core';
import { Fragment } from 'react';
import { VisuallyHidden } from '@westpac/a11y';
import { brandsMap } from './brand-list';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { BASE_URL } from '../../config';
import { useBrandSwitcher } from '../providers/brand-switcher';

export const BrandLogo = () => {
	const { BRAND, SPACING, PACKS } = useBrand();
	const { brand } = useBrandSwitcher();
	const logo = brandsMap[brand].logo;
	const brandCode = useRouter().query.b || '';

	return (
		<Fragment>
			<Link href={'/'} as={`${BASE_URL}?b=${brandCode}`} passHref>
				<a
					css={{
						display: 'flex',
						alignItems: 'center',
						height: 90,
						paddingLeft: SPACING(3),
						paddingRight: SPACING(3),
						background: '#fff',
						':focus': {
							outlineOffset: `-${PACKS.focus.outlineWidth} !important`,
						},
					}}
					aria-label="GEL Design System home"
				>
					{logo}
				</a>
			</Link>
			<VisuallyHidden role="status">Brand: {BRAND.name}</VisuallyHidden>
		</Fragment>
	);
};
