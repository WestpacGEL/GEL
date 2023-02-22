import { GEL, jsx } from '@westpac/core';
import { Breadcrumb, Crumb } from '@westpac/breadcrumb';
import { HouseIcon } from '@westpac/icon';

const Icon = ({ state: _, ...props }) => <HouseIcon color="red" {...props} />;

function Example({ brand }) {
	const overridesWithTokens = { ...brand };
	overridesWithTokens['@westpac/breadcrumb'] = {
		Breadcrumb: {
			styles: (styles) => ({
				...styles,
				outline: '1px solid red',
			}),
		},
		Icon: {
			component: Icon,
		},
	};

	return (
		<GEL brand={overridesWithTokens}>
			<h2>With overrides applied</h2>
			<Breadcrumb>
				<Crumb href="#/" text="Home" />
				<Crumb href="#/personal-banking/" text="Personal" />
				<Crumb href="#/credit-cards/" text="Credit cards" />
			</Breadcrumb>

			<hr />

			<Breadcrumb
				data={[
					{ href: '#/', text: 'Home' },
					{ href: '#/personal-banking/', text: 'Personal' },
					{ href: '#/credit-cards/', text: 'Credit cards' },
				]}
			/>

			<h2>With overrides and component overrides</h2>
			<Breadcrumb
				overrides={{
					Crumb: {
						styles: (styles) => ({
							...styles,
							outline: '3px dotted green',
						}),
					},
				}}
			>
				<Crumb href="#/" text="Home" />
				<Crumb href="#/personal-banking/" text="Personal" />
				<Crumb
					overrides={{
						Crumb: {
							styles: (styles) => ({
								...styles,
								outline: '3px dotted blue',
							}),
						},
					}}
					href="#/credit-cards/"
					text="Credit cards"
				/>
			</Breadcrumb>

			<hr />

			<Breadcrumb
				overrides={{
					Crumb: {
						styles: (styles) => ({
							...styles,
							outline: '3px dotted green',
						}),
					},
				}}
				data={[
					{ href: '#/', text: 'Home' },
					{ href: '#/personal-banking/', text: 'Personal' },
					{ href: '#/credit-cards/', text: 'Credit cards' },
				]}
			/>
		</GEL>
	);
}

export default Example;
