import { jsx } from '@westpac/core';
import { Button } from '@westpac/button';
import { Playground } from '../../../../website/src/components/playground/macro';

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Button look="primary">Primary standard</Button> <Button look="hero">Hero standard</Button>{' '}
			<Button look="faint">Faint standard</Button>
		</Playground>
	);
};

export default Demo;
