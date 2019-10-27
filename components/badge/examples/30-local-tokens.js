/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { Badge } from '@westpac/badge';

const Wrapper = ({ children, look }) => (
	<span>
		{children}
		<a
			href="#"
			css={{
				color: look === 'faint' ? '#000' : '#fff',
				marginLeft: '0.5em',
			}}
		>
			Link
		</a>
	</span>
);

function Example({ brand }) {
	const brandWithTokens = { ...brand };
	brandWithTokens['@westpac/badge'] = {
		neutral: {
			css: {
				backgroundColor: 'rebeccapurple',
				outline: '1px solid red',
			},
		},
		Wrapper,
	};

	return (
		<GEL brand={brandWithTokens}>
			<h2>With local tokens applied</h2>
			<p>
				<Badge value="Default" />
			</p>
			<p>
				<Badge look="primary" value="Primary" /> <Badge look="hero" value="Hero" />{' '}
				<Badge look="neutral" value="Neutral" /> <Badge look="faint" value="Faint" />
			</p>
			<p>
				<Badge look="success" value="Success" /> <Badge look="info" value="Info" />{' '}
				<Badge look="warning" value="Warning" /> <Badge look="danger" value="Danger" />
			</p>
		</GEL>
	);
}

export default Example;
