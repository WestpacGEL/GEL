/** @jsx jsx */
import { Fragment } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { jsx, useBrand } from '@westpac/core';
import { Heading } from '@westpac/heading';

import { NavigationBlock } from './navigation-block';

export const Navigation = ({ components }) => {
	const brandName = useRouter().query.brand || '';
	const { SPACING } = useBrand();
	return (
		<Fragment>
			<Heading tag="h2" size={6} css={{ marginTop: SPACING(1) }}>
				GEL
			</Heading>

			<ul>
				<LinkItem name="Home" as="/" href={`/?brand=${brandName}`} />
				<LinkItem name="Accessibility" as="/" href="/" />
				<LinkItem name="Design tokens" as="/tokens" href="/tokens" />
				<LinkItem name="Downloads" as="/" href="/" />

				<NavigationBlock title="Foundation" tag="li">
					<ul>
						<LinkItem name="Color" href="/" as="/" />
						<LinkItem name="Grid" href="/" as="/" />
						<LinkItem name="Icons" href="/" as="/" />
						<LinkItem name="Logos" href="/" as="/" />
						<LinkItem name="Spacing" href="/" as="/" />
						<NavigationBlock title="Typogrpahy" tag="li">
							<ul>
								<LinkItem name="Spacing" href="/" as="/" />
								<LinkItem name="Spacing" href="/" as="/" />
								<LinkItem name="Spacing" href="/" as="/" />
							</ul>
						</NavigationBlock>
					</ul>
				</NavigationBlock>

				<li>
					<NavigationBlock title="Components">
						<ul>
							{components.map(component => (
								<LinkItem
									key={component.id}
									name={component.name}
									as={`/components/${component.name}`}
									href={'/components/[component]'}
								/>
							))}
						</ul>
					</NavigationBlock>
				</li>
			</ul>
		</Fragment>
	);
};

const LinkItem = ({ name, href, as, tag: Tag = 'li', children }) => {
	const brandName = useRouter().query.brand || '';
	return (
		<Tag>
			<Link href={`${href}?brand=${brandName}`} as={`${as}?brand=${brandName}`}>
				<a>{name}</a>
			</Link>
			{children}
		</Tag>
	);
};
