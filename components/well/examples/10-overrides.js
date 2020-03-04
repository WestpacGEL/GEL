/** @jsx jsx */

import { jsx } from '@westpac/core';
import { Well } from '@westpac/well';

import { Intopia } from '../../../helpers/example/components/Intopia.js';
import { Playground } from '../../../website/src/components/playground/macro';

export default ({ context, showCode, showDemo }) => {
	const overridesWithTokens = {};
	overridesWithTokens['@westpac/well'] = {
		Well: {
			styles: styles => ({
				...styles,
				outline: '1px solid red',
			}),
		},
	};

	return (
		<Playground context={context} brand={overridesWithTokens}>
			<Intopia ignore />

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
						styles: styles => ({
							...styles,
							outline: '1px solid blue',
						}),
					},
				}}
			>
				Look, I'm in a well.
			</Well>
		</Playground>
	);
};
