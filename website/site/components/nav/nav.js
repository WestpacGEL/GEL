/** @jsx jsx */
import { jsx } from '@westpac/core';
import Link from 'next/link';
import { useRouter } from 'next/router';

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
	);
};

export default Nav;
