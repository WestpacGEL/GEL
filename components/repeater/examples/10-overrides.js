/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { Repeater } from '@westpac/repeater';

const Repeat = (props) => {
	return <div {...props}>It’s not a bug – it’s an undocumented feature.</div>;
};

function Example({ brand }) {
	const overridesWithTokens = { ...brand };
	overridesWithTokens['@westpac/repeater'] = {
		Item: {
			styles: (styles) => ({
				...styles,
				border: '1px solid',
				padding: '1rem',
				marginBottom: '1rem',
			}),
		},
	};
	return (
		<GEL brand={overridesWithTokens}>
			<h2>With overrides applied</h2>
			<Repeater>
				<Repeat />
			</Repeater>

			<h2>With overrides and component overrides</h2>
			<Repeater
				overrides={{
					Item: {
						styles: (styles) => ({
							...styles,
							border: '2px dashed palevioletred',
						}),
					},
				}}
			>
				<Repeat />
			</Repeater>
		</GEL>
	);
}

export default Example;
