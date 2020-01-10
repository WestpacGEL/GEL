/** @jsx jsx */
import Link from 'next/link';
import { useRouter } from 'next/router';

import { jsx } from '@westpac/core';

import { NavigationBlock } from './navigation-block';

function LinkItem({ name, href, as }) {
	const brandName = useRouter().query.brand || '';
	return (
		<li>
			<Link href={`${href}?brand=${brandName}`} as={`${as}?brand=${brandName}`}>
				<a>{name}</a>
			</Link>
		</li>
	);
}

export const Navigation = ({ components }) => {
	const brandName = useRouter().query.brand || '';
	return (
		<div>
			<h2>GEL</h2>

			<ul>
				<LinkItem name="Home" as="/" href={`/?brand=${brandName}`} />
				<LinkItem name="Accessibility" as="/" href="/" />
				<LinkItem name="Design tokens" as="/tokens" href="/tokens" />
				<LinkItem name="Downloads" as="/" href="/" />

				<li>
					<NavigationBlock title="Foundation">
						<ul>
							<LinkItem name="Color" href="/" as="/" />
							<LinkItem name="Grid" href="/" as="/" />
							<LinkItem name="Icons" href="/" as="/" />
							<LinkItem name="Logos" href="/" as="/" />
							<LinkItem name="Spacing" href="/" as="/" />
							<LinkItem name="Typography" href="/" as="/" />
						</ul>
					</NavigationBlock>
				</li>
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
		</div>
	);
};
