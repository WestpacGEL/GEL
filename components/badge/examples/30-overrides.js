/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { Badge } from '@westpac/badge';

const Wrapper = ({ state: { look }, children, ...rest }) => (
	<span {...rest}>
		{children}
		<a
			href="#"
			css={{
				color: look === 'faint' ? 'red' : '#fff',
				marginLeft: '0.5em',
			}}
		>
			Link
		</a>
	</span>
);

function Example({ brand }) {
	const overridesWithTokens = { ...brand };
	overridesWithTokens['@westpac/badge'] = {
		Badge: {
			styles: (styles, { look }) => ({
				...styles,
				backgroundColor: look === 'neutral' ? 'rebeccapurple' : styles.backgroundColor,
				outline: '1px solid red',
			}),
			component: Wrapper,
		},
	};

	return (
		<GEL brand={overridesWithTokens}>
			<h2>With overrides applied</h2>
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

			<h2>With overrides and component overrides</h2>
			<Badge
				value="Default overridden"
				overrides={{
					Badge: {
						styles: (styles) => ({
							...styles,
							outline: '3px dotted green',
						}),
					},
				}}
			/>
		</GEL>
	);
}

export default Example;
