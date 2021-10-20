/** @jsx jsx */

import { GEL, jsx, useInstanceId } from '@westpac/core';
import { useState } from 'react';
import { Compacta } from '@westpac/compacta';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<h3>Default</h3>
			<Compacta>
				<div css={{ padding: '4rem' }}>Content</div>
			</Compacta>

			<h3>With data</h3>
			<Compacta
				data={[
					{
						id: useInstanceId(),
						open: false,
						title: 'Title',
						secondaryTitle: 'Secondary',
						tertiaryTitle: 'Tertiary',
					},
					{
						id: useInstanceId(),
						open: true,
						title: 'Title 2',
						secondaryTitle: 'Secondary 2',
						tertiaryTitle: 'Tertiary 2',
					},
				]}
			>
				<div css={{ padding: '4rem' }}>Content</div>
			</Compacta>
		</GEL>
	);
}

export default Example;
