import { GEL, jsx } from '@westpac/core';
import { Well } from '@westpac/well';

function Example({ brand }) {
	const overridesWithTokens = { ...brand };
	overridesWithTokens['@westpac/well'] = {
		Well: {
			styles: (styles) => ({
				...styles,
				outline: '1px solid red',
			}),
		},
	};

	return (
		<GEL brand={overridesWithTokens}>
			<h2>With overrides applied</h2>
			<Well>Look, I'm in a well.</Well>

			<hr />

			<Well>
				I am outside
				<Well>I am inside</Well>
			</Well>

			<h2>With overrides and component overrides</h2>
			<Well
				overrides={{
					Well: {
						styles: (styles) => ({
							...styles,
							outline: '1px solid blue',
						}),
					},
				}}
			>
				Look, I'm in a well.
			</Well>
		</GEL>
	);
}

export default Example;
