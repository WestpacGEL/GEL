import { jsx, useBrand } from '@westpac/core';
import { Fragment } from 'react';
import { Playground } from '../../../../website/src/components/playground/macro';
import { Title } from '../../../../helpers/demos';

const Weights = () => {
	const { PACKS, TYPE } = useBrand();
	const weightMap = {
		Light: 300,
		Regular: 400,
		Medium: 500,
		Bold: 700,
	};

	return (
		<Fragment>
			{Object.entries(weightMap).map((w, i) => (
				<p
					key={i}
					css={{ ...PACKS.typeScale.bodyFont[4], ...TYPE.bodyFont[w[1]], margin: '0.75rem 0' }}
				>
					{`${w[0]}: ${w[1]}`}
				</p>
			))}
		</Fragment>
	);
};

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Title>Sans serif system font</Title>
			<Weights />
		</Playground>
	);
};

export default Demo;
