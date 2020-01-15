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
			<Heading
				tag="h2"
				size={6}
				css={{ paddingLeft: SPACING(1), marginTop: SPACING(1), marginBottom: SPACING(3) }}
			>
				GEL
			</Heading>

			<LinkList>
				<LinkItem name="Home" as="/" href="/" />
				<LinkItem name="Accessibility" as="/" href="/" />
				<LinkItem name="Design tokens" as="/tokens" href="/tokens" />
				<LinkItem name="Downloads" as="/" href="/" />

				<NavigationBlock title="Foundation" tag="li">
					<LinkList>
						<LinkItem name="Color" href="/" as="/" />
						<LinkItem name="Grid" href="/" as="/" />
						<LinkItem name="Icons" href="/" as="/" />
						<LinkItem name="Logos" href="/" as="/" />
						<LinkItem name="Spacing" href="/" as="/" />
						<NavigationBlock title="Typogrpahy" tag="li">
							<LinkList>
								<LinkItem name="Spacing" href="/" as="/" />
								<LinkItem name="Spacing" href="/" as="/" />
								<LinkItem name="Spacing" href="/" as="/" />
							</LinkList>
						</NavigationBlock>
					</LinkList>
				</NavigationBlock>

				<NavigationBlock title="Components" tag="li">
					<LinkList>
						{components.map(component => (
							<LinkItem
								key={component.id}
								name={component.name}
								as={`/components/${component.name}`}
								href={'/components/[component]'}
							/>
						))}
					</LinkList>
				</NavigationBlock>
			</LinkList>
		</Fragment>
	);
};

const LinkList = props => {
	const { SPACING } = useBrand();
	return (
		<ul
			css={{
				listStyle: 'none',
				paddingLeft: SPACING(2),
				margin: 0,
				a: {
					fontWeight: 700,
				},
				'li a': {
					fontWeight: 400,
				},
			}}
			{...props}
		/>
	);
};

const LinkItem = ({ name, href, as, tag: Tag = 'li', children }) => {
	const { SPACING } = useBrand();
	const brandName = useRouter().query.brand || '';
	return (
		<Tag>
			<Link href={`${href}?brand=${brandName}`} as={`${as}?brand=${brandName}`}>
				<a
					css={{
						cursor: 'pointer',
						display: 'block',
						textDecoration: 'none',
						fontWeight: 600,
						padding: `${SPACING(1)} 0`,
					}}
				>
					{name}
				</a>
			</Link>
			{children}
		</Tag>
	);
};
