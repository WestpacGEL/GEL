/** @jsx jsx */
import { Fragment } from 'react';
import { jsx, useBrand } from '@westpac/core';
import { ArrowRightIcon } from '@westpac/icon';
import { Heading } from '@westpac/heading';
import { Item, List } from '@westpac/list';

export const PageLinks = ({ title, links }) => {
	const { COLORS, SPACING } = useBrand();
	return (
		<Fragment>
			<Heading tag="h2" size={6}>
				{title}
			</Heading>

			<hr
				css={{ border: 'none', borderTop: `solid 1px ${COLORS.border}`, margin: `${SPACING(2)} 0` }}
			/>

			<List type="icon" icon={ArrowRightIcon}>
				{links.map((link, index) => (
					<Item key={index}>{link}</Item>
				))}
			</List>
		</Fragment>
	);
};
