import { GEL, jsx } from '@westpac/core';
import { Breadcrumb, Crumb } from '@westpac/breadcrumb';

// Crumb tag as a component example
const CrumbTag = (props) => <a {...props} onClick={() => console.log(`Clicked crumb link`)} />;

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<h2>Default</h2>
			<Breadcrumb>
				<Crumb text="Home" />
				<Crumb text="Personal" />
				<Crumb text="Credit cards" />
			</Breadcrumb>

			<hr />

			<h2>Declarative</h2>

			<h3>As links</h3>
			<Breadcrumb>
				<Crumb href="#/" text="Home" />
				<Crumb href="#/personal-banking/" text="Personal" />
				<Crumb href="#/credit-cards/" text="Credit cards" />
			</Breadcrumb>

			<h3>As router</h3>
			<Breadcrumb assistiveText="Page transitions and the such">
				<Crumb text="Home" tag={CrumbTag} />
				<Crumb text="Personal" tag={CrumbTag} />
				<Crumb text="Credit cards" tag={CrumbTag} />
			</Breadcrumb>

			<hr />

			<h2>Data driven</h2>

			<h3>As links</h3>
			<Breadcrumb
				data={[
					{ href: '#/', text: 'Home' },
					{ href: '#/personal-banking/', text: 'Personal' },
					{ href: '#/credit-cards/', text: 'Credit cards' },
				]}
			/>

			<h3>As router</h3>
			<Breadcrumb
				assistiveText="Page transitions and the such"
				data={[
					{ text: 'Home', tag: CrumbTag },
					{ text: 'Personal', tag: CrumbTag },
					{ text: 'Credit cards', tag: CrumbTag },
				]}
			/>
		</GEL>
	);
}

export default Example;
