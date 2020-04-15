/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { Breadcrumb, Crumb } from '@westpac/breadcrumb';

import { Intopia } from '../../../helpers/example/components/Intopia.js';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<Intopia />

			<h2>Declarative as links</h2>
			<Breadcrumb>
				<Crumb href="#/" text="Home" />
				<Crumb href="#/personal-banking/" text="Personal" />
				<Crumb href="#/credit-cards/" text="Credit cards" />
			</Breadcrumb>

			<hr />

			<h2>Declarative as router</h2>
			<Breadcrumb assistiveText="Page transitions and the such">
				<Crumb text="Home" onClick={() => console.log('Clicked Home')} />
				<Crumb text="Personal" onClick={() => console.log('Clicked Personal')} />
				<Crumb text="Credit cards" onClick={() => console.log('Clicked Credit cards')} />
			</Breadcrumb>

			<hr />

			<h2>Data driven as links</h2>
			<Breadcrumb
				data={[
					{ href: '#/', text: 'Home' },
					{ href: '#/personal-banking/', text: 'Personal' },
					{ href: '#/credit-cards/', text: 'Credit cards' },
				]}
			/>

			<h2>Data driven as router</h2>
			<Breadcrumb
				assistiveText="Page transitions and the such"
				data={[
					{ text: 'Home', onClick: () => console.log('Clicked Home') },
					{ text: 'Personal', onClick: () => console.log('Clicked Personal') },
					{ text: 'Credit cards', onClick: () => console.log('Clicked Credit cards') },
				]}
			/>
		</GEL>
	);
}

export default Example;
