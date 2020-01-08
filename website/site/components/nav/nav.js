/** @jsx jsx */
import { jsx } from '@westpac/core';
import Link from 'next/link';
import { useRouter } from 'next/router';

import NavBlock from './nav-block';

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

const Nav = ({ components }) => {
	return (
		<div>
			<h2>GEL</h2>

			<ul>
				<LinkItem name="Home" as="/" href="/" />
				<LinkItem name="Accessibility" as="/" href="/" />
				<LinkItem name="Design tokens" as="/" href="/" />
				<LinkItem name="Downloads" as="/" href="/" />

				<li>
					<NavBlock title="Foundation">
						<ul>
							<LinkItem name="Color" href="/" as="/" />
							<LinkItem name="Grid" href="/" as="/" />
							<LinkItem name="Icons" href="/" as="/" />
							<LinkItem name="Logos" href="/" as="/" />
							<LinkItem name="Spacing" href="/" as="/" />
							<LinkItem name="Typography" href="/" as="/" />
						</ul>
					</NavBlock>
				</li>
				<li>
					<NavBlock title="Components">
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
					</NavBlock>
				</li>
			</ul>
		</div>
	);
};

export default Nav;
