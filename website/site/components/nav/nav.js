/** @jsx jsx */
import { jsx } from '@westpac/core';
import Link from 'next/link';
import { useRouter } from 'next/router';

function LinkItem({ name, path }) {
	const brandParam = useRouter().query.brand || '';
	return (
		<li>
			<Link href={`${path}?brand=${brandParam}`}>
				<a>{name}</a>
			</Link>
		</li>
	);
}

const Nav = ({ components }) => {
	return (
		<ul>
			{components.map(component => (
				<LinkItem key={component.id} name={component.name} path={`/components/${component.name}`} />
			))}
		</ul>
	);
};

export default Nav;
