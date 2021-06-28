/** @jsx jsx */

import { Fragment } from 'react';
import { jsx, useBrand } from '@westpac/core';
import { Playground } from '../../../../website/src/components/playground/macro';
import { Title } from '../../../../helpers/demos';

const Typography = () => {
	const { PACKS } = useBrand();

	return (
		<Fragment>
			{Object.values(PACKS.typeScale.bodyFont).map((t, i) => (
				<p css={{ ...t, margin: '0.75rem 0' }} key={i}>
					Type size: <strong>{16 * Number(t.fontSize.slice(0, -3))}</strong>
				</p>
			))}
		</Fragment>
	);
};

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Title>Sans serif system font</Title>
			<Typography />
		</Playground>
	);
};

export default Demo;
