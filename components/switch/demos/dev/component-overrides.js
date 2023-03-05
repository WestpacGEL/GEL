import { jsx } from '@westpac/core';
import { Switch } from '@westpac/switch';
import { Playground } from '../../../../website/src/components/playground/macro';

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Switch
				name="example-default"
				label="I'm an overriden switch"
				overrides={{
					Label: {
						component: ({ state, ...props }) => <strong {...props} />,
						styles: (styles) => ({
							...styles,
							color: 'palevioletred',
							paddingRight: '2rem',
						}),
						attributes: () => ({ 'data-js': 'label' }),
					},
					Toggle: {
						styles: (styles, { checked }) => ({
							...styles,
							borderColor: 'mediumvioletred',
							backgroundColor: checked ? 'palevioletred' : 'white',
						}),
					},
				}}
			/>
		</Playground>
	);
};

export default Demo;
