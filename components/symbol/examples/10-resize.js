import React from 'react';
import { MastercardAcceptedSymbol } from '../src';

export default () => (
	<>
		<h2>Resize by width</h2>

		<h3>
			Width <code>100</code>
		</h3>
		<MastercardAcceptedSymbol width={100} />

		<h3>
			Responsive width <code>[100, 150, 200, 250]</code>
		</h3>
		<MastercardAcceptedSymbol width={[100, 150, 200, 250]} />

		<hr />

		<h2>Resize by height</h2>

		<h3>
			Height <code>100</code>
		</h3>
		<MastercardAcceptedSymbol height={100} />

		<h3>
			Responsive height <code>[100, 150, 200, 250]</code>
		</h3>
		<MastercardAcceptedSymbol height={[100, 150, 200, 250]} />
	</>
);
