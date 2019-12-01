/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import {
	MastercardAcceptedSymbol,
	BPayLandSymbol,
	AppleStoreSymbol,
	WBCLogo,
	STGLogo,
} from '@westpac/symbol';
import { Cell, Grid } from './_utils';

import { Intopia } from '../../../helpers/example/components/Intopia.js';

const Wrapper = ({ children, symbol, ...props }) => (
	<div
		css={{
			border: '2px solid red',
			padding: '24px',
			height: '100%',
		}}
		{...props}
	>
		{children} - {symbol}
	</div>
);

function Example({ brand }) {
	const overridesWithTokens = { ...brand };
	overridesWithTokens['@westpac/symbol'] = {
		Wrapper,
	};

	return (
		<GEL brand={overridesWithTokens}>
			<Intopia ignore />

			<h2>With overrides applied</h2>
			<Grid>
				<Cell>
					<MastercardAcceptedSymbol />
				</Cell>
				<Cell>
					<BPayLandSymbol />
				</Cell>
				<Cell>
					<AppleStoreSymbol />
				</Cell>
				<Cell>
					<WBCLogo />
				</Cell>
				<Cell>
					<STGLogo />
				</Cell>
			</Grid>
		</GEL>
	);
}

export default Example;
