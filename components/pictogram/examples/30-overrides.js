/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import {
	Pictogram,
	ATMPictogram,
	AccessibilityPictogram,
	AeroplanePictogram,
	WBCBankCardPictogram,
} from '@westpac/pictogram';
import { Grid, Cell, Name } from './_util';

function Example({ brand }) {
	const overridesWithTokens = { ...brand };
	overridesWithTokens['@westpac/pictogram'] = {};

	return (
		<GEL brand={overridesWithTokens}>
			<h2>Color overrides</h2>

			<Grid>
				<Cell>
					<ATMPictogram
						mode={{
							highlight: 'green',
						}}
					/>
					<Name>ATMPictogram</Name>
				</Cell>
				<Cell>
					<AccessibilityPictogram
						mode={{
							highlight: 'hotpink',
							outline: 'rebeccapurple',
						}}
					/>
					<Name>AccessibilityPictogram</Name>
				</Cell>
				<Cell>
					<AeroplanePictogram />
					<Name>AeroplanePictogram</Name>
				</Cell>
				<Cell>
					<WBCBankCardPictogram />
					<Name>WBCBankCardPictogram</Name>
				</Cell>
			</Grid>
		</GEL>
	);
}

export default Example;
