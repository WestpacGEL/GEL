/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { Breadcrumb, Crumb } from '@westpac/breadcrumb';
import { HouseIcon } from '@westpac/icon';

const NewCrumb = ({ current, ...rest }) => {
	return <Crumb {...rest} />;
};

const Label = ({ children, look }) => <span css={{ verticalAlign: 'middle' }}>{children}</span>;

function Example({ brand }) {
	const overwritesWithTokens = { ...brand };
	overwritesWithTokens['@westpac/breadcrumb'] = {
		Crumb: NewCrumb,
		listCSS: {
			display: 'inline-block',
			padding: 0,
			margin: '0 0 0 0.5em',
			verticalAlign: 'middle',
		},
		crumbCSS: {
			backgroundColor: 'rebeccapurple',
		},
		crumbLinkCSS: {
			color: '#fff',
		},
		Label,
		Icon: HouseIcon,
	};

	return (
		<GEL brand={overwritesWithTokens}>
			<h2>With overwrites applied</h2>
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
		</GEL>
	);
}

export default Example;
