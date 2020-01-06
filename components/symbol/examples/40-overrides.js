/** @jsx jsx */

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

import { Intopia } from '../../../helpers/example/components/Intopia.js';

const Wrapper = ({ children, symbol, assistiveText, ...rest }) => (
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
		styles: styles => ({
			...styles,
			outline: '1px solid red',
		}),
		component: Wrapper,
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
			<h2>With overrides and component overrides</h2>
			<Grid>
				<Cell>
					<MastercardAcceptedSymbol
						overrides={{
							subComponent: {
								Svg: {
									styles: styles => ({
										...styles,
										outline: '3px dotted green',
									}),
								},
							},
						}}
					/>
				</Cell>
				<Cell></Cell>
				<Cell></Cell>
				<Cell></Cell>
			</Grid>
		</GEL>
	);
}

export default Example;
