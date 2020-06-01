/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';
import { ArrowRightIcon } from '@westpac/icon';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { BASE_PAGE } from '../../config';

export const ComponentLink = ({ children, link }) => {
	const { COLORS } = useBrand();
	const brandName = useRouter().query.b || '';
	return (
		<Link href={`${BASE_PAGE}?b=${brandName}`} as={link} passHref>
			<a
				css={{
					height: '55px',
					cursor: 'pointer',
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
					fontSize: '14px',
					color: COLORS.text,
					textDecoration: 'none',
				}}
			>
				{children}
				<ArrowRightIcon color={COLORS.primary} />
			</a>
		</Link>
	);
};
