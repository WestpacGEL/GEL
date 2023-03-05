import { GEL, jsx } from '@westpac/core';
import {
	MastercardAcceptedSymbol,
	BPayLandSymbol,
	AppleStoreSymbol,
	WBCLogo,
	STGLogo,
} from '@westpac/symbol';
import { Cell, Grid, Name } from './_utils';
import { Fragment } from 'react';

const SymbolOverride = ({ symbol, state: _, children, ...rest }) => (
	<Fragment>
		<div {...rest}>{children}</div>
		<div css={{ marginBottom: '1rem' }}>
			<Name>{symbol}</Name>
		</div>
	</Fragment>
);

function Example({ brand }) {
	const overridesWithTokens = { ...brand };
	overridesWithTokens['@westpac/symbol'] = {
		Symbol: {
			styles: (styles) => ({
				...styles,
				outline: '1px solid red',
			}),
			component: SymbolOverride,
		},
	};

	return (
		<GEL brand={overridesWithTokens}>
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

			<h2>With overrides and component overrides</h2>
			<MastercardAcceptedSymbol
				overrides={{
					Svg: {
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
