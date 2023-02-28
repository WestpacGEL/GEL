import { jsx, GEL, useBrand } from '@westpac/core';
import { Switch } from '@westpac/switch';
import { Playground } from '../../../../website/src/components/playground/macro';

const Demo = ({ context, showCode, showDemo }) => {
	const brand = { ...useBrand() };
	brand['@westpac/switch'] = {
		Label: {
			styles: (styles) => ({
				...styles,
				color: 'indigo',
				paddingRight: '2rem',
			}),
		},
		Toggle: {
			styles: (styles, { checked }) => ({
				...styles,
				borderColor: 'indigo',
				backgroundColor: checked ? 'darkmagenta' : 'white',
			}),
		},
	};
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<GEL brand={brand}>
				<Switch name="example-default" label="I'm a switch" />
				<br />
				<br />
				<Switch name="example-default-2" label="I'm a switch too" />
			</GEL>
		</Playground>
	);
};

export default Demo;
